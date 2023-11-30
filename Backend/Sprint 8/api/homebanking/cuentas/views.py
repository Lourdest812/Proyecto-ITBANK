from rest_framework import viewsets
from .models import Cuenta
from .serializers import CuentaSerializer

class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

    def get_queryset(self):
        queryset = Cuenta.objects.all()

        # Filtrar según los parámetros de consulta
        cliente = self.request.query_params.get('cliente', None)
        if cliente:
            queryset = queryset.filter(cliente=cliente)

        # Agrega más filtrados según sea necesario

        return queryset