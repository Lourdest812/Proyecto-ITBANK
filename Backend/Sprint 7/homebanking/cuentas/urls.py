from django.urls import path
from .views import create_account, account_detail, list_client_accounts

urlpatterns = [
    path('create/', create_account, name='create_account'),
    path('<int:pk>/', account_detail, name='account_detail'),
    path('list/<int:cliente_id>/', list_client_accounts, name='list_client_accounts'),
]