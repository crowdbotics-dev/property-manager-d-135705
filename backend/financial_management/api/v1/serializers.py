from rest_framework import serializers
from financial_management.models import Accounting, Budget


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = "__all__"


class AccountingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounting
        fields = "__all__"
