# Anonymous Complaint Bot for Discord

This project is a **custom Discord bot** designed to allow users of a Discord server to send complaints **anonymously**. The bot ensures that no one, including the moderators, can see who sent the complaint, thereby preventing any bias in handling complaints.

## Features:
- **Anonymous Complaints**: Users can submit complaints without revealing their identity.
- **No Moderator Bias**: Moderators can't see who submitted the complaint, ensuring fairness.
- **Custom Slash Commands**: The bot supports easy-to-use slash commands for submitting complaints.
- **Built with Node.js**: The bot is built using Node.js and utilizes the `discord.js` library.

## Installation

To set up this project locally, follow these steps:

### Prerequisites:
- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)
- A **Discord bot token** and **guild ID** (for your server) from the [Discord Developer Portal](https://discord.com/developers/applications).

### Steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/nischalshakya787/AnonymousBot.git
   cd AnonymousBot
2. Install dependencies:
    ```bash
    npm install
3. Create a .env file in the root of the project directory and add the following values:
   ```bash
   BOT_TOKEN=your-bot-token
   CLIENT_ID=your-bot-client-id
   GUILD_ID=your-server-guild-id
   CHANNEL_ID=your-private-channel-id
  Replace your-bot-token, your-bot-client-id, your-server-guild-id and your-private-channel-id with your bot's token, client ID, your server's guild ID and private channel id where you want the bot to send message.
  
  4. Run the Bot:
     ```bash
     npm start
  The bot will log in and start listening for interactions in your Discord server.

  ### Usage:
  Once the bot is running, users can send anonymous complaints via a slash command. The complaint command works as follows:

  1. Type /complain <your complain message> in any channel where the bot is present.
  2. The bot will send the complaint message in an internal channel or log it privately, without revealing the user's identity.

  ## Example:
   - Command: /complaint The server's voice channels are too noisy.
   - Response: The bot will log this complaint anonymously.

  ### Development:
   - **Slash Commands:** This bot uses Discord's Slash Commands to interact with users.
   - **Anonymous Complaints:** The complaints are logged and handled in a way that does not expose the user's identity.
   - **Express Server:** An Express server is used to run the bot, which could be extended for future features like a web interface for viewing complaints.

  ## Commands:
  - **/complaint:** Submit an anonymous complaint. (Arguments: <complaint message>)

   
