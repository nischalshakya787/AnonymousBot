export const run = (client, message, args) => {
  let toSay = args.join(" ");
  if (!toSay) {
    return message.channel.send({
      content: "You have not written any message",
    });
  }
  const channelID = "1310896453836865639";
  const channel = client.channels.cache.get(channelID);

  if (channel) {
    // Send the message to the specified channel
    channel.send({ content: toSay });
  } else {
    message.channel.send({
      content: "Could not find the specified channel!",
    });
  }
};
