const functions = require("firebase-functions");

const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.tgTaskUpdate = functions.firestore
  .document("/tasks/{taskId}")
  .onCreate((snap, context) => {
    const Token = process.env.TG_TOKEN;
    const id = process.env.CHAT_ID;
    const bot = new Telegraf(Token);
    const originalTask = snap.data().original;
    functions.logger.log("Task created: ", context.params.taskId, originalTask);

    // notify Telegram
    bot.telegram.sendMessage(id, `New task created: ${originalTask}`);
  });
