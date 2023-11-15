from django.db import models

class Tipo:
    nombre = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.nombre}'
