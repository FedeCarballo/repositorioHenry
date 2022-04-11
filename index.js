function BinaryTree(value){
    this.value = value;
    this.right = null;
    this.left = null;
}

var newTree = new BinaryTree();
testArr = [];

BinaryTree.prototype.insert = function (value){
    
    if(value>this.value) {
        //a derecha
        if(this.right === null){
        this.right = new BinaryTree(value);
        }
        else {
            this.right.insert(value);
        }
    }
   else if(value<this.value){
        if(this.left === null){
            this.left = new BinaryTree(value);
            }
        else {
            this.left.insert(value);
        }
    }
}

newTree.length











    
  // ejercicio manaos
  if (this.value == value){
    return true
    }    
    
    if (value<this.value || this.right == value){
      if(this.left == value && this.left !== null){
        return true
      }
      else{
        this.left.contains();
      }
    }
    if (value>this.value || this.right == value){
     if(this.right == value && this.right !== null){
       return true
       }
       else{
         this.right.contains();
       }
     }
    else return false;