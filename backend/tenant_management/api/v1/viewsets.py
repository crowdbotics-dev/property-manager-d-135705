from rest_framework import authentication
from tenant_management.models import Lease, MaintenanceRequest, Tenant
from .serializers import LeaseSerializer, MaintenanceRequestSerializer, TenantSerializer
from rest_framework import viewsets


class LeaseViewSet(viewsets.ModelViewSet):
    serializer_class = LeaseSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Lease.objects.all()


class MaintenanceRequestViewSet(viewsets.ModelViewSet):
    serializer_class = MaintenanceRequestSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = MaintenanceRequest.objects.all()


class TenantViewSet(viewsets.ModelViewSet):
    serializer_class = TenantSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Tenant.objects.all()
