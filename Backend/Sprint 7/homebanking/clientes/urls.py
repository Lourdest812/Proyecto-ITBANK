from . import views
from django.urls import path
from .views import client_detail, client_list
from cuentas.views import list_client_accounts
from tarjetas.views import list_client_cards

urlpatterns = [
    path('', client_list, name='client_list'),
    path('<int:pk>/', client_detail, name='client_detail'),
    path('accounts/<int:cliente_id>/', list_client_accounts, name='list_client_accounts'),
    path('cards/<int:cliente_id>/', list_client_cards, name='list_client_cards')
]