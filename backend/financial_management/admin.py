from django.contrib import admin
from .models import Accounting, Budget

admin.site.register(Budget)
admin.site.register(Accounting)

# Register your models here.
