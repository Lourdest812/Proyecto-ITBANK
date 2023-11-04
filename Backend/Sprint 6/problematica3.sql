-- Seleccionar las cuentas con saldo negativo
SELECT 
    'Cuentas con saldo negativo' AS consulta,
    account_id, customer_id, balance, iban
FROM cuenta
WHERE balance < 0;

-- Seleccionar el nombre, apellido y edad de los clientes que tengan en el apellido la letra Z
SELECT
    'Clientes con Z en el apellido' AS consulta,
    customer_name, customer_surname, strftime('%Y', 'now') - strftime('%Y', dob) AS edad
FROM cliente
WHERE customer_surname LIKE '%Z%';

-- Seleccionar el nombre, apellido, edad y nombre de sucursal de las personascuyo nombre sea “Brendan” y el resultado ordenarlo por nombre de sucursal
SELECT
    'Personas llamadas Brendan en sus sucursales' AS consulta,
    c.customer_name, c.customer_surname, strftime('%Y', 'now') - strftime('%Y', c.dob) AS edad, s.branch_name
FROM cliente c
INNER JOIN sucursal s ON c.branch_id = s.branch_id
WHERE c.customer_name = 'Brendan'
ORDER BY s.branch_name;

-- seleccionar los préstamos con un importe mayor a $80,000 y los préstamos prendarios
SELECT
    'Préstamos con importe > $80,000' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE CAST(loan_total AS REAL) / 100.0 > 80000
UNION ALL
SELECT
    'Préstamos prendarios' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE loan_type = 'Prendario';

-- seleccionar los préstamos con importe > importe medio
SELECT
    'Préstamos con importe > importe medio' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE CAST(loan_total AS REAL) / 100.0 > (
    SELECT AVG(CAST(loan_total AS REAL) / 100.0) FROM prestamo
);

-- contar la cantidad de clientes menores de 50 años
SELECT
    'Cantidad de clientes menores de 50 años' AS consulta,
    COUNT(*)
FROM cliente
WHERE strftime('%Y', 'now') - strftime('%Y', dob) < 50;

-- seleccionar las primeras 5 cuentas con saldo mayor a $8,000
SELECT
    'Primeras 5 cuentas con saldo > $8,000' AS consulta,
    account_id, customer_id, balance, iban
FROM cuenta
WHERE balance > 8000
LIMIT 5;

-- seleccionar los préstamos con fecha en abril, junio y agosto, ordenados por importe
SELECT
    'Préstamos en abril, junio y agosto ordenados por importe' AS consulta,
    loan_id, loan_type, CAST(loan_total AS REAL) / 100.0 AS importe
FROM prestamo
WHERE strftime('%m', loan_date) IN ('04', '06', '08')
ORDER BY importe;

-- importe total de los préstamos agrupados por tipo de préstamo
SELECT
    'Importe total de préstamos por tipo de préstamo' AS consulta,
    loan_type,
    SUM(CAST(loan_total AS REAL) / 100.0) AS loan_total_accu
FROM prestamo
GROUP BY loan_type;