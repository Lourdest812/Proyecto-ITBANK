-- Create a view with the columns id, branch number, name, last name, DNI, and age calculated from the date of birth
CREATE VIEW vista AS
SELECT
  customer_id,
  branch_id,
  customer_name,
  customer_surname,
  customer_DNI,
  dob,
  strftime('%Y', 'now') - strftime('%Y', dob) AS age
FROM cliente;

-- Show the columns of clients, ordered by DNI from lowest to highest, and whose age is over 40
SELECT customer_id,
  branch_id,
  customer_name,
  customer_surname,
  customer_DNI,
  dob
FROM vista
WHERE age > 40
ORDER BY customer_DNI ASC;

-- Show all clients named "Anne" or "Tyler" ordered by age from lowest to highest
SELECT *
FROM vista
WHERE LOWER(customer_name) = 'anne' OR LOWER(customer_name) = 'tyler'
ORDER BY age ASC;

------------------------------------- INSERTS -------------------------------------

-- Insertar el primer cliente
INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob)
VALUES ('Lois', 'Stout', 47730534, 80, '1984-07-07');

-- Insertar el segundo cliente
INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob)
VALUES ('Hall', 'Mcconnell', 52055464, 45, '1968-04-30');

-- Insertar el tercer cliente
INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob)
VALUES ('Hilel', 'Mclean', 43625213, 77, '1993-03-28');

-- Insertar el cuarto cliente
INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob)
VALUES ('Jin', 'Cooley', 21207908, 96, '1959-08-24');

-- Insertar el quinto cliente
INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob)
VALUES ('Gabriel', 'Harmon', 57063950, 27, '1976-04-01');

-- Actualizar 5 clientes recientemente agregados en la base de datos dado que hubo un error
-- en el JSON que traía la información, la sucursal de todos es la 10
 
UPDATE cliente
SET branch_id = 10
WHERE customer_id IN (501, 502, 503, 504, 505);
 
UPDATE cliente
SET branch_id = 10
WHERE customer_id = 502;
 
UPDATE cliente
SET branch_id = 10
WHERE customer_id = 503;
 
UPDATE cliente
SET branch_id = 10
WHERE customer_id = 504;
 
UPDATE cliente
SET branch_id = 10
WHERE customer_id = 505;



-- Eliminar el registro correspondiente a “Noel David” 
-- realizando la selección por el nombre y apellido

DELETE
FROM
cliente
WHERE LOWER(customer_name) = 'noel' AND LOWER(customer_surname) = 'david';



-- Consultar sobre cuál es el tipo de préstamo de mayor importe
SELECT MAX(loan_total)
FROM
prestamo;



SELECT *
FROM
cliente;

SELECT *
FROM
vista;
