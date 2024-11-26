import express from "express";
import dotenv from "dotenv";
import { Client, GatewayIntentBits, Collection } from "discord.js";
import fs from "fs";

dotenv.config();
const app = express();

app.listen(3000, () => {
  console.log("Project is Running");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.commands = new Collection();

const prefix = "!";

const commands = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commands) {
  const commandName = file.split(".")[0];
  import(`./commands/${commandName}.js`)
    .then((command) => {
      client.commands.set(commandName, command);
    })
    .catch((err) => {
      console.error(`Error loading command ${commandName}:`, err);
    });
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);

    if (!command) {
      return message.channel.send({ content: "That command doesn't exist" });
    }

    // Execute the command
    try {
      command.run(client, message, args);
    } catch (err) {
      console.error("Error executing command:", err);
      message.channel.send({
        content: "There was an error executing that command.",
      });
    }
  }
});

client.login(process.env.BOT_TOKEN);
