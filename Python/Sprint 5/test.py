import unittest
from Tarjeta import Tarjeta, TarjetaCredito, TarjetaDebito
from Cuenta import Cuenta, CajaAhorroDolares, CajaAhorroPesos, CajaAhorro, CuentaCorrienteDolares, CuentaCorrientePesos, CuentaInversion
from Cliente import Classic, Gold, Black


class TestCliente(unittest.TestCase):

    def setUp(self):
        self.classic_customer = Classic()
        self.black_customer = Black()
        self.gold_customer = Gold()

    #? Agregar tarjetas ----------------------------------
    def test_agregar_tarjeta_debito_cliente_classic(self):
        tarjeta_debito = TarjetaDebito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')
        self.classic_customer.agregar_tarjeta(tarjeta_debito)
        self.assertIn(tarjeta_debito, self.classic_customer.tarjetas)

        # Agrego una de mas
        tarjeta_debito2 = TarjetaDebito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '222')
        self.classic_customer.agregar_tarjeta(tarjeta_debito2)
        self.assertNotIn(tarjeta_debito2, self.classic_customer.tarjetas)

    def test_agregar_tarjeta_credito_cliente_classic(self):
        tarjeta_credito = TarjetaCredito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')
        self.classic_customer.agregar_tarjeta(tarjeta_credito)
        self.assertNotIn(tarjeta_credito, self.classic_customer.tarjetas)


    def test_agregar_tarjeta_debito_cliente_black(self):
        # Prueba agregar tarjeta de débito a un cliente Black
        tarjeta_debito = TarjetaDebito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')
        self.black_customer.agregar_tarjeta(tarjeta_debito)
        self.assertIn(tarjeta_debito, self.black_customer.tarjetas)

        # Agregar más tarjetas de débito de las permitidas
        for _ in range(6):
            nueva_tarjeta_debito = TarjetaDebito(Tarjeta.emisores[2], 33333333, '03-03-2003', '03-03-2013', 'Otro', '333')
            self.black_customer.agregar_tarjeta(nueva_tarjeta_debito)
        self.assertEqual(len(self.black_customer.tarjetas), 5)  # Solo se permiten 5


    def test_agregar_tarjeta_credito_cliente_black(self):
        # Prueba agregar tarjeta de crédito a un cliente Black
        tarjeta_credito = TarjetaCredito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')
        tarjeta_credito = TarjetaCredito(Tarjeta.emisores[2], 22222222, '02-02-2002', '22-12-2012', 'Otro', '222')
        self.black_customer.agregar_tarjeta(tarjeta_credito)
        self.assertIn(tarjeta_credito, self.black_customer.tarjetas)

        # Agregar más tarjetas de crédito de las permitidas
        for _ in range(11):
            nueva_tarjeta_credito = TarjetaCredito(Tarjeta.emisores[2], 33333333, '03-03-2003', '03-03-2013', 'Otro', '333')
            self.black_customer.agregar_tarjeta(nueva_tarjeta_credito)
        self.assertEqual(len(self.black_customer.tarjetas), 10)  # Solo se permiten 10


    def test_agregar_tarjeta_debito_cliente_gold(self):
        tarjeta_debito = TarjetaDebito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')

        # Prueba agregar tarjeta de débito a un cliente Gold
        self.gold_customer.agregar_tarjeta(tarjeta_debito)
        self.assertIn(tarjeta_debito, self.gold_customer.tarjetas)


    def test_agregar_tarjeta_credito_cliente_gold(self):
        tarjeta_credito = TarjetaCredito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')

        # Prueba agregar tarjeta de crédito a un cliente Gold
        self.gold_customer.agregar_tarjeta(tarjeta_credito)
        self.assertIn(tarjeta_credito, self.gold_customer.tarjetas)

        # Agregar más tarjetas de débito de las permitidas
        for _ in range(2):
            nueva_tarjeta_debito = TarjetaDebito(Tarjeta.emisores[2], 22222222, '02-02-2002', '22-12-2012', 'Otro', '222')
            self.gold_customer.agregar_tarjeta(nueva_tarjeta_debito)
        self.assertEqual(self.gold_customer.cantidad_tarjetas_debito(), 1)  # Solo se permite 1

        # Agregar más tarjetas de crédito de las permitidas
        for _ in range(6):
            nueva_tarjeta_credito = TarjetaCredito(Tarjeta.emisores[2], 22222222, '02-02-2002', '22-12-2012', 'Otro', '222')
            self.gold_customer.agregar_tarjeta(nueva_tarjeta_credito)
        self.assertEqual(self.gold_customer.cantidad_tarjetas_credito(), 5)  # Solo se permiten 5


    #? Agregar cuentas ----------------------------------
    def test_agregar_cuenta_classic(self):
        # Agregar una cuenta de caja de ahorro en dólares
        cuenta = CajaAhorroDolares()
        self.classic_customer.agregar_cuenta(cuenta, 10)
        self.assertIn(cuenta, self.classic_customer.cuentas)

        # Agregar una cuenta que no sea caja de ahorro en dólares
        cuenta2 = CuentaInversion()
        self.classic_customer.agregar_cuenta(cuenta2, 10)
        self.assertNotIn(cuenta2, self.classic_customer.cuentas)


    def test_agregar_cuenta_gold(self):

        # Caso 1: Agregar una caja de ahorro
        cuenta_ca = CajaAhorro()
        self.gold_customer.agregar_cuenta(cuenta_ca, 10)
        self.assertIn(cuenta_ca, self.gold_customer.cuentas)
        self.assertEqual(self.gold_customer.cargo_mensual, 0)

        # Caso 2: Agregar una cuenta de cuenta corriente en dólares
        cuenta_ci_pesos = CuentaCorrientePesos()
        self.gold_customer.agregar_cuenta(cuenta_ci_pesos, 10)
        self.assertIn(cuenta_ci_pesos, self.gold_customer.cuentas)
        self.assertEqual(self.gold_customer.cargo_mensual, 0)

        # Caso 3: Agregar una cuenta de cuenta corriente en dólares
        cuenta_ci_dolares = CuentaCorrienteDolares()
        self.gold_customer.agregar_cuenta(cuenta_ci_dolares, 10)
        self.assertIn(cuenta_ci_dolares, self.gold_customer.cuentas)
        self.assertEqual(self.gold_customer.cargo_mensual, 10)  # Se valida que se aplique el cargo mensual

        # Caso 4: Agregar una cuenta de inversión
        cuenta_inversion = CuentaInversion()
        self.gold_customer.agregar_cuenta(cuenta_inversion, 10)
        self.assertIn(cuenta_inversion, self.gold_customer.cuentas)
        self.assertEqual(self.gold_customer.cargo_mensual, 10)


    def test_agregar_cuenta_black(self):

        # Caso 1: Agregar una caja de ahorro en dolares
        cuenta_ca_dolares = CajaAhorroDolares()
        self.black_customer.agregar_cuenta(cuenta_ca_dolares, 10)
        self.assertIn(cuenta_ca_dolares, self.black_customer.cuentas)
        self.assertEqual(self.black_customer.cargo_mensual, 0)

        # Caso 2: Agregar una cuenta de cuenta corriente en dólares
        cuenta_ci_pesos = CuentaCorrientePesos()
        self.black_customer.agregar_cuenta(cuenta_ci_pesos, 10)
        self.assertIn(cuenta_ci_pesos, self.black_customer.cuentas)
        self.assertEqual(self.black_customer.cargo_mensual, 0)

        # Caso 3: Agregar una cuenta de cuenta corriente en dólares
        cuenta_ci_dolares = CuentaCorrienteDolares()
        self.black_customer.agregar_cuenta(cuenta_ci_dolares, 10)
        self.assertIn(cuenta_ci_dolares, self.black_customer.cuentas)
        self.assertEqual(self.black_customer.cargo_mensual, 0)  # Se valida que se aplique el cargo mensual

        # Caso 4: Agregar una caja de ahorro en pesos
        cuenta_ca_pesos = CajaAhorroPesos()
        self.black_customer.agregar_cuenta(cuenta_ca_pesos, 10)
        self.assertIn(cuenta_ca_pesos, self.black_customer.cuentas)
        self.assertEqual(self.black_customer.cargo_mensual, 0)

        # Caso 5: Agregar una cuenta de inversión
        cuenta_inversion = CuentaInversion()
        self.black_customer.agregar_cuenta(cuenta_inversion, 10)
        self.assertIn(cuenta_inversion, self.black_customer.cuentas)
        self.assertEqual(self.black_customer.cargo_mensual, 0)

        # Agregar más cuentas de las permitidas sin cargo mensual
        for _ in range(4):
            nueva_cuenta_corriente = CuentaCorrientePesos()
            self.black_customer.agregar_cuenta(nueva_cuenta_corriente, 10)
        self.assertEqual(self.black_customer.cargo_mensual, 10)  # Se valida que se aplique el cargo mensual


class TestTarjeta(unittest.TestCase):

    def test_setear_emisor_no_valido(self):

        tarjeta = TarjetaDebito("MASTER", 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')
        with self.assertRaises(ValueError):
            tarjeta.set_emisor("emisor no valido")
    


if __name__ == "__main__":
    unittest.main()
