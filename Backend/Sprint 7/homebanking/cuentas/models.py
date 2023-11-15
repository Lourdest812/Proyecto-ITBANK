from django.db import models
from clientes.models import Cliente
from tipo_cuenta.models import Tipo

class Cuenta(models.Model):
    cliente = models.ForeignKey(Cliente)
    balance = models.DecimalField()
    iban = models.CharField(max_length=100)
    tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Tipo de cuenta: {self.tipo}\n Cliente:{self.cliente}'
