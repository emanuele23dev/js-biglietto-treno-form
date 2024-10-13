// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica
// usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.

// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
// secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const formEl = document.getElementById("ticket-form");
console.log(formEl);

// const fullName = document.getElementById('Fullname');
// console.log(fullnameinputEl);

// const km = document.getElementById('km');
// console.log(kminputEl);

// const ageRange = document.getElementById('ageRange');
// console.log(ageRange);

const resetBtnEl = document.querySelector(".reset");
console.log(resetBtnEl);

const ticketSectionEl = document.getElementById("ticket");
console.log(ticketSectionEl);

const pricePerkm = 0.21;
console.log(pricePerkm);

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // console.log(fullnameinputEl.value, Number(kminputEl.value), Number(ageRange.value));

  const fullName = e.target.fullname.value;
  // - read the value of the input km
  console.log(fullName);

  const km = Number(e.target.km.value);
  console.log(km);

  // - read the value of the age range selection
  const ageRange = e.target.ageRange.value;
  console.log(ageRange);

  let final_price = pricePerkm * km;
  console.log(final_price);

  let discount;
  let offertType = "Biglietto standard";

  if (ageRange === "minor") {
    discount = 0.2;
    final_price = final_price - final_price * discount;
    offertType = "Biglietto Minori";
  } else if (ageRange === "senior") {
    discount = 0.4;
    final_price = final_price - final_price * discount;
    offertType = "Biglietto Senior";
  }

  console.log(Number(final_price.toFixed(2)));

  // update the dom to print the generated ticket
  // generateTicket()

  // genera numero random per wagon
  const wagon = generateRandomInteger(1, 10);
  // genera numero random per cp_code
  const cp_code = generateRandomInteger(80000, 99000);

  // generate the ticket markup to insert the ticket section
  const markup = generateTicketMarkup(
    fullName,
    offertType,
    final_price,
    wagon,
    cp_code
  );
  // update the section innerHTML
  ticketSectionEl.innerHTML += markup;
});

function generateTicketMarkup(
  fullName,
  offertType,
  final_price,
  wagon,
  cp_code
) {
  return `
 <div class="card mt-5 mb-5">
          <div class="card-body d-flex gap-5">
            <div class="passenger bg-dark text-white p-3 rounded">
              <h2>Nome Passeggero</h2>
              <h4>${fullName}</h4>
            </div>
            <div class="ticket-details d-flex align-items-center">
              <div>
                <h6>Offer</h6>
                <div>${offertType}</div>
              </div>
              <div>
                <h6>Wagon</h6>
                <div>${wagon}</div>
              </div>
              <div>
                <h6>Cp Code</h6>
                <div>${cp_code}</div>
              </div>
              <div>
                <h6>Final Price</h6>
                <div>${final_price}</div>
              </div>
            </div>
          </div>
        </div>
`;
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
