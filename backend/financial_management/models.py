from django.conf import settings
from django.db import models


class Budget(models.Model):
    "Generated Model"
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="budget_property",
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    category = models.CharField(
        max_length=100,
    )
    description = models.TextField(
        null=True,
        blank=True,
    )


class Accounting(models.Model):
    "Generated Model"
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="accounting_property",
    )
    income = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    expense = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    date = models.DateField(
        null=False,
        blank=False,
    )


# Create your models here.
