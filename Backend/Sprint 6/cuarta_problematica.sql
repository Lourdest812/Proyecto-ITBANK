-- La información de las cuentas resulta critica para la compañía, por eso es necesario crear una tabla denominada “auditoria_cuenta” 
-- para guardar losdatos movimientos, con los siguientes campos: old_id, new_id, old_balance,new_balance, old_iban, new_iban, old_type,
-- new_type, user_action,created_ato 

CREATE TABLE auditoria_cuenta (
    audit_id SERIAL PRIMARY KEY, -- Use the appropriate data type for your database
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
-- WHEN
--BEGIN
--STATEMENTS
-- END;

