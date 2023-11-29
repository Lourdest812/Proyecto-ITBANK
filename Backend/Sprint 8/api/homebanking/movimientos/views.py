from rest_framework import viewsets
from .models import Movimiento
from .serializers import MovimientoSerializer

class MovimientoViewSet(viewsets.ModelViewSet):
    queryset = Movimiento.objects.all()
    serializer_class = MovimientoSerializer
