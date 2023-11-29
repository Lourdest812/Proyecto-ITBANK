from rest_framework import viewsets
from .models import Cuenta
from .serializers import CuentaSerializer

class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer
