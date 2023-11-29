from rest_framework import viewsets
from .models import Prestamo
from .serializers import PrestamoSerializer

class PrestamoViewSet(viewsets.ModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
