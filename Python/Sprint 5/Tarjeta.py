class Tarjeta:
    
    emisores = ['MASTER', 'VISA', 'Amex']
    
    def set_emisor(self, emisor):
        if emisor not in self.emisores:
            raise Exception(ValueError)
        else:
            self.emisor = emisor
        
    def __init__(self, emisor, numero, fecha_emision, fecha_vencimiento, nombre_titular, codigo_seguridad):
        self.set_emisor(emisor)
        self.numero = numero
        self.fecha_emision = fecha_emision
        self.fecha_vencimiento = fecha_vencimiento 
        self.nombre_titular = nombre_titular
        self.codigo_seguridad = codigo_seguridad

    def __str__(self):
        return f'Tarjeta: Banco Emisor = {self.emisor} Número = {self.numero} Fecha de emisión = {self.fecha_emision} Fecha de vencimiento = {self.fecha_vencimiento} Nombre del titular = {self.nombre_titular} Código de seguridad = {self.codigo_seguridad}'
    
class TarjetaDebito(Tarjeta):
    def __init__(self, emisor,numero,fecha_emision, fecha_vencimiento, nombre_titular, codigo_seguridad):
        super().__init__(emisor, numero,fecha_emision, fecha_vencimiento, nombre_titular, codigo_seguridad)
        
class TarjetaCredito(Tarjeta):
    def __init__(self, emisor,numero,fecha_emision, fecha_vencimiento, nombre_titular, codigo_seguridad):
        super().__init__(emisor,numero,fecha_emision, fecha_vencimiento, nombre_titular, codigo_seguridad)
        
