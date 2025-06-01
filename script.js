function vote(answer) {
  const img = document.getElementById('mainImage');
  const msg = document.getElementById('responseMessage');

  if (answer === 'tak') {
    // Przekierowanie na stronę ze szczegółami
    window.location.href = "szczegoly.html";
  } else {
    img.src = "sad.png"; // Płacząca wersja
  }

  // Zapis do Google Sheets
  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ odpowiedz: answer }),
  }).catch(err => console.error("Błąd zapisu:", err));
}
