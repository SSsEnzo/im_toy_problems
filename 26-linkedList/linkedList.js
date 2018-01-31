/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.list = {};
};

//write methods here!

LinkedList.prototype.addToTail = function(val){
  if (this.tail === null) {
    this.list[val] = {
      value: val,
      next: null
    }
    this.head = this.list[val];
    this.tail = this.list[val];
  } else {
    this.list[this.tail.value].next = val;
    this.list[val] = {
      value: this.tail,
      next: null
    }
    this.tail = this.list[val];
  }
};

LinkedList.prototype.removeHead = function(){
  if (this.head === null) {
    return "nothing to remove"
  } else {
    let temp = this.list[this.head].next
    delete this.list[this.head];
    this.head = this.list[temp];
    return temp;
  }
};

LinkedList.prototype.contains = function(val){
  
};

LinkedList.prototype.makeNode = function(val){
};

