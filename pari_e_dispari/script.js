//funzioni
function randomNumber(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min)
  return num
}

function isEven(num) {
  if (num % 2 == 0) {
    return true
  }
  return false
}

//al click di gioca
var btnGioca = document.getElementById('gioca')
btnGioca.addEventListener('click',
function () {
  // L’utente sceglie pari o dispari e ciclo il radio input per ricavare il value;
  var userChoiseNode = document.getElementsByName('user-choise');
  for (var i = 0; i < userChoiseNode.length; i++) {
    if (userChoiseNode[i].checked) {
      var userChoise = userChoiseNode[i].value
    }
  }
  // L'utente inserisce un numero da 1 a 5
  var userNumber = parseInt(document.getElementById('user-number').value);
  // Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).;
  var cpuNumber = randomNumber(1, 5);

  // Sommiamo i due numeri;
  var somma = userNumber + cpuNumber

  // Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione);
  // Dichiariamo chi ha vinto.;
  if ((userChoise == 'pari' && isEven(somma)) || (userChoise == 'dispari' && !isEven(somma))) {
    alert('hai vinto')
  } else {
    alert('hai perso')
  }

  console.log(`user: ${userChoise} ${userNumber}, cpu: ${cpuNumber}, somma: ${somma}`);
  }
)

