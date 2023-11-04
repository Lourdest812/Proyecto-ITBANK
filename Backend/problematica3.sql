--Profesor el codigo de select de cada uno funciona por separado pero cuando le uno deja de funcionar.
--Cual seria el prolema??
CREATE TABLE resultados AS
SELECT 
    'Cuentas con saldo negativo' AS consulta,
    account_id, customer_id, balance, iban
FROM cuenta
WHERE balance < 0;
UNION ALL
SELECT
    'Clientes con Z en el apellido' AS consulta,
    customer_name, customer_surname, strftime('%Y', 'now') - strftime('%Y', dob) AS edad
FROM cliente
WHERE customer_surname LIKE '%Z%';
UNION ALL
SELECT
    'Personas llamadas Brendan en sus sucursales' AS consulta,
    c.customer_name, c.customer_surname, strftime('%Y', 'now') - strftime('%Y', c.dob) AS edad, s.branch_name
FROM cliente c
INNER JOIN sucursal s ON c.branch_id = s.branch_id
WHERE c.customer_name = 'Brendan';

-- seleccionar los préstamos con un importe mayor a $80,000 y los préstamos prendarios
INSERT INTO resultados (consulta, loan_id, loan_type, importe)

SELECT
    'Préstamos con importe > $80,000' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE CAST(loan_total AS REAL) / 100.0 > 80000;
UNION ALL
SELECT
    'Préstamos prendarios' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE loan_type = 'Prendario';

-- seleccionar los préstamos con importe > importe medio
INSERT INTO resultados (consulta, loan_id, loan_type, importe)
SELECT
    'Préstamos con importe > importe medio' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE CAST(loan_total AS REAL) / 100.0 > (
    SELECT AVG(CAST(loan_total AS REAL) / 100.0) FROM prestamo
);

-- contar la cantidad de clientes menores de 50 años
INSERT INTO resultados (consulta, cantidad_clientes_menores_50)
SELECT
    'Cantidad de clientes menores de 50 años' AS consulta,
    COUNT(*)
FROM cliente
WHERE strftime('%Y', 'now') - strftime('%Y', dob) < 50;

-- seleccionar las primeras 5 cuentas con saldo mayor a $8,000
INSERT INTO resultados (consulta, account_id, customer_id, balance, iban)
SELECT
    'Primeras 5 cuentas con saldo > $8,000' AS consulta,
    account_id, customer_id, balance, iban
FROM cuenta
WHERE balance > 8000
LIMIT 5;

-- seleccionar los préstamos con fecha en abril, junio y agosto, ordenados por importe
INSERT INTO resultados (consulta, loan_id, loan_type, importe)
SELECT
    'Préstamos en abril, junio y agosto ordenados por importe' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE strftime('%m', loan_date) IN ('04', '06', '08')
ORDER BY importe;

-- importe total de los préstamos agrupados por tipo de préstamo
INSERT INTO resultados (consulta, loan_type, loan_total_accu)
SELECT
    'Importe total de préstamos por tipo de préstamo' AS consulta,
    loan_type,
    SUM(CAST(loan_total AS REAL) / 100.0) AS loan_total_accu
FROM prestamo
GROUP BY loan_type;

-- Seleccionar todos los resultados
SELECT *
FROM resultados
ORDER BY consulta, branch_name;