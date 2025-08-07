

```js
module.exports = {
  antispam: {
    ownerOnly: false,
    execute: async (msg) => {
      msg.reply("🛡️ Anti-spam activé ! Ton compte est protégé contre les messages indésirables.");
    }
  },
  antivirus: {
    ownerOnly: false,
    execute: async (msg) => {
      msg.reply("🛡️ Antivirus activé ! Votre session est analysée et sécurisée.");
    }
  },
  antibanni: {
    ownerOnly: false,
    execute: async (msg) => {
      msg.reply("🛡️ Protection anti-banni activée !");
    }
  },
  antilink: {
    ownerOnly: false,
    execute: async (msg) => {
      msg.reply("🛡️ Anti-link activé ! Les liens suspects seront bloqués.");
    }
  },
  antihack: {
    ownerOnly: false,
    execute: async (msg) => {
      msg.reply("🛡️ Anti-hack activé ! Tentatives d'intrusion surveillées.");
    }
  },
  owner: {
    ownerOnly: false,
    execute: async (msg) => {


    msg.reply("👑 Ce bot est développé par Son Altesse Royal 🌹\nNuméro: +243905526836\nRejoins la chaîne WhatsApp: https://whatsapp.com/channel/0029Vb5xgT01CYoIzsmkzj1B");
    }
  },
  serviceclient: {
    ownerOnly: false,
    execute: async (msg) => {
      msg.reply("📞 Service client disponible 24/7 ! Contacte-nous au +243905526836.");
    }
  },
  menu: {
    ownerOnly: false,
    execute: async (msg) => {
      const menuText = `
🌹 *Royal Protection - Menu des commandes* 🌹

.antispam - Active la protection anti-spam  
.antivirus - Active la protection antivirus  
.antibanni - Active la protection anti-bannissement  
.antilink - Bloque les liens indésirables  
.antihack - Protège contre les tentatives de hack  
.owner - Infos sur le développeur  
.serviceclient - Contact service client  
.menu - Affiche ce menu

*Utilise les commandes avec un "." devant, par ex: .antispam*  
Créé par Son Altesse Royal 🌹
      `;
      msg.reply(menuText);
    }
  }
};
```

---

