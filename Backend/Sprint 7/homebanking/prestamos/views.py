# Create your views here.
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import SolicitudPrestamoForm
from .models import Prestamo

@login_required
def solicitar_prestamo(request):
    if request.method == 'POST':
        form = SolicitudPrestamoForm(request.POST)
        if form.is_valid():
            solicitud = form.save(commit=False)
            solicitud.aprobado = determinar_aprobacion(solicitud.prestamo)
            solicitud.save()
            messages.success(request, 'La solicitud fue procesada exitosamente.')
            return redirect('solicitar_prestamo')
    else:
        form = SolicitudPrestamoForm()

    return render(request, 'solicitar_prestamo.html', {'form': form})

def determinar_aprobacion(prestamo):
    # Lógica para determinar si la solicitud es aprobada o rechazada
    monto_aprobado = 0
    if prestamo.cliente.tipo_cliente == 'BLACK':
        monto_aprobado = 500000
    elif prestamo.cliente.tipo_cliente == 'GOLD':
        monto_aprobado = 300000
    elif prestamo.cliente.tipo_cliente == 'CLASSIC':
        monto_aprobado = 100000

    return prestamo.monto_aprobado <= monto_aprobado