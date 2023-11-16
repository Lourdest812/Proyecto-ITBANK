from django.db import models
from bancos.models import Banco


class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.DecimalField(max_digits=8, decimal_places=0)
    fecha_nacimiento = models.DateTimeField()
    banco = models.ForeignKey(Banco, on_delete=models.CASCADE)
    tipo_cliente = models.CharField(max_length=10, default="CLASSIC", choices=(('BLACK', 'BLACK'), ('GOLD','GOLD'), ('CLASSIC', 'CLASSIC')))

    def __str__(self):
        return f'{self.nombre} {self.apellido}'
