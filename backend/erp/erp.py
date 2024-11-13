from flask import Flask, jsonify
from libs.get_mock_api_data.get_mock_api_data import get_mock_data


app = Flask(__name__)


def get_product_stock(product_id):
    endpoint = f"products/{product_id}"
    return get_mock_data(endpoint)


def get_customer_orders(customer_id):
    endpoint = f"customers/{customer_id}/orders"
    return get_mock_data(endpoint)


def get_customer_order_products(customer_id, order_id):
    endpoint = f"customers/{customer_id}/orders/{order_id}/products"
    return get_mock_data(endpoint)


# API pour les produits
@app.route('/api/produits', methods=['GET'])
def get_produits():
    produits_data = get_mock_data("products")
    return jsonify(produits_data)


# API pour les données de stock pour un produit spécifique
@app.route('/api/stock/<int:product_id>', methods=['GET'])
def get_stock(product_id):
    stock_data = get_product_stock(product_id)
    return jsonify(stock_data)


# API pour les commandes d'un client spécifique
@app.route('/api/commandes/<int:customer_id>', methods=['GET'])
def get_commandes(customer_id):
    commandes_data = get_customer_orders(customer_id)
    return jsonify(commandes_data)


# API pour les produits d'une commande spécifique pour un client spécifique
@app.route('/api/order-products/<int:customer_id>/<int:order_id>', methods=['GET'])
def get_order_products(customer_id, order_id):
    order_products_data = get_customer_order_products(customer_id, order_id)
    return jsonify(order_products_data)


stock_data = get_product_stock(4)  # Récupération des données de stock pour le produit 4
commandes_data = get_customer_orders(7)  # Récupération des données de commandes pour le client 7
order_products_data = get_customer_order_products(7, 7)  # Récupération des produits pour la commande 7 du client 7
produits_data = get_mock_data("products")


if produits_data:
    print("Produits:", produits_data, "\n\n\n")

if stock_data:
    print("Stock:", stock_data, "\n\n\n")
if commandes_data:
    print("Commandes:", commandes_data, "\n\n\n")

if order_products_data:
    print("Commandes d'un produit:", order_products_data, "\n\n\n")


if __name__ == '__main__':
    app.run(debug=True)
