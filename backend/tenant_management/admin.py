from django.contrib import admin
from .models import Lease, MaintenanceRequest, Tenant

admin.site.register(Lease)
admin.site.register(MaintenanceRequest)
admin.site.register(Tenant)

# Register your models here.
