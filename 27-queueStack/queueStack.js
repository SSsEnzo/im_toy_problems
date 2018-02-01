/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.someInstance = {};
  this.length = 0;
  // add an item to the top of the stack
  this.push = function(val){
    this.length += 1;
    this.someInstance[this.length] = val;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    let temp = this.someInstance[this.length];
    delete this.someInstance[this.length];
    this.length -= 1;
    return temp;
  };

  // return the number of items in the stack
  this.size = function(){
    return this.length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(val){
    // TODO: implement `enqueue`
    inbox.push(val);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    outbox.push(inbox.someInstance[outbox.length + 1])
    return outbox.someInstance[outbox.length];
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return inbox.length - outbox.length
  };
};
