from rest_framework import viewsets
from .models import PerfilUsuario
from .serializers import PerfilUsuarioSerializer

class PerfilUsuarioViewSet(viewsets.ModelViewSet):
    queryset = PerfilUsuario.objects.all()
    serializer_class = PerfilUsuarioSerializer
