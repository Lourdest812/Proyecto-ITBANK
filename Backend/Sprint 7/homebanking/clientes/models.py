from django.db import models
from bancos.models import Banco

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.DecimalField(max_digits=8, decimal_places=0)
    fecha_nacimiento = models.DateTimeField()
    banco = models.ForeignKey(Banco, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.nombre} {self.apellido}'
    
    
class ClienteBlack(Cliente):
    tipo_cliente = models.CharField(max_length=10, default='BLACK')
    
    def __str__(self):
        return f'Cliente:{self.nombre} {self.apellido} \nTipo: {self.tipo_cliente}'

class ClienteGold(Cliente):
    tipo_cliente = models.CharField(max_length=10, default='GOLD')
    
    def __str__(self):
        return f'Cliente:{self.nombre} {self.apellido} \nTipo: {self.tipo_cliente}'

class ClienteClassic(Cliente):
    tipo_cliente = models.CharField(max_length=10, default='CLASSIC')
    
    def __str__(self):
        return f'Cliente:{self.nombre} {self.apellido} \nTipo: {self.tipo_cliente}'