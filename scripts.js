var cardsDiv = document.getElementsByClassName("cards")[0];

let color = "black";

function createCard(name, colorHEX, link){
  let x = document.createElement("A");
  let y = document.createElement("DIV");
  let z = document.createElement("P");
  z.innerHTML = name;
  y.style.backgroundColor = color;
  y.className = "card";
  y.appendChild(z);
  x.appendChild(y);
  x.href = link;
  x.target = "_blank";
  cardsDiv.appendChild(x);
}

createCard("FaucetPay", "black", "https://faucetpay.io/?r=1422036");
createCard("FaucetCrypto", "white", "https://faucetcrypto.com/ref/924412");
createCard("FireFaucet", "white", "https://firefaucet.win/ref/MauLzH");
createCard("AutoFaucet", "white", "https://firefaucet.win/ref/MauLzH");
createCard("AllCoins", "white", "https://allcoins.pw/?ref=464860");
createCard("FreeTron", "white", "https://free-tron.com/?ref=180038");
