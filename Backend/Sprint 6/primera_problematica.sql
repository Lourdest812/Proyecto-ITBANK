------- Primera problematica:

-- Agregado de tipos de cliente, tipos de cuenta y marcas de tarjeta:
CREATE TABLE "tipo_cliente" (
    "type_id" INTEGER NOT NULL,
    "type_name" TEXT NOT NULL,
    PRIMARY KEY("type_id" AUTOINCREMENT)
);
CREATE TABLE "tipo_cuenta" (
    "type_id" INTEGER NOT NULL,
    "type_name" TEXT NOT NULL,
    PRIMARY KEY("type_id" AUTOINCREMENT)
);
CREATE TABLE "marca_tarjeta" (
    "brand_id" INTEGER NOT NULL,
    "brand_name" TEXT NOT NULL,
    PRIMARY KEY("brand_id" AUTOINCREMENT)
);

INSERT INTO tipo_cliente (type_name) VALUES
    ('Classic'),
    ('Gold'),
    ('Black');
	
INSERT INTO tipo_cuenta (type_name) VALUES
    ('CuentaCorrientePesos'),
    ('CuentaCorrienteDolares'),
    ('CuentaInversion'),
    ('CajaAhorroPesos'),
    ('CajaAhorroDolares');
	
INSERT INTO marca_tarjeta (brand_name) VALUES
    ('MASTER'),
    ('VISA'),
    ('Amex');
	
-- Creación de la entidad tarjeta:
CREATE TABLE "tarjeta" (
    "card_id" INTEGER NOT NULL,
    "card_number" TEXT NOT NULL CHECK(length(card_number) <= 20),
    "cvv" TEXT NOT NULL,
    "issue_date" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "card_type" TEXT NOT NULL CHECK(card_type IN ('Crédito', 'Débito')),
    "brand_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    PRIMARY KEY("card_id" AUTOINCREMENT),
    FOREIGN KEY("brand_id") REFERENCES marca_tarjeta(brand_id),
    FOREIGN KEY("customer_id") REFERENCES cliente(customer_id)
);

-- Creación de tarjetas:
INSERT INTO tarjeta (card_number, cvv, issue_date, expiration_date, card_type, brand_id, customer_id) VALUES
    ('4556123412341234', '123', '2023-01-01', '2025-12-31', 'Crédito', 1, 1),
    ('4539786312345678', '234', '2023-02-01', '2025-11-30', 'Crédito', 2, 2),
    ('4716123412341234', '345', '2023-03-01', '2025-10-31', 'Crédito', 3, 3),
    ('4916123412341234', '456', '2023-04-01', '2025-09-30', 'Crédito', 1, 4),
    ('4556123478912345', '567', '2023-05-01', '2025-08-31', 'Crédito', 2, 5),
    ('4026123412341234', '678', '2023-06-01', '2025-07-31', 'Crédito', 3, 6),
    ('4539786309876543', '789', '2023-07-01', '2025-06-30', 'Crédito', 1, 7),
    ('4716123409876543', '890', '2023-08-01', '2025-05-31', 'Crédito', 2, 8),
    ('4916123412345678', '901', '2023-09-01', '2025-04-30', 'Crédito', 3, 9),
    ('4556123401234567', '012', '2023-10-01', '2025-03-31', 'Crédito', 1, 10),
    ('4026123498765432', '123', '2023-11-01', '2025-02-28', 'Crédito', 2, 11),
    ('4539786312345678', '234', '2023-12-01', '2025-01-31', 'Crédito', 3, 12),
    ('4716123409876543', '345', '2024-01-01', '2025-12-31', 'Crédito', 1, 13),
    ('4916123412345678', '456', '2024-02-01', '2025-11-30', 'Crédito', 2, 14),
    ('4556123412341234', '567', '2024-03-01', '2025-10-31', 'Crédito', 3, 15),
    ('4026123401234567', '678', '2024-04-01', '2025-09-30', 'Crédito', 1, 16),
    ('4539786312345678', '789', '2024-05-01', '2025-08-31', 'Crédito', 2, 17),
    ('4716123412341234', '890', '2024-06-01', '2025-07-31', 'Crédito', 3, 18),
    ('4916123401234567', '901', '2024-07-01', '2025-06-30', 'Crédito', 1, 19),
    ('4556123478912345', '012', '2024-08-01', '2025-05-31', 'Crédito', 2, 20);

	
-- Agregado de la entidad direcciones
CREATE TABLE "direcciones" (
    "address_id" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    PRIMARY KEY("address_id" AUTOINCREMENT)
);

-- Agregado de campos en las tablas existentes para relacionarlas con direcciones
ALTER TABLE cliente ADD COLUMN "address_id" INTEGER REFERENCES direcciones("address_id");
ALTER TABLE empleado ADD COLUMN "address_id" INTEGER REFERENCES direcciones("address_id");
ALTER TABLE sucursal ADD COLUMN "address_id" INTEGER REFERENCES direcciones("address_id");


-- Ampliado del alcance de la entidad cuenta para que identifique el tipo de la misma
ALTER TABLE cuenta ADD COLUMN "account_type" TEXT;

-- Asignar un tipo de cuenta a cada registro de cuenta de forma aleatoria
UPDATE cuenta
SET "account_type" = CASE
    WHEN random() < 0.2 THEN 'CuentaCorrientePesos'
    WHEN random() < 0.4 THEN 'CuentaCorrienteDolares'
    WHEN random() < 0.6 THEN 'CuentaInversion'
    WHEN random() < 0.8 THEN 'CajaAhorroPesos'
    ELSE 'CajaAhorroDolares'
END;
