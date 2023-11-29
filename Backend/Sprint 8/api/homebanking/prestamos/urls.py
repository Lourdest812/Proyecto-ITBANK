from rest_framework.routers import SimpleRouter
from .views import PrestamoViewSet

router = SimpleRouter()
router.register(r'loans', PrestamoViewSet, basename='loans')

urlpatterns = router.urls