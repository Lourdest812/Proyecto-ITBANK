from django.shortcuts import get_object_or_404, render
from .models import Tarjeta, Cliente
from django.contrib.auth.decorators import login_required


@login_required
def list_client_cards(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)
    tarjetas = Tarjeta.objects.filter(cliente_id=cliente_id)
    return render(request, 'list_client_cards.html', {'tarjetas': tarjetas,'cliente': cliente})