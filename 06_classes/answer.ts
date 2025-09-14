// Q1
class User {
  private _id: number;
  private _name: string;
  private _email: string;

  constructor(id: number, name: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  getInfo(): string {
    return `ID: ${this._id}, Name: ${this._name}, Email: ${this._email}`;
  }
}

const user1 = new User(1, "田中太郎", "tanaka@example.com");
const user2 = new User(2, "佐藤花子", "sato@example.com");

console.log(user1.getInfo());
console.log(user2.getInfo());

// Q2
class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  bark(): string {
    return "Woof! Woof!";
  }

  getInfo(): string {
    return `${super.getInfo()}, Breed: ${this.breed}`;
  }
}

const dog = new Dog("ポチ", 3, "柴犬");
console.log(dog.getInfo());
console.log(dog.bark());

// Q3
class MathUtils {
  static PI = 3.14159;

  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static circleArea(radius: number): number {
    return MathUtils.PI * radius * radius;
  }
}

console.log("Add 5 + 3:", MathUtils.add(5, 3));
console.log("Multiply 4 * 6:", MathUtils.multiply(4, 6));
console.log("Circle area (radius 5):", MathUtils.circleArea(5));