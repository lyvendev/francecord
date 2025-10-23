const users = {
  "lyven.pro": { password: "Lyv3n!Fr@nc3C0rd2025", role: "gerant" },
  "moon.pro": { password: "M00n!Fr@nc3C0rd2025", role: "admin" },
  "loucass__": { password: "L0uc@ss!Fr@nc3C0rd2025", role: "admin" }
};

function showLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");

  if (users[username] && users[username].password === password) {
    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Identifiants incorrects ou accès refusé.";
  }
}
