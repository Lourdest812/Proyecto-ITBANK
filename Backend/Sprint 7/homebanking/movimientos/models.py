from django.db import models
from cuentas.models import Cuenta

class Movimiento(models.Model):
    cuenta = models.ForeignKey(Cuenta, on_delete=models.CASCADE)
    monto = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Movimiento de {self.cuenta}"
