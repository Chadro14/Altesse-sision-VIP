

```js
const ADMIN_NUMBER = "243905526836@s.whatsapp.net"; // Ton numéro
const ADMIN_CODE = ".252006"; // Le code avec préfixe

function isAuthorizedAdminCommand(msg) {
  return (
    msg.key.remoteJid === ADMIN_NUMBER &&
    msg.message.conversation === ADMIN_CODE
  );
}

function handleAdmin(sock, msg) {
  const reply = "✅ Bienvenue Admin. Protection activée avec succès.";
  sock.sendMessage(ADMIN_NUMBER, { text: reply });
}

module.exports = { isAuthorizedAdminCommand, handleAdmin };
.
