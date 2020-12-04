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
  //2.1.a:allows you to look at the top of the stack without removing it
  peek() {
    return this.top.data;
  }
  //2.1.b: allows you to check if the stack is empty or not
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
  //2.1.c:to display the stack - what is the 1st item in your stack?
  display() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
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
  starTrek.peek();
  starTrek.display();
  //2.2: Remove McCoy from your stack and display the stack
  starTrek.Pop();
  starTrek.Pop();

  console.log(starTrek.Pop());
  console.log(starTrek.Pop());
  // console.log(starTrek.peek())
  // console.log(starTrek.isEmpty());
  // console.log(starTrek);
  // console.log(starTrek.top.next);
  // console.log(starTrek.display())
}
newFunction();

//2. Using the Stack class above, implement 
// the following helper functions outside of the class:
// peek(): allows you to look at the top of the stack without removing it
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?





// 3. Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward.;
// For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if 
// you take out the spaces and ignore the punctuation; and 1, 001 is a numeric palindrome.;
// We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not.;
// Use the following template as a starting point.;

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let reverseString = string.split('').reverse().join('');

  return reverseString === string;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


// 4. Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced parentheses.;
// Write a function that takes an arithmetic expression as an argument and returns true or;
// false based on matching parenthesis.As a bonus provide a meaningful error message to the user;
// as to what's missing. For example, you are missing a ( or missing a ")".;;;

function matchingParenthesis(string) {
  const stack = new Stack;
  //set an open array & starting index
  let openingIndex = [];
  let index = 0;
  // loop through string 
  for (let char of string) {
    // if characters of [ ( ] are a match push char into stack, and push index into opening index
    if (char.match(/[(]/g)) {
      stack.push(char);
      openingIndex.push(index);
    }

    // if characters of [ ) ] are a match g (global) returns all matches, instead of stopping after the first match
    if (char.match(/[)]/g)) {
      // if there is nothing or the value is not '(' return missing statement 
      if (!stack.peek() || !stack.peek().value === '(') {
        return 'Missing ( at index ' + index;
      }
      // else pop - remove last item 
      else {
        stack.Pop();
        // .pop is its own method not the one I made above 
        openingIndex.pop();
      }
    }


    // increment index 
    index++;
  }

  // if stack is empty return error + index.length -1 
  if (!stack.isEmpty()) {

    console.log('Missing ) at index ' + openingIndex[openingIndex.length - 1]);
    return 'Missing ) at index ' + openingIndex[openingIndex.length - 1];
  }

  console.log('All parenthesis are closed');

  return 'All parenthesis are closed';


}
matchingParenthesis('(1)+ 1');
matchingParenthesis('(1 + 1');

//5. Sort stack
// Write a program to sort a stack such that the smallest items are on the top(in ascending order).;
// You can use an additional stack, but you may not use any other data structure(such as an array, 
// or linked list).



