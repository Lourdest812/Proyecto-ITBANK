# prestamos_app/forms.py
from django import forms
from .models import Solicitud

class SolicitudPrestamoForm(forms.ModelForm):
    class Meta:
        model = Solicitud
        fields = ['prestamo',]

# Puedes agregar más campos según sea necesario
