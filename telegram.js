// src/telegram.js

const TOKEN = "8697377512:AAEWHoZWP6LrwIZy5-gJwiJe_U36-MCvxhk";
const CHAT_ID = "1957450632";

export async function sendToTelegram(message) {
  const url = https://api.telegram.org/bot${TOKEN}/sendMessage;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (!res.ok) {
      console.error("Telegram error:", res.statusText);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
