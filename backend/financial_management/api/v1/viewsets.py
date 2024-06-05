from rest_framework import authentication
from financial_management.models import Budget, Accounting
from .serializers import AccountingSerializer, BudgetSerializer
from rest_framework import viewsets


class BudgetViewSet(viewsets.ModelViewSet):
    serializer_class = BudgetSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Budget.objects.all()


class AccountingViewSet(viewsets.ModelViewSet):
    serializer_class = AccountingSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Accounting.objects.all()
