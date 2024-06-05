from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AccountingViewSet, BudgetViewSet

router = DefaultRouter()
router.register("budget", BudgetViewSet)
router.register("accounting", AccountingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
