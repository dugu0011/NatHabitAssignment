# forecast_app/views.py
from rest_framework import generics
from .models import Location, WeatherData
from .serializers import LocationSerializer, WeatherDataSerializer

class LocationListCreateView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class WeatherDataListView(generics.ListAPIView):
    serializer_class = WeatherDataSerializer

    def get_queryset(self):
        location_id = self.kwargs['location_id']
        return WeatherData.objects.filter(location_id=location_id)
