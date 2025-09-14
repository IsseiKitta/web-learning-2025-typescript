// Q1
let age: number;
age = 25;
console.log(`私は${age}歳です`);

// Q2
function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

console.log(greet("太郎"));

// Q3
function calculate(a: number, b: number): number {
  return a + b;
}

console.log(calculate(10, 20));