# Generated by Django 5.0.4 on 2024-04-21 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HospitalApp', '0007_diagnosticaid_procedure_remove_order_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medication',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]