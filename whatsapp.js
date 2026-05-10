const axios = require('axios');

const GRAPH_API = 'https://graph.facebook.com/v25.0';

async function sendWhatsAppMessage(to, text) {
  try {
    await axios.post(
      `${GRAPH_API}/${process.env.WHATSAPP_PHONE_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: text }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`Reply sent to ${to}`);
  } catch (err) {
    console.error('Send message error:', err.response?.data || err.message);
  }
}

module.exports = { sendWhatsAppMessage };
