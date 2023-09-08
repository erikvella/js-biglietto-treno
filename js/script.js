// 1 salvare le due variabili età e km da percorrere
// 2 calcolare il prezzo del biglietto in base ai dati forniti
// 3 stamparlo in pagina

// 1
const outputTag = document.getElementById('output');
const age = parseInt(prompt('Digita la tua età')) ;
const km = parseInt(prompt('Digita il numero di km da percorrere')) ;
const sconto20 = 0.2
const sconto40 = 0.4
let price = (km * 0.21);


// 2


// if (age < 18) {
//   console.log('applico uno sconto del 20%')
//   }
//  
// if (age > 64) {
//   console.log('applico uno sconto del 40%')
//   }
//  


  if (age < 18) {
  price = price - (price * sconto20);
  }



  if (age > 64) {
  price = price - (price * sconto40);
  }
  






// 3
outputTag.innerHTML = price.toFixed(2);

