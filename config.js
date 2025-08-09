js
module.exports = {
  // Identifiant de session (à garder secret)
  sessionId: 'royale-session',

  // Paramètres du bot
  ownerNumber: ['243905526836'], // Ton numéro en format international
  botName: 'Royale Protection Bot 🌹',
  ownerName: 'Son Altesse Royale 🌹',

  // Préfixe des commandes
  prefix: '.',

  // Délai d’inactivité pour auto-déconnexion (ms)
  timeout: 60 * 60 * 1000, // 1 heure

  // Messages de réponse par défaut
  messages: {
    success: '✅ Commande exécutée.',
    error: '❌ Une erreur est survenue.',
    onlyOwner: '⚠️ Seul l’owner peut utiliser cette commande.',
    wait: '⏳ Traitement en cours...',
  }
};




js
const config = require('./config');
