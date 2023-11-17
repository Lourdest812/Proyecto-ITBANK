from django.urls import path
from .views import list_client_cards

urlpatterns = [
    path('list/<int:cliente_id>/', list_client_cards, name='list_client_cards'),
]