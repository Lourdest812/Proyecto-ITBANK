from django.shortcuts import get_object_or_404, render
from .models import Cliente
from django.contrib.auth.decorators import login_required


@login_required
def client_detail(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    context = {
        'nombre': cliente.nombre,
        'apellido': cliente.apellido,
        'dni': str(cliente.dni),
        'fecha_nacimiento': cliente.fecha_nacimiento.strftime('%Y-%m-%d'),
        'banco': cliente.banco.nombre if cliente.banco else None,
        'tipo_cliente': cliente.tipo_cliente,
    }
    return render(request, "client_view.html", context)