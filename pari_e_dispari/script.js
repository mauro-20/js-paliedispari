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
    // controllo selezione pari/dispari
    if (userChoise != 'pari' && userChoise != 'dispari') {
      alert('Seleziona pari/dispari e prova di nuovo')
    } else {
    
      console.log(userChoise);
      // L'utente inserisce un numero da 1 a 5
      var userNumber = parseInt(document.getElementById('user-number').value);
      // controllo selezione numero
      if (isNaN(userNumber)) {
        alert('Scegli un numero!')
      } else {

        
        // Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).;
        var cpuNumber = randomNumber(1, 5);
        
        // Sommiamo i due numeri;
        var somma = userNumber + cpuNumber
        var sommaEvenOdd = ''
        // Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione);
        if (isEven(somma)) {
          sommaEvenOdd = 'pari'
        } else {
          sommaEvenOdd = 'dispari'
        }
        
        // Dichiariamo chi ha vinto e stampo i risultati;
        var winner = document.getElementById('winner')
        
        if ((userChoise == 'pari' && isEven(somma)) || (userChoise == 'dispari' && !isEven(somma))) {
          winner.innerHTML = 'HAI VINTO'
        } else {
          winner.innerHTML = 'HAI PERSO'
        }
        
        document.getElementById('user-choise-out').innerHTML = userChoise
        document.getElementById('user-number-out').innerHTML = userNumber
        document.getElementById('cpu-number-out').innerHTML = cpuNumber
        document.getElementById('somma').innerHTML = somma;
        document.getElementById('somma-even-odd').innerHTML = sommaEvenOdd
        
        document.getElementById('result').classList.add('visible')
      }
    }
  }
)

