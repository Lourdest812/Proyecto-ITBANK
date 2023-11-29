from rest_framework.routers import SimpleRouter
from .views import MovimientoViewSet

router = SimpleRouter()
router.register(r'movements', MovimientoViewSet, basename='movements')

urlpatterns = router.urls