-- Listar la cantidad de clientes por nombre de sucursal ordenando de mayor a menor
SELECT s.branch_name, COUNT(c.customer_id) AS "clients"
FROM sucursal AS s
LEFT JOIN cliente AS c ON s.branch_id = c.branch_id
GROUP BY s.branch_name
ORDER BY c.customer_id DESC;


-- Obtener la cantidad de tarjetas de crédito por tipo por sucursal
SELECT su.branch_name AS "Nombre de Sucursal", c.account_type AS "Tipo de Cuenta", COUNT(t.card_id) AS "Cantidad de Tarjetas de Crédito"
FROM tarjeta t
JOIN cuenta c ON t.account_id = c.account_id
JOIN cliente cl ON c.customer_id = cl.customer_id
JOIN sucursal su ON cl.branch_id = su.branch_id
WHERE t.card_type = 'Crédito'
GROUP BY su.branch_name, c.account_type
ORDER BY su.branch_name, c.account_type;


-- Obtener el promedio de créditos otorgado por sucursal
SELECT
    su.branch_name,
    AVG(l.total_loans) AS "loans_avg"
FROM sucursal su
LEFT JOIN cliente cl ON su.branch_id = cl.branch_id
LEFT JOIN (
    SELECT cl.customer_id, SUM(p.loan_total) AS total_loans
    FROM cliente cl
    LEFT JOIN prestamo p ON cl.customer_id = p.customer_id
    GROUP BY cl.customer_id
) l ON cl.customer_id = l.customer_id
GROUP BY su.branch_name
ORDER BY su.branch_name;

-- La información de las cuentas resulta critica para la compañía, por eso es necesario crear una tabla denominada “auditoria_cuenta” 
-- para guardar losdatos movimientos, con los siguientes campos: old_id, new_id, old_balance,new_balance, old_iban, new_iban, old_type,
-- new_type, user_action,created_ato 

CREATE TABLE auditoria_cuenta (
    -- audit_id INTEGER PRIMARY KEY AUTOINCREMENT,
    old_id INT,
    new_id INT,
    old_balance DECIMAL,
    new_balance DECIMAL,
    old_iban VARCHAR(255),
    new_iban VARCHAR(255),
    old_type VARCHAR(50),
    new_type VARCHAR(50),
    user_action VARCHAR(255),
    created_at TIMESTAMP
);

-- Crear un trigger que después de actualizar en la tabla cuentas los campos balance, IBAN o tipo de 
-- cuenta registre en la tabla auditoria o Restar $100 a las cuentas 10,11,12,13,14

CREATE TRIGGER data_update
AFTER 
UPDATE
ON cuenta
WHEN old.balance <> new.balance OR old.iban <> new.iban OR old.account_type <> new.account_type
BEGIN
	INSERT INTO auditoria_cuenta VALUES(
	old.account_id,
	new.account_id,
	old.balance,
	new.balance,
	old.iban,
	new.iban,
	old.account_type,
	new.account_type,
	'UPDATE',
	DATETIME('NOW')
	);
END;



-- Restar $100 a las cuentas 10,11,12,13,14
UPDATE cuenta
SET balance = CASE
	WHEN account_id BETWEEN 10 AND 14 THEN balance - 100
	ELSE balance
END;

SELECT * FROM cuenta;

SELECT * FROM auditoria_cuenta;



-- Mediante índices mejorar la performance la búsqueda de clientes por DNI
CREATE INDEX idx_clientes_DNI ON cliente (customer_DNI);
SELECT * FROM cliente;
SELECT customer_name, customer_surname
FROM cliente
WHERE customer_DNI = 20595714;



-- Crear la tabla “movimientos” con los campos de identificación del movimiento, número de cuenta, monto, tipo de operación y hora
CREATE TABLE movimientos (
    movement_id INTEGER PRIMARY KEY AUTOINCREMENT,
    account_number INT,
    amount DECIMAL,
    operation_type VARCHAR(50),
    timestamp TIMESTAMP
);

END;

-- Mediante el uso de transacciones, hacer una transferencia de 1000$ desde la cuenta 200 a la cuenta 400
BEGIN TRANSACTION;
    UPDATE cuenta
    SET balance = balance - 1000
    WHERE account_id = 200;
    
    UPDATE cuenta
    SET balance = balance + 1000
    WHERE account_id = 400;
    
    -- En caso de no poder realizar la operación de forma completa, realizar un ROLLBACK

-- Insertar un nuevo movimiento en la tabla "movimientos"
INSERT INTO movimientos (account_number, amount, operation_type, timestamp)
VALUES (200, 1000, 'Transferencia', DATETIME('NOW'));
COMMIT;