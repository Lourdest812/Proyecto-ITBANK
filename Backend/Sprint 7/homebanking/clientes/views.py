from django.shortcuts import get_object_or_404, redirect, render
from .models import Cliente
from cuentas.models import Cuenta
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
        'cliente_id': cliente.id,
    }
    return render(request, "client_view.html", context)

@login_required
def client_list(request):
    clientes = Cliente.objects.all()
    return render(request, 'client_list.html', {'clientes': clientes})

def list_client_accounts(request, cliente_id):
    cliente_accounts = Cuenta.objects.filter(cliente_id=cliente_id)
    context = {
        'cliente_accounts': cliente_accounts,
    }
    return render(request, 'account_list.html', context)