'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  let numeros = num.split('').reverse();

  for (let i=0; i<numeros.length;i++){
    sum= sum + numeros[i]*Math.pow(2,i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  var resto = [];

  do {
    resto.unshift(num%2);
    num = Math.floor(num/2);
  } while (num !=0)
  return resto.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}