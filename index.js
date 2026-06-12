const { Client } = require("discord.js");

const client = new Client({ intents: [] });

client.once("ready", () => {
  console.log("Bot Online");
});

client.login(process.env.TOKEN);
