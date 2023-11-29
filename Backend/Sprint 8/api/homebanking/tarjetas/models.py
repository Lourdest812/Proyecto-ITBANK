from django.db import models
from clientes.models import Cliente
from bancos.models import Banco


class Tarjeta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    numero_tarjeta = models.CharField(max_length=16)
    cvv = models.CharField(max_length=3)
    fecha_emision = models.DateTimeField()
    fecha_vencimiento = models.DateTimeField()
    banco_emisor = models.ForeignKey(Banco, on_delete=models.PROTECT)

    def __str__(self):
        return f"Tarjeta {self.numero_tarjeta} de {self.cliente}"
    
class TarjetaDebito(Tarjeta):
    tipo_tarjeta = models.CharField(max_length=10, default='DEBITO')
    
    def __str__(self):
        return f'Tarjeta de débito\nCliente: {self.cliente}\nNúmero: {self.numero_tarjeta}\nFecha de emisión: {self.fecha_emision}\nFecha de vencimiento: {self.fecha_vencimiento}\nBanco emisor: {self.banco_emisor}'

class TarjetaCredito(Tarjeta):
    tipo_tarjeta = models.CharField(max_length=10, default='CREDITO')
    
    def __str__(self):
        return f'Tarjeta de crédito\nCliente: {self.cliente}\nNúmero: {self.numero_tarjeta}\nFecha de emisión: {self.fecha_emision}\nFecha de vencimiento: {self.fecha_vencimiento}\nBanco emisor: {self.banco_emisor}'
