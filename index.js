function calcolaPrezzo() {
  const user = document.getElementById("user").value;
  const user_km = document.getElementById("user_km").value;
  const user_age = document.getElementById("user_age").value;


  let sconto;
  if (user_age >= 65) {
    sconto = 0.4;
  } else if (user_age < 18) {
    sconto = 0.2;
  } else {
    sconto = 0;
  }

  const prezzo_ticket = user_km * 0.21;
  const prezzoScontato = prezzo_ticket * (1 - sconto);
  const prezzoReale = prezzoScontato.toFixed(2);

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `${user}, il prezzo del tuo biglietto è di ${prezzoReale} €`;
}

const buttonEl = document.getElementById("bottone_prezzo");
buttonEl.addEventListener("click", calcolaPrezzo);