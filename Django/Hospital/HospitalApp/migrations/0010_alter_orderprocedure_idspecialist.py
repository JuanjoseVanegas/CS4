# Generated by Django 5.0.4 on 2024-05-01 17:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HospitalApp', '0009_alter_appointment_date_alter_patient_datebirth'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderprocedure',
            name='idSpecialist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='HospitalApp.person'),
        ),
    ]
