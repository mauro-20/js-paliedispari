// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {
  //salvo in una variabile l'inverso della parola
  var reverse = ''
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i]
  }
  //confronto la parola con il suo inverso
  if (word == reverse) {
    return true
  }
  return false

}

// Chiedere all’utente di inserire una parola
var word = prompt('inserisci una parola');

// stampo il risultato
if (isPalindrome(word)) {
  alert('palindromo')
} else {
  alert('non è palindromo')
}
