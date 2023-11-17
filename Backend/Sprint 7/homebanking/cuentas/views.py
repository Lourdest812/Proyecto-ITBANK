from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from .forms import CuentaForm
from .models import Cuenta, Cliente
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


@login_required
def create_account(request):
    if request.method == 'POST':
        form = CuentaForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Cuenta creada con éxito")
    else:
        form = CuentaForm()

    return render(request, 'create_account.html', {'form': form})


@login_required
def account_detail(request, pk):
    account = get_object_or_404(Cuenta, pk=pk)
    context = {
        'tipo': account.tipo,
        'cliente': account.cliente,
    }
    return render(request, "account_detail.html", context)


@login_required
def list_client_accounts(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    cuentas = Cuenta.objects.filter(cliente=cliente)
    return render(request, 'list_client_accounts.html', {'cliente': cliente, 'cuentas': cuentas})