from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import LeaseViewSet, MaintenanceRequestViewSet, TenantViewSet

router = DefaultRouter()
router.register("lease", LeaseViewSet)
router.register("maintenancerequest", MaintenanceRequestViewSet)
router.register("tenant", TenantViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
