from rest_framework.routers import SimpleRouter
from .views import BancoViewSet

router = SimpleRouter()
router.register(r'banks', BancoViewSet, basename='banks')

urlpatterns = router.urls