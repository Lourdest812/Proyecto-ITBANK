from rest_framework import viewsets
from .models import Banco
from .serializers import BancoSerializer

class BancoViewSet(viewsets.ModelViewSet):
    queryset = Banco.objects.all()
    serializer_class = BancoSerializer
