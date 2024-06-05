from django.conf import settings
from django.db import models


class Lease(models.Model):
    "Generated Model"
    tenant = models.ForeignKey(
        "tenant_management.Tenant",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="lease_tenant",
    )
    property = models.ForeignKey(
        "property_management.Property",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="lease_property",
    )
    start_date = models.DateField(
        null=False,
        blank=False,
    )
    end_date = models.DateField(
        null=True,
        blank=True,
    )
    rent = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )


class MaintenanceRequest(models.Model):
    "Generated Model"
    tenant = models.ForeignKey(
        "tenant_management.Tenant",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="maintenancerequest_tenant",
    )
    description = models.TextField(
        null=False,
        blank=False,
    )
    status = models.CharField(
        max_length=50,
    )
    date_submitted = models.DateTimeField(
        null=False,
        blank=False,
    )


class Tenant(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    contact_info = models.TextField(
        null=True,
        blank=True,
    )
    rental_history = models.TextField(
        null=True,
        blank=True,
    )


# Create your models here.
