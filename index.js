`js
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Royale Protector est en ligne.');
});

client.on('message', async msg => {
  const text = msg.body.toLowerCase();

  if (text === '!help') {
    msg.reply('📖 Commandes:\n!payement\n!protection\n!info');
  } else if (text === '!payement') {
    msg.reply('💰 Pour payer via M-Pesa :\nNom : Son Altesse Royal\nNuméro : +243905526836');
  } else if (text === '!protection') {
    msg.reply('🛡️ Protection activée contre les scripts et spams pour 5 jours.');
  } else if (text === '!info') {
    msg.reply('👑 Royale Protector - Bot IA contre piratage & scripts malveillants.');
  }
});

client.initialize();
```




```js
const protections = new Map();
const ADMIN_CODE = "252006";
const PREFIX = ".";

client.on('message', async (msg) => {
  const text = msg.body.trim();
  const user = msg.from;

  // Activation protection avec code
  if (text === `PREFIX{ADMIN_CODE}`) {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 5);
    protections.set(user, expiration);

    await msg.reply(
      `🛡️ Félicitations !\nVotre protection est activée jusqu'au expiration.toLocaleDateString().🔐 Merci d’avoir utilisé Royale Protector.`
    );
    return;
  

  // Vérifier le statut de protection
  if (text === `{PREFIX}statut`) {
    const now = new Date();
    const expire = protections.get(user);

    if (expire && expire > now) {
      await msg.reply(`✅ Protection active jusqu'au ${expire.toLocaleDateString()}.`);
    } else {
