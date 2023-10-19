from Cliente import Classic, Black, Gold
from Tarjeta import Tarjeta, TarjetaCredito, TarjetaDebito
from Cuenta import CajaAhorro, CajaAhorroDolares, CuentaCorrienteDolares, Cuenta, CuentaInversion

#Probando los constructores y métodos

#TARJETAS
tarjeta1 = TarjetaDebito(Tarjeta.emisores[1], 11111111, '01-01-2001', '11-11-2011', 'Franco', '111')

tarjeta2 = TarjetaCredito('MASTER', 22222222,'02-02-2002', '12-12-2012', 'Lourdes', '222')

#CLIENTES
cliente1 = Classic()

cliente2 = Gold()

cliente3 = Black()

#CAJAS DE AHORRO Y CUENTAS
caja1 = CajaAhorroDolares()
cuenta1 = CuentaCorrienteDolares()
cuenta_inversion = CuentaInversion()


#MÉTODOS
cliente1.agregar_tarjeta(tarjeta1)

#Los clientes Classic no tienen acceso a tarjetas de crédito, solo una de débito
#No funciona el método porque se quiere agregar una tarjeta de crédito a un cliente Classic
cliente1.agregar_tarjeta(tarjeta2)

#No puede agregar más de una tarjeta
cliente1.agregar_tarjeta(tarjeta1)

cliente1.agregar_cuenta(caja1, 100)

cliente2.agregar_tarjeta(tarjeta1)
cliente2.agregar_cuenta(caja1, 0)
cliente2.agregar_cuenta(caja1, 0)
cliente2.agregar_cuenta(caja1, 2120)
cliente2.agregar_cuenta(cuenta1, 0)
cliente2.agregar_cuenta(cuenta_inversion, 10)
cliente2.agregar_cuenta(cuenta_inversion, 1012)

cliente3.agregar_tarjeta(tarjeta1)
cliente3.agregar_cuenta(caja1, 0)
cliente3.agregar_cuenta(caja1, 0)
cliente3.agregar_cuenta(caja1, 231123)
cliente3.agregar_cuenta(cuenta1, 0)
cliente3.agregar_cuenta(cuenta_inversion, 13132)
cliente3.agregar_cuenta(cuenta_inversion, 1123321)

print(isinstance(caja1, Cuenta))

#Muestra por consola
print(cliente1,'\n', cliente2,'\n', cliente3)
