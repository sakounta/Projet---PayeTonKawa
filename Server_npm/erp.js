const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fonction pour obtenir les données mock
async function getMockData(endpoint) {
  try {
    const response = await axios.get(`https://615f5fb4f7254d0017068109.mockapi.io/api/v1/${endpoint}`);
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      console.error(`Error fetching data from ${endpoint}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`);
    return null;
  }
}

// API pour les produits de l'ERP
router.get('/api/produits', async (req, res) => {
  const produitsData = await getMockData('products');
  res.json(produitsData);
});

// API pour les données de stock pour un produit spécifique de l'ERP
router.get('/api/stock/:product_id', async (req, res) => {
  const stockData = await getMockData(`products/${req.params.product_id}`);
  res.json(stockData);
});

// API pour les commandes d'un client spécifique de l'ERP
router.get('/api/commandes/:customer_id', async (req, res) => {
  const commandesData = await getMockData(`customers/${req.params.customer_id}/orders`);
  res.json(commandesData);
});

// API pour les produits d'une commande spécifique pour un client spécifique de l'ERP
router.get('/api/order-products/:customer_id/:order_id', async (req, res) => {
  const orderProductsData = await getMockData(`customers/${req.params.customer_id}/orders/${req.params.order_id}/products`);
  res.json(orderProductsData);
});

// Autres routes pour l'ERP si nécessaire

module.exports = router;
