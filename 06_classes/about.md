# クラス

TypeScript のクラスは JavaScript のクラス機能を拡張し、型安全性とアクセス修飾子などの機能を提供します。

## 基本的なクラス定義

```typescript
class User {
  // プロパティの宣言
  id: number;
  name: string;
  email: string;

  // コンストラクタ
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // メソッド
  getFullInfo(): string {
    return `${this.name} (${this.email})`;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }
}

// インスタンスの作成
const user = new User(1, "太郎", "taro@example.com");
console.log(user.getFullInfo()); // "太郎 (taro@example.com)"
```

## アクセス修飾子

```typescript
class BankAccount {
  private balance: number; // private: クラス内でのみアクセス可能
  protected accountType: string; // protected: クラス内と継承先クラスアクセス可能
  public accountNumber: string; // public: どこからでもアクセス可能（デフォルト）

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.accountType = "savings";
  }

  // 残高を取得（public メソッド）
  getBalance(): number {
    return this.balance;
  }

  // 入金
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  // 出金
  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  // protected メソッド（継承先で使用可能）
  protected validateAmount(amount: number): boolean {
    return amount > 0;
  }
}

const account = new BankAccount("12345", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.balance); // エラー: private プロパティにアクセス不可
```

## 継承（Inheritance）

```typescript
// ベースクラス
class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("何か音を出している...");
  }

  getInfo(): string {
    return `${this.name}（${this.age}歳）`;
  }
}

// 継承クラス
class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age); // 親クラスのコンストラクタを呼び出し
    this.breed = breed;
  }

  // メソッドのオーバーライド
  makeSound(): void {
    console.log("ワンワン!");
  }

  // 新しいメソッド
  fetch(): void {
    console.log(`${this.name}がボールを取ってきました`);
  }

  getBreed(): string {
    return this.breed;
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("ニャーニャー");
  }

  climb(): void {
    console.log(`${this.name}が木に登っています`);
  }
}

// 使用例
const dog = new Dog("ポチ", 3, "柴犬");
const cat = new Cat("タマ", 2);

dog.makeSound(); // "ワンワン!"
cat.makeSound(); // "ニャーニャー"
dog.fetch(); // "ポチがボールを取ってきました"
```

## 抽象クラス（Abstract Classes）

```typescript
abstract class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  // 抽象メソッド（継承先で必ず実装）
  abstract calculateArea(): number;
  abstract getPerimeter(): number;

  // 具体的なメソッド（継承先で共用）
  getColor(): string {
    return this.color;
  }

  describe(): void {
    console.log(
      `この図形は${this.color}色で、面積は${this.calculateArea()}です`
    );
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// const shape = new Shape("red"); // エラー: 抽象クラスはインスタンス化不可
const rectangle = new Rectangle("青", 10, 5);
const circle = new Circle("赤", 3);

rectangle.describe(); // "この図形は青色で、面積は50です"
circle.describe(); // "この図形は赤色で、面積は28.27...です"
```

## ゲッターとセッター

```typescript
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  // ゲッター
  get celsius(): number {
    return this._celsius;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  // セッター
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("絶対零度以下は設定できません");
    }
    this._celsius = value;
  }

  set fahrenheit(value: number) {
    this.celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 100;
console.log(temp.celsius); // 37.77...
```

## 静的メンバー

```typescript
class MathUtils {
  static readonly PI = 3.14159;
  private static instanceCount = 0;

  constructor() {
    MathUtils.instanceCount++;
  }

  // 静的メソッド
  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static getInstanceCount(): number {
    return MathUtils.instanceCount;
  }

  // インスタンスメソッド
  square(x: number): number {
    return MathUtils.multiply(x, x);
  }
}

// 静的メンバーの使用（インスタンス不要）
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8

// インスタンスメソッドの使用
const mathHelper = new MathUtils();
console.log(mathHelper.square(4)); // 16
console.log(MathUtils.getInstanceCount()); // 1
```

## インターフェースの実装

```typescript
interface Flyable {
  fly(): void;
  altitude: number;
}

interface Swimmable {
  swim(): void;
  depth: number;
}

// 単一インターフェースの実装
class Bird implements Flyable {
  altitude: number = 0;

  fly(): void {
    this.altitude = 100;
    console.log(`鳥が高度${this.altitude}mで飛んでいます`);
  }
}

// 複数インターフェースの実装
class Duck implements Flyable, Swimmable {
  altitude: number = 0;
  depth: number = 0;

  fly(): void {
    this.altitude = 50;
    console.log(`アヒルが高度${this.altitude}mで飛んでいます`);
  }

  swim(): void {
    this.depth = 2;
    console.log(`アヒルが水深${this.depth}mで泳いでいます`);
  }
}

const bird = new Bird();
const duck = new Duck();

bird.fly();
duck.fly();
duck.swim();
```
