const buttonEl = document.getElementById("bottone_prezzo");

buttonEl.addEventListener("click", function calcolaPrezzo() {
  const user = document.getElementById("user").value;
  const user_km = parseInt(document.getElementById("user_km").value);
  const user_age = parseInt(document.getElementById("user_age").value);

  const ticket = user_km * 0.21;

  if (user_age < 18) {
    prezzoTicket = ticket - (ticket * 0.2);
  } else if (user_age > 65) {
    prezzoTicket = ticket - (ticket * 0.4);
  } else {
    prezzoTicket = ticket;
  }

  const prezzoFinale = prezzoTicket.toFixed(2);

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `Ciao ${user}, percorrendo ${user_km} km, il prezzo del tuo biglietto è di ${prezzoFinale} €`;
});
