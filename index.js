import express from "express";
import dotenv from "dotenv";
import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

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
const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

client.once("ready", async () => {
  const commands = [
    new SlashCommandBuilder()
      .setName("complain")
      .setDescription("Sends Complain to the Class Representatives")
      .addStringOption((option) =>
        option
          .setName("message")
          .setDescription("Complain to Send")
          .setRequired(true)
      )
      .toJSON(),
  ];

  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Successfully registered commands.");
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "complain") {
    // Send ephemeral message
    const message = interaction.options.getString("message");

    const channelID = "1310896453836865639";

    const channel = client.channels.cache.get(channelID);
    if (channel) {
      // Send the message to the specified channel
      channel.send({ content: message });
    } else {
      message.channel.send({
        content: "Could not find the specified channel!",
      });
    }

    await interaction.reply({
      content: "Complaints sent successfully to Class Representatives!",
      ephemeral: true,
    });
  }
});

client.login(process.env.BOT_TOKEN);
