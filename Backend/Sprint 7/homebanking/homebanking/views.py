from django.shortcuts import get_object_or_404, render
from django.contrib.auth.decorators import login_required
from clientes.models import Cliente


@login_required
def home(request):
    return render(request, 'index.html')