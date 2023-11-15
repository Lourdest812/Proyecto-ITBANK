from django.db import models
from clientes.models import Cliente

class Tarjeta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    numero_tarjeta = models.CharField(max_length=16)
    cvv = models.CharField(max_length=3)
    fecha_amision = models.DateTimeField()
    fecha_vencimiento = models.DateTimeField()
    #tipo
    banco_emisor = models.CharField(max_length=70)

    def __str__(self):
        return f"Tarjeta de {self.cliente}"
    
class TarjetaDebito(Tarjeta):
    tipo_tarjeta = models.CharField(max_length=10, default='DEBITO')
    
    def __str__(self):
        return f'Tarjeta de débito\nCliente: {self.cliente}\nNúmero: {self.numero_tarjeta}\nFecha de emisión: {self.fecha_amision}\nFecha de vencimiento: {self.fecha_vencimiento}\nBanco emisor: {self.banco_emisor}'

class TarjetaCredito(Tarjeta):
    tipo_tarjeta = models.CharField(max_length=10, default='CREDITO')
    
    def __str__(self):
        return f'Tarjeta de crédito\nCliente: {self.cliente}\nNúmero: {self.numero_tarjeta}\nFecha de emisión: {self.fecha_amision}\nFecha de vencimiento: {self.fecha_vencimiento}\nBanco emisor: {self.banco_emisor}'
