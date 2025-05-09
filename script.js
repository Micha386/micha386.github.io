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
  fetch("https://script.google.com/macros/s/AKfycbxYm7NI0G_dII2JiA4NGFCyKXeOo4f9Kq1lZKMtG1wTN_CVzFcEQpe0WkvtkqT4hxQ0/exec
", {
    method: "POST",
    body: JSON.stringify({ odpowiedz: answer }),
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(err => console.error("Błąd zapisu:", err));
}
