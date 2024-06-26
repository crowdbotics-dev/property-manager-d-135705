# Generated by Django 3.2.25 on 2024-06-05 05:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('property_management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tenant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('contact_info', models.TextField(blank=True, null=True)),
                ('rental_history', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='MaintenanceRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('status', models.CharField(max_length=50)),
                ('date_submitted', models.DateTimeField()),
                ('tenant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='maintenancerequest_tenant', to='tenant_management.tenant')),
            ],
        ),
        migrations.CreateModel(
            name='Lease',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('rent', models.DecimalField(decimal_places=2, max_digits=10)),
                ('property', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lease_property', to='property_management.property')),
                ('tenant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lease_tenant', to='tenant_management.tenant')),
            ],
        ),
    ]
