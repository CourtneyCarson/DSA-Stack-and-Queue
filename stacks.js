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
  

  console.log(starTrek);
  console.log(starTrek.top.next);

}
 newFunction(); 
