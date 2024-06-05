from django.conf import settings
from django.db import models


class Inspection(models.Model):
    "Generated Model"
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="inspection_property",
    )
    date = models.DateTimeField(
        null=False,
        blank=False,
    )
    checklist = models.TextField(
        null=True,
        blank=True,
    )


class Revenue(models.Model):
    "Generated Model"
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="revenue_property",
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    date = models.DateField(
        null=False,
        blank=False,
    )


class Vendor(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    service_type = models.CharField(
        max_length=100,
    )
    contact_info = models.TextField(
        null=True,
        blank=True,
    )


class Document(models.Model):
    "Generated Model"
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="document_property",
    )
    document_type = models.CharField(
        max_length=100,
    )
    file = models.FileField(
        null=True,
        blank=True,
    )


class Expense(models.Model):
    "Generated Model"
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="expense_property",
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
    date = models.DateField(
        null=False,
        blank=False,
    )


class Property(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    status = models.CharField(
        max_length=50,
    )
    location = models.CharField(
        max_length=255,
    )
    insurance_policy = models.TextField(
        null=True,
        blank=True,
    )
    inspection_schedule = models.DateTimeField(
        null=True,
        blank=True,
    )


# Create your models here.
