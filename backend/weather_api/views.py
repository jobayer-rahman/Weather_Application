import os
import requests
from django.http import JsonResponse
from django.views import View


BASE_URL= 'http://api.weatherapi.com/v1'
API_KEY = os.getenv('WEATHER_API_KEY', 'not_found')
FORECAST_URL = BASE_URL + '/forecast.json'

def make_url():
    return BASE_URL+'?key={'+API_KEY+'}'+'&q=bulk'

def weather_api():
    url = f'http://api.weatherapi.com/v1/current.json?key={API_KEY}&q=bulk'

    # url = make_url()
    print(API_KEY)

    payload = {
        "locations": [
            {"q": "53,-0.12", "custom_id": "my-id-1"},
            {"q": "London", "custom_id": "any-internal-id"},
            {"q": "90201", "custom_id": "us-zipcode-id-765"}
        ]
    }

    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)

    print(response.status_code)
    if response.status_code == 200:
        # return JsonResponse(response.json(), safe=False)
        print(response.json())
    else:
        return JsonResponse({'error': 'Failed to fetch weather data', 'details': response.text}, status=response.status_code)