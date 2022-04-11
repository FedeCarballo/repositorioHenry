'use strict'

const { queue } = require("@11ty/eleventy-cache-assets");

// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  if (n>-1 && n<2){
    return 1;
  }
  else if(n<0){
    return "no se calcula factorial de numeros negativos";
  }
  else {
    return n*nFactorial(n-1);
  }

}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n===0){
    return 0;
  }
  else if(n===1){
    return 1;
  }
  return (nFibonacci(n-1)+nFibonacci(n-2));
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
this.queue = []; //lo inicializamos como un array vacio 
}

// los proximos items se crean fuera de la funcion ya que sino al crear cada queue nuevo se crearan metodos nuevos y seria poco optimizado 
// se trabaja sobre el contenedor padre, en este caso Queue para que las funciones anidadas hereden estas funcionalidades, sea size, push y shift
Queue.prototype.enqueue = function(item){
  this.queue.push(item);
}
Queue.prototype.size = function(){
  return this.queue.length; 
}

Queue.prototype.dequeue = function(){
   return this.queue.shift(); // usamos return ya que esperamos que nos retorne el item deseado, sin el return estaria bien pero no nos retornaria el item deseado
  
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
