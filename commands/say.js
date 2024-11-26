export const run = (client, message, args) => {
  let toSay = args.join(" ");
  if (!toSay) {
    return message.channel.send({
      content: "You have not written any message",
    });
  }
  message.channel.send({ content: toSay });
};
