from rest_framework.routers import SimpleRouter
from .views import PerfilUsuarioViewSet

router = SimpleRouter()
router.register(r'profiles', PerfilUsuarioViewSet, basename='profiles')

urlpatterns = router.urls