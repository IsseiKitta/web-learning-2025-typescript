# 関数

TypeScript では関数の引数や戻り値に型を指定することで、より安全で読みやすいコードを書くことができます。

## 基本的な関数の型

```typescript
// 通常の関数宣言
function add(a: number, b: number): number {
  return a + b;
}

// 関数式
const multiply = function (a: number, b: number): number {
  return a * b;
};

// アロー関数
const subtract = (a: number, b: number): number => {
  return a - b;
};

// 単一式のアロー関数
const divide = (a: number, b: number): number => a / b;
```

## オプショナル引数とデフォルト引数

```typescript
// オプショナル引数
function greet(name: string, surname?: string): string {
  if (surname) {
    return `Hello, ${surname} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("太郎"); // "Hello, 太郎!"
greet("太郎", "山田"); // "Hello, 山田 太郎!"

// デフォルト引数
function createUser(name: string, age: number = 18): object {
  return { name, age };
}

const user1 = createUser("太郎"); // age は 18
const user2 = createUser("花子", 25); // age は 25
```

## Rest Parameters（可変引数）

```typescript
// 数値の合計を計算
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// 文字列の結合
function joinStrings(separator: string, ...strings: string[]): string {
  return strings.join(separator);
}

console.log(joinStrings("-", "apple", "banana", "orange")); // "apple-banana-orange"
```

## async/await と Promise

```typescript
// Promise を返す関数
function fetchData(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ID: ${id}`);
    }, 1000);
  });
}

// async/await を使用
async function getData(id: number): Promise<string> {
  try {
    const data = await fetchData(id);
    return `Processed: ${data}`;
  } catch (error) {
    throw new Error(`Failed to get data: ${error}`);
  }
}

// 使用例
getData(123).then((result) => {
  console.log(result); // "Processed: Data for ID: 123"
});
```

## 関数のオーバーロード

```typescript
// 関数のオーバーロード定義
function processData(data: string): string;
function processData(data: number): number;
function processData(data: boolean): boolean;

// 実装
function processData(
  data: string | number | boolean
): string | number | boolean {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * 2;
  } else {
    return !data;
  }
}

// 使用例
const result1 = processData("hello"); // "HELLO"
const result2 = processData(5); // 10
const result3 = processData(true); // false
```

## 高階関数

```typescript
// 関数を引数として受け取る関数
function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const addition = (x: number, y: number) => x + y;
const multiplication = (x: number, y: number) => x * y;

console.log(applyOperation(5, 3, addition)); // 8
console.log(applyOperation(5, 3, multiplication)); // 15

// 関数を返す関数
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```

## void 型と never 型

```typescript
// void: 戻り値がない関数
function logMessage(message: string): void {
  console.log(message);
  // return; は省略可能
}

// never: 決して戻らない関数
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // 無限ループ
  }
}
```

## 型ガード関数

```typescript
// 型ガード関数
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // この時点で value は string 型として扱われる
    console.log(value.toUpperCase());
  }
}

// 使用例
interface User {
  id: number;
  name: string;
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.id === "number" && typeof obj.name === "string";
}

function handleUser(data: unknown) {
  if (isUser(data)) {
    // data は User 型として扱われる
    console.log(`User: ${data.name} (ID: ${data.id})`);
  }
}
```

## 関数型の定義

```typescript
// 関数型エイリアス
type MathOperation = (a: number, b: number) => number;
type StringFormatter = (text: string) => string;
type EventCallback = (event: string) => void;

// 使用例
const add: MathOperation = (a, b) => a + b;
const toUpperCase: StringFormatter = (text) => text.toUpperCase();
const handleClick: EventCallback = (event) => console.log(`Clicked: ${event}`);

// 関数を受け取る関数
function calculate(x: number, y: number, operation: MathOperation): number {
  return operation(x, y);
}
```
