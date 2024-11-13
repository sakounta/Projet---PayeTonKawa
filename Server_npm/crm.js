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

// Fonction pour obtenir les données de prospects
function getProspectsData(clientsData) {
  return clientsData.filter(client => !client.orders || client.orders.length === 0);
}

// API pour les clients du CRM
router.get('/clients', async (req, res) => {
  const clientsData = await getMockData('customers');
  res.json(clientsData);
});

// API pour les prospects du CRM
router.get('/prospects', async (req, res) => {
  const clientsData = await getMockData('customers');
  const prospectsData = getProspectsData(clientsData);
  res.json(prospectsData);
});

module.exports = router;
