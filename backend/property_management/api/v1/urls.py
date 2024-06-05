from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DocumentViewSet,
    ExpenseViewSet,
    InspectionViewSet,
    PropertyViewSet,
    RevenueViewSet,
    VendorViewSet,
)

router = DefaultRouter()
router.register("inspection", InspectionViewSet)
router.register("revenue", RevenueViewSet)
router.register("vendor", VendorViewSet)
router.register("document", DocumentViewSet)
router.register("expense", ExpenseViewSet)
router.register("property", PropertyViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
