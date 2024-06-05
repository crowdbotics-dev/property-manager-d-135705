from rest_framework import authentication
from property_management.models import (
    Inspection,
    Vendor,
    Document,
    Revenue,
    Expense,
    Property,
)
from .serializers import (
    DocumentSerializer,
    ExpenseSerializer,
    InspectionSerializer,
    PropertySerializer,
    RevenueSerializer,
    VendorSerializer,
)
from rest_framework import viewsets


class InspectionViewSet(viewsets.ModelViewSet):
    serializer_class = InspectionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Inspection.objects.all()


class RevenueViewSet(viewsets.ModelViewSet):
    serializer_class = RevenueSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Revenue.objects.all()


class VendorViewSet(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Vendor.objects.all()


class DocumentViewSet(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Document.objects.all()


class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Expense.objects.all()


class PropertyViewSet(viewsets.ModelViewSet):
    serializer_class = PropertySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Property.objects.all()
