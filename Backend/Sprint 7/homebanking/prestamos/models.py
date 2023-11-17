from django.db import models
from clientes.models import Cliente

class Prestamo(models.Model):
    tipo = models.CharField(max_length=200)
    fecha = models.DateTimeField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Datos del préstamo:\nTipo: {self.tipo}\nFecha: {self.fecha}\nTotal: {self.total}\nCliente: {self.cliente}'