const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Utilisation d'une liste pour stocker les revendeurs (ne pas utiliser en production, ceci est à titre d'exemple)
const revendeurs = [];

// Route pour créer un nouveau revendeur
router.post('/', async (req, res) => {
  try {
    const { nom, prenom, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Enregistrement du revendeur (idéalement, utilisez une base de données)
    revendeurs.push({
      nom,
      prenom,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'Revendeur créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création du revendeur:', error);
    res.status(500).json({ error: 'Erreur lors de la création du revendeur' });
  }
});

module.exports = router;
