const user = localStorage.getItem("user");
document.getElementById("welcome").textContent = `Bienvenue, ${user}`;

if (user === "lyven.pro") {
  document.getElementById("adminSection").style.display = "block";
}

// Exemple de graphique
const ctx = document.getElementById('memberChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Admins', 'Rédacteurs', 'Membres'],
    datasets: [{
      label: 'Nombre de membres',
      data: [3, 5, 120],
      backgroundColor: ['#0055a4', '#ef4135', '#999']
    }]
  }
});
