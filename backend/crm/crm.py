from flask import Flask, jsonify

from libs.get_mock_api_data.get_mock_api_data import get_mock_data

app = Flask(__name__)


def get_prospects_data(clients_data):
    prospects_data = [client for client in clients_data if "orders" not in client or not client["orders"]]
    return prospects_data


# API pour les clients
@app.route('/api/clients', methods=['GET'])
def get_clients():
    clients_data = get_mock_data("customers")
    return jsonify(clients_data)


# API pour les prospects
@app.route('/api/prospects', methods=['GET'])
def get_prospects():
    clients_data = get_mock_data("customers")
    prospects_data = get_prospects_data(clients_data)
    return jsonify(prospects_data)


clients_data = get_mock_data("customers")
prospects_data = get_prospects_data(clients_data)


# Utilisation des données
if clients_data:
    print("Clients:", clients_data, "\n\n\n")

if prospects_data:
    print("Prospects:", prospects_data, "\n\n\n")