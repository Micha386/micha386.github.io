
function vote(answer) {
  const img = document.getElementById('mainSprite');
  const msg = document.getElementById('responseMessage');
  if (answer === 'tak') {
    img.src = "postacie/usmiech.png";
    msg.textContent = "Dziękujemy! Do zobaczenia na weselu!";
  } else {
    img.src = "postacie/smutek.png";
    msg.textContent = "Będziemy tęsknić 😢";
  }
}
