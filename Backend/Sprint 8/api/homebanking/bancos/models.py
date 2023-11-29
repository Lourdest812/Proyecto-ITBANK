from django.db import models

class Banco(models.Model):
    numero = models.DecimalField(max_digits=10, decimal_places=0)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    
    def __str__(self):
        return f'{self.nombre}'
