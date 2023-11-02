class Cuenta:
    
    def __init__(self):
        pass
    
    def __str__(self):
        return 'Cuenta corriente'
    
class CuentaCorrientePesos(Cuenta):
    
    def __init__(self):
        super().__init__()
        
    def __str__(self):
        return 'Cuenta corriente en pesos'
    

class CuentaCorrienteDolares(Cuenta):
    
    def __init__(self):
        super().__init__()
    
    def __str__(self):
        return 'Cuenta corriente en dólares'
    

class CuentaInversion(Cuenta):
    
    def __init__(self):
        super().__init__()
        
    def __str__(self):
        return 'Cuenta inversión'
    

class CajaAhorro(Cuenta):
    def __init__(self):
        pass
    
    def __str__(self):
        return 'Caja de ahorro'
        
class CajaAhorroPesos(CajaAhorro):
    
    def __init__(self):
        super().__init__()
        
    def __str__(self):
        return 'Caja ahorro en pesos'
    

class CajaAhorroDolares(CajaAhorro):
    
    def __init__(self):
        super().__init__()
    
    def __str__(self):
        return 'Caja ahorro en dólares'
