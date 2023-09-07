// 1 salvare le due variabili età e km da percorrere
// 2 calcolare il prezzo del biglietto in base ai dati forniti
// 3 stamparlo in pagina

// 1
const outputTag = document.getElementById('output');
const age = parseInt(prompt('Digita la tua età')) ;
const km = parseInt(prompt('Digita il numero di km da percorrere')) ;
const sconto20 = parseInt 0.20
const sconto40 = parseInt 0.40
const price = parseInt (km * 0.21) 

// 2
// if (age < 18) {
//   console.log('applico uno sconto del 20%')
//   }
//   else (age > 17) 
//   {
//     console.log('non applico lo sconto')
//   }
// if (age > 64) {
//   console.log('applico uno sconto del 40%')
//   }
//   else (age < 65) 
//   {
//     console.log('non applico lo sconto')
//   }


  if (age < 18) {
    price = ( km * 0.21 ) * sconto20
  }
  else (age > 17) 
  {
    price = km * 0.21
  }


  if (age > 64) {
    price = ( km * 0.21 ) * sconto40
  }
  else (age < 65) 
  {
    price = km * 0.21
  }

let messaggio = price 


// 3
outputTag.innerHTML = messaggio;

