from rest_framework import serializers
from .models import PerfilUsuario

class PerfilUsuarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PerfilUsuario
        fields = "__all__"