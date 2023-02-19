require("dotenv").config();
const Token = process.env.TG_TOKEN;
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf(Token);

bot.on(message("text"), async (ctx) => {
  const { message } = ctx;
  const { id } = message.chat;
  console.log(message);
  console.log(id);
  await ctx.telegram.sendMessage(
    id,
    `Hello World, Welcome ${message.chat.username}`
  );
});

bot.launch();
