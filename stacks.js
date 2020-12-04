//1. write a Stack class with its core functions (push, pop) from scratch.
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }


  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  Pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  //allows you to look at the top of the stack without removing it
  peek() {
    return this.top.data;
  }
  //: allows you to check if the stack is empty or not
  isEmpty() {
    if (!this.top) {
      return true
    } else {
      return false
    }
  }
}





////////////////////////// DRILLS /////////////////////////////


// 1. Create a stack called starTrek and add;
// Kirk, Spock, McCoy, and Scotty to the stack.
function newFunction() {
  const starTrek = new Stack();
  starTrek.push("kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  starTrek.peek()
  
  // console.log(starTrek.peek())
  console.log(starTrek.isEmpty())
  // console.log(starTrek);
  // console.log(starTrek.top.next);

}
newFunction();

//2. Using the Stack class above, implement 
// the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?





// };