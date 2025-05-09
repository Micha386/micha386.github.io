function vote(answer) {
  const img = document.getElementById('mainImage');
  const msg = document.getElementById('responseMessage');

  if (answer === 'tak') {
    window.location.href = "szczegoly.html";
  } else {
    img.src = "placzace_postacie.png"; // Podmień na właściwy plik
    msg.textContent = "Będziemy tęsknić 😢";
  }

  // Zapisz do Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbwLhcFzadyD6L6gMaF1R1s4JtCMOquXzMXu2fwIqbrxLZtupjYmWEpWewu3GApVc8X5/exec
", {
    method: "POST",
    body: JSON.stringify({ odpowiedz: answer }),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(err => console.error("Błąd zapisu:", err));
}
