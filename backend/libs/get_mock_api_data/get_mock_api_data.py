import requests

# URL de base du mock API
base_url = "https://615f5fb4f7254d0017068109.mockapi.io/api/v1"


def get_mock_data(endpoint):
    response = requests.get(f"{base_url}/{endpoint}")
    if response.status_code == 200 and response.content:
        return response.json()
    else:
        print(f"Error fetching data from {endpoint}")
        return None
