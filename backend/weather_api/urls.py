from django.urls import path
from .views import WeatherAPIView

urlpatterns = [
    path('fetch-weather/', WeatherAPIView.as_view(), name='fetch-weather'),
]