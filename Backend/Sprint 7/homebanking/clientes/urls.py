from django.urls import path
from .views import client_detail

urlpatterns = [
    path('<int:pk>/', client_detail, name='client_detail'),
]