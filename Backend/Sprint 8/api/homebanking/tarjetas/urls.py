from rest_framework.routers import SimpleRouter
from .views import TarjetaViewSet

router = SimpleRouter()
router.register(r'cards', TarjetaViewSet, basename='cards')

urlpatterns = router.urls