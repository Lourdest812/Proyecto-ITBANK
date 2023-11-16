from django.shortcuts import render
from .models import Tarjeta


def list_client_cards(request, cliente_id):
    tarjetas = Tarjeta.objects.filter(cliente_id=cliente_id)
    return render(request, 'list_client_cards.html', {'tarjetas': tarjetas})