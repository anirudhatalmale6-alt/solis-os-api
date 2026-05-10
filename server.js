require('dotenv').config();
const express = require('express');
const { handleIncomingMessage } = require('./chatbot');
const { sendWhatsAppMessage } = require('./whatsapp');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Solis OS WhatsApp Chatbot is running' });
});

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.WEBHOOK_VERIFY_TOKEN) {
    console.log('Webhook verified');
    return res.status(200).send(challenge);
  }
  res.sendStatus(403);
});

app.post('/webhook', async (req, res) => {
  res.sendStatus(200);

  try {
    const body = req.body;
    if (!body.object || body.object !== 'whatsapp_business_account') return;

    const entries = body.entry || [];
    for (const entry of entries) {
      const changes = entry.changes || [];
      for (const change of changes) {
        if (change.field !== 'messages') continue;
        const value = change.value;
        if (!value || !value.messages) continue;

        for (const message of value.messages) {
          if (message.type !== 'text') {
            await sendWhatsAppMessage(
              message.from,
              "Thanks for reaching out! I can best assist you with text messages. Feel free to type your question and I'll help you right away."
            );
            continue;
          }

          const userText = message.text.body;
          const senderName = value.contacts?.[0]?.profile?.name || 'there';
          console.log(`Message from ${senderName} (${message.from}): ${userText}`);

          const reply = handleIncomingMessage(userText, senderName, message.from);
          await sendWhatsAppMessage(message.from, reply);
        }
      }
    }
  } catch (err) {
    console.error('Webhook processing error:', err);
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Solis OS Chatbot running on port ${PORT}`);
  });
}

module.exports = app;
