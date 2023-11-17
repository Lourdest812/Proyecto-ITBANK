from django.shortcuts import render
from .models import Tarjeta
from django.contrib.auth.decorators import login_required


@login_required
def list_client_cards(request, cliente_id):
    tarjetas = Tarjeta.objects.filter(cliente_id=cliente_id)
    return render(request, 'list_client_cards.html', {'tarjetas': tarjetas})