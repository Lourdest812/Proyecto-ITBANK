from rest_framework.routers import SimpleRouter
from .views import CuentaViewSet

router = SimpleRouter()
router.register(r'accounts', CuentaViewSet, basename='accounts')

urlpatterns = router.urls