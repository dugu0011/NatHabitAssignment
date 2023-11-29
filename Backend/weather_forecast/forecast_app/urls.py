# forecast_app/urls.py
from django.urls import path
from .views import LocationListCreateView, WeatherDataListView

urlpatterns = [
    path('locations/', LocationListCreateView.as_view(), name='location-list-create'),
    path('weather/<int:location_id>/', WeatherDataListView.as_view(), name='weather-data-list'),
]
