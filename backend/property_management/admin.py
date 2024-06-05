from django.contrib import admin
from .models import Document, Expense, Inspection, Property, Revenue, Vendor

admin.site.register(Inspection)
admin.site.register(Revenue)
admin.site.register(Vendor)
admin.site.register(Document)
admin.site.register(Expense)
admin.site.register(Property)

# Register your models here.
