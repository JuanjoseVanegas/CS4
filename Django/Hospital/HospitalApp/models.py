from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=50)
    cedula = models.BigIntegerField(primary_key=True)
    email = models.CharField(max_length=50)
    phoneNumber = models.IntegerField()
    dateBirth = models.DateField()
    address = models.CharField(max_length=100)
    rol = models.CharField(max_length=50)
    userName = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
   