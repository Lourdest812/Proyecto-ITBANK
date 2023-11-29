from rest_framework import viewsets
from .models import Tarjeta
from .serializers import TarjetaSerializer

class TarjetaViewSet(viewsets.ModelViewSet):
    queryset = Tarjeta.objects.all()
    serializer_class = TarjetaSerializer
