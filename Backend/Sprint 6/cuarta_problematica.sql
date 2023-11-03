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
