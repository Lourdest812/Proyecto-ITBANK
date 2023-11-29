from rest_framework.routers import SimpleRouter
from .views import ClienteViewSet

router = SimpleRouter()
router.register(r'clients', ClienteViewSet, basename='clients')

urlpatterns = router.urls