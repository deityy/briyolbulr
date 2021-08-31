const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
client.ranks = [
  { role: "857983333824593960", coin: 250 },
  { role: "857983333073813514", coin: 500 },
  { role: "857983331974250557", coin: 750 },
  { role: "857983331228581929", coin: 1000 },
  { role: "857983324723347456", coin: 1250 },
  { role: "857983323725103115", coin: 1500 },
  { role: "857983323166605312", coin: 1750 },
  { role: "857983319274684487", coin: 2000 },
  { role: "857983318409347132", coin: 2250 },
  { role: "857983317412544523", coin: 2500 },
  
  ];
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");

client.on("ready", async() => {
	client.user.setActivity("Orchais ❤️ Guevara")
	client.channels.cache.get("858005199121416202").join();
})

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));
