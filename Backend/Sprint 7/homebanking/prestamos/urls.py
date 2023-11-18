from django.urls import path
from .views import solicitar_prestamo

urlpatterns = [
    path('solicitar_prestamo/', solicitar_prestamo, name='solicitar_prestamo'),
]