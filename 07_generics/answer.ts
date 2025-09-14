// Q1
function getFirst<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

function getLast<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[array.length - 1] : undefined;
}

const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "orange"];
const empty: number[] = [];

console.log("Numbers - First:", getFirst(numbers), "Last:", getLast(numbers));
console.log("Strings - First:", getFirst(strings), "Last:", getLast(strings));
console.log("Empty - First:", getFirst(empty), "Last:", getLast(empty));

// Q2
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items.length > 0 ? this.items[this.items.length - 1] : undefined;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Number stack pop:", numberStack.pop());
console.log("Number stack pop:", numberStack.pop());

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log("String stack peek:", stringStack.peek());
console.log("String stack pop:", stringStack.pop());

// Q3
interface Identifiable {
  id: number;
}

function findById<T extends Identifiable>(array: T[], id: number): T | undefined {
  return array.find(item => item.id === id);
}

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const products = [
  { id: 101, name: "Laptop", price: 999 },
  { id: 102, name: "Mouse", price: 29 },
];

console.log("User with id 1:", findById(users, 1));
console.log("Product with id 102:", findById(products, 102));