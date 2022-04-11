'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) { 
  this.value = value;
  this.right = null;
  this.left = null;
}
  BinarySearchTree.prototype.insert = function (value){

    if(value>this.value) {
      if(this.right == null){
      this.right = new BinarySearchTree(value);
      }
     if (this.right !== null){
        this.right.insert(value);
      }
    }
    if(value<this.value){
      if(this.left == null){
          this.left = new BinarySearchTree(value);
          }
      if(this.left !== null){
          this.left.insert(value);
      }
    }
  }
  BinarySearchTree.prototype.contains = function(value){
    if (this.value ===value) return true // si se encuentra dentro del value entra directamente a true 
    if (this.value < value){
      if (this.right)return this.right.contains(value); // itera con la rama derecha, comienza la recursion para ver si se encuentra 
    } else {
      if (this.left) return this.left.contains(value); // itera con la rama izquierda, misma recursion 
    }
   return false // al no encontrarse en ninguna de las ramas, se devuelve false 
  }
  BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
   
    if (order === "pre-order"){
      cb(this.value)
      if(this.left) this.left.depthFirstForEach(cb,order)
      if(this.right) this.right.depthFirstForEach(cb,order)
    }
    if (!order || order === "in-order"){
      if(this.left) this.left.depthFirstForEach(cb,order)
      cb(this.value)
      if(this.right) this.right.depthFirstForEach(cb,order)
    }
    if (order === "post-order"){
      if(this.left) this.left.depthFirstForEach(cb,order)
      if(this.right) this.right.depthFirstForEach(cb,order)
      cb(this.value)
    }
  }
  BinarySearchTree.prototype.breadthFirstForEach = function(){}
  BinarySearchTree.prototype.size = function(){}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
