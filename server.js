require('dotenv').config();
const express = require('express');
const { handleIncomingMessage } = require('./chatbot');
const { sendWhatsAppMessage } = require('./whatsapp');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

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

app.post('/auth/signup', async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const SUPABASE_URL = process.env.SUPABASE_URL || 'https://joeklgpncbrhnujzdzsp.supabase.co';
    const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!SERVICE_ROLE_KEY) return res.status(500).json({ error: 'Server not configured' });

    const resp = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'apikey': SERVICE_ROLE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: fullName || '' },
      }),
    });

    const userData = await resp.json();
    if (!resp.ok) return res.status(resp.status).json({ error: userData.msg || userData.message || 'Signup failed' });

    res.json({ user: { id: userData.id, email: userData.email, full_name: fullName } });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
});

app.post('/chat', (req, res) => {
  try {
    const { message, sessionId, name } = req.body;
    if (!message) return res.status(400).json({ error: 'Message required' });
    const sid = sessionId || `web_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;
    const userName = name || 'there';
    const reply = handleIncomingMessage(message, userName, sid);
    res.json({ reply, sessionId: sid });
  } catch (err) {
    console.error('Chat API error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Solis OS Chatbot running on port ${PORT}`);
  });
}

module.exports = app;
