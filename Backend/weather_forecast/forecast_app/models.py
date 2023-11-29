# forecast_app/models.py
from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class WeatherData(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    date = models.DateField()
    temperature = models.FloatField()
    description = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.location}  {self.temperature}'

