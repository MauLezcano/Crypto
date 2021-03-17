var cardsDiv = document.getElementsByClassName("cards")[0];

function createCard(name, colorHEX){
  let x = document.createElement("DIV");
  let y = document.createElement("P");
  y.innerHTML = name;
  x.style.backgroundColor = colorHEX;
  x.appendChild(y);
  x.className = "card";
  cardsDiv.appendChild(x);
}

createCard("FaucetPay", "#1d83cc");
createCard("FaucetCrypto", "purple");
createCard("FireFaucet", "gray");
createCard("AutoFaucet", "yellow");
createCard("AllCoins", "red");
createCard("FreeTron", "red");
createCard("Example", "green");
