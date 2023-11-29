from django.db import models
from clientes.models import Cliente

class Prestamo(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    tipo_prestamo = models.CharField(max_length=100)
    fecha_inicio = models.DateField()
    monto_aprobado = models.DecimalField(max_digits=10, decimal_places=2)

class Solicitud(models.Model):
    prestamo = models.OneToOneField(Prestamo, on_delete=models.CASCADE)
    fecha_solicitud = models.DateTimeField(auto_now_add=True)
    aprobado = models.BooleanField(default=False)