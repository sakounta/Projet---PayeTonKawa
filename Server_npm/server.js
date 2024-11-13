//const express = require('express');
//const crmRoutes = require('./crm'); // Importez les routes CRM depuis le fichier crm.js
//const erpRoutes = require('./erp'); // Importez les routes ERP depuis le fichier erp.js
//
//const app = express();
//const port = process.env.PORT || 3000;
//
//// Montez les routes CRM sur le chemin '/crm'
//app.use('/crm', crmRoutes);
//
//// Montez les routes ERP sur le chemin '/erp'
//app.use('/erp', erpRoutes);
//
//app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
//});


const express = require('express');
const bodyParser = require('body-parser');
const crmRoutes = require('./crm'); // Importez les routes CRM depuis le fichier crm.js
const erpRoutes = require('./erp'); // Importez les routes ERP depuis le fichier erp.js
const revendeursRouter = require('./revendeurs'); // Importez le routeur pour les revendeurs depuis le fichier revendeurs.js

const app = express();
const port = process.env.PORT || 3000;

// Utilisation de bodyParser pour traiter les données JSON
app.use(bodyParser.json());

// Montez les routes CRM sur le chemin '/crm'
app.use('/crm', crmRoutes);

// Montez les routes ERP sur le chemin '/erp'
app.use('/erp', erpRoutes);

// Utilisez le routeur pour les revendeurs sur le chemin '/api/revendeurs'
app.use('/api/revendeurs', revendeursRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
