from Tarjeta import Tarjeta, TarjetaCredito, TarjetaDebito
from Cuenta import Cuenta, CajaAhorroDolares, CajaAhorroPesos, CajaAhorro, CuentaCorrienteDolares, CuentaCorrientePesos, CuentaInversion

#Clase padre Cliente:
class Cliente:

    cargo_mensual = 0

    def __init__(self):
        self.tarjetas = []
        self.cuentas = []

    def cantidad_tarjetas_debito(self):
        return len([tarjeta for tarjeta in self.tarjetas if isinstance(tarjeta, TarjetaDebito)])

    def cantidad_tarjetas_credito(self):
        return len([tarjeta for tarjeta in self.tarjetas if isinstance(tarjeta, TarjetaCredito)])

    def cantidad_cajas_ahorro(self):
        return len([cuenta for cuenta in self.cuentas if isinstance(cuenta, CajaAhorroPesos) or isinstance(cuenta, CajaAhorroDolares)])

    def cantidad_cuentas_inversion(self):
        return len([cuenta for cuenta in self.cuentas if isinstance(cuenta, CuentaInversion)])

    def cantidad_cuentas_corrientes(self):
        return len([cuenta for cuenta in self.cuentas if isinstance(cuenta, CuentaCorrientePesos) or isinstance(cuenta, CuentaCorrienteDolares)])

    def agregar_tarjeta(self, tarjeta):
        if isinstance(tarjeta, Tarjeta):
            self.tarjetas.append(tarjeta)
        
    def agregar_cuenta(self, cuenta):
        if isinstance(cuenta, Cuenta):
            self.cuentas.append(cuenta)
            

#Clase hija Cliente Classic
class Classic(Cliente):

    retiros_max_sin_comision = 5    #Número máximo de retiros en efectivo sin comisiones
    limite_diario = 10000   #Retiro máximo por cajero sin tarifa
    comision_salientes = 0.01   #Porcentaje de comisión por transferencias salientes (1%)
    comision_entrante = 0.005   #Porcentaje de comisión por transferencias entrantes (0.5%)
    
    def __init__(self):
        super().__init__()
        self.cuentas.append(CajaAhorroPesos())
        
    def __str__(self):
        tarjetas_str = ", ".join(str(tarjeta) for tarjeta in self.tarjetas)
        cuentas_str = ", ".join(str(cuenta) for cuenta in self.cuentas)
        return f'Cliente Classic\n{len(self.tarjetas)} {tarjetas_str}\nCuentas: {len(self.cuentas)} {cuentas_str}\nCargo mensual: {self.cargo_mensual}'
    
    def agregar_tarjeta(self, tarjeta):
        if len(self.tarjetas)<1 and isinstance(tarjeta, TarjetaDebito):
            super().agregar_tarjeta(tarjeta)
    
    #Por defecto el Cliente Classic ya tiene una cuenta (una caja de ahorro en pesos)
    #Por eso para agregar otra cuenta (una caja de ahorro en dólares) la condición es que el tamaño de la lista 
    #debe ser < 2
    def agregar_cuenta(self, cuenta, cargo_mensual):
        if len(self.cuentas)<2 and isinstance(cuenta, CajaAhorroDolares):
            self.cargo_mensual = cargo_mensual
            super().agregar_cuenta(cuenta)
 
 
#Clase hija Cliente Gold
class Gold(Cliente):
    
    comision_salientes = 0.005  #Porcentaje de comisión por transferencias salientes (0.5%)
    comision_entrante = 0.001   #Porcentaje de comisión por transferencias entrantes (0.1%)
    

    #Si el cliente Gold tiene más de 2 cajas de ahorro en dólares y más de 1 cuenta corriente se le es requerido un cargo mensual
    #No tiene cargos en caso contrario
    cargo_mensual = 0
        
    def __init__(self):
        super().__init__()
        
    def __str__(self):
        tarjetas_str = ", ".join(str(tarjeta) for tarjeta in self.tarjetas)
        cuentas_str = ", ".join(str(cuenta) for cuenta in self.cuentas)
        return f'Cliente Gold\n{len(self.tarjetas)} {tarjetas_str}\n{len(self.cuentas)} Cuentas: {cuentas_str}\nCargo mensual:{self.cargo_mensual}'
        
    def agregar_tarjeta(self, tarjeta):
        if self.cantidad_tarjetas_debito() <1 and isinstance(tarjeta, TarjetaDebito):
            super().agregar_tarjeta(tarjeta)
        elif self.cantidad_tarjetas_credito()<5 and isinstance(tarjeta, TarjetaCredito):
            super().agregar_tarjeta(tarjeta)
    
    def agregar_cuenta(self, cuenta, cargo_mensual):
        if isinstance(cuenta, (CajaAhorro, CuentaCorrientePesos, CuentaCorrienteDolares, CuentaInversion)):
            super().agregar_cuenta(cuenta)

        if self.cantidad_cajas_ahorro()>2 or self.cantidad_cuentas_corrientes()>1:
            self.cargo_mensual = cargo_mensual
        


#Clase hija cliente Black
class Black(Cliente):

    comision_salientes = 0
    comision_entrante = 0
    
    def __init__(self):
        super().__init__()
    
    def __str__(self):
        tarjetas_str = ", ".join(str(tarjeta) for tarjeta in self.tarjetas)
        cuentas_str = ", ".join(str(cuenta) for cuenta in self.cuentas)
        return f'Cliente Black\n{len(self.tarjetas)} {tarjetas_str}\n{len(self.cuentas)} Cuentas: {cuentas_str}\nCargo mensual:{self.cargo_mensual}'
    
    def agregar_tarjeta(self, tarjeta):
        if isinstance(tarjeta, Tarjeta):
            if (self.cantidad_tarjetas_debito()<5 and isinstance(tarjeta, TarjetaDebito) or (self.cantidad_tarjetas_credito()<10 and isinstance(tarjeta, TarjetaCredito))):
                super().agregar_tarjeta(tarjeta)

    def agregar_cuenta(self, cuenta, cargo_mensual):
        super().agregar_cuenta(cuenta)
        if self.cantidad_cajas_ahorro()>5 or self.cantidad_cuentas_corrientes()>3:
            self.cargo_mensual = cargo_mensual
