from django.db import models
from clientes.models import Cliente


class Cuenta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    balance = models.DecimalField(max_digits=10, decimal_places=2)
    iban = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50, default='CUENTA CORRIENTE EN PESOS', choices=(('CUENTA CORRIENTE EN PESOS', 'CUENTA CORRIENTE EN PESOS'), ('CUENTA CORRIENTE EN DÓLARES','CUENTA CORRIENTE EN DÓLARES'), ('CAJA DE AHORRO EN PESOS', 'CAJA DE AHORRO EN PESOS'), ('CAJA DE AHORRO EN DÓLARES', 'CAJA DE AHORRO EN DÓLARES'), ('CUENTA INVERSIÓN', 'CUENTA INVERSIÓN')))
    
    def __str__(self):
        return f'Tipo de cuenta: {self.tipo}\n Cliente:{self.cliente}'
