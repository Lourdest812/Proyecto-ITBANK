from rest_framework import serializers
from .models import Prestamo

class PrestamoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Prestamo
        fields = "__all__"