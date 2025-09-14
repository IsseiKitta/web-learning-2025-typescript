# インターフェース

インターフェースは TypeScript で型の構造を定義するための中心的な機能です。

## 基本的なインターフェース

```typescript
// インターフェースの定義
interface User {
  id: number;
  name: string;
  email: string;
}

// インターフェースの使用
const user: User = {
  id: 1,
  name: "太郎",
  email: "taro@example.com",
};

function displayUser(user: User) {
  console.log(`${user.name} (${user.email})`);
}
```

## オプションプロパティ

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // オプション
  category?: string; // オプション
}

// description と category は省略可能
const product: Product = {
  id: 1,
  name: "ノートパソコン",
  price: 89800,
};
```

## readonly プロパティ

```typescript
interface Config {
  readonly apiUrl: string;
  readonly version: string;
  timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  version: "1.0.0",
  timeout: 5000,
};

// config.apiUrl = "new url"; // エラー：readonly プロパティは変更不可
config.timeout = 10000; // OK：通常のプロパティは変更可能
```

## メソッド付きインターフェース

```typescript
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  readonly brand: string;
}

const calculator: Calculator = {
  brand: "Scientific Calculator",
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
```

## インターフェースの拡張

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

interface Student extends Person {
  school: string;
  grade: string;
}

const employee: Employee = {
  name: "花子",
  age: 28,
  employeeId: "EMP001",
  department: "開発",
};

const student: Student = {
  name: "太郎",
  age: 15,
  school: "A高校",
  grade: "freshman",
};
```

## インデックスシグネチャ

```typescript
interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  hello: "こんにちは",
  goodbye: "さようなら",
  thank_you: "ありがとう",
};

// キーを使って値にアクセス
console.log(translations["hello"]); // "こんにちは"
```

## 関数インターフェース

```typescript
interface SearchFunction {
  (query: string, limit?: number): string[];
}

const searchUsers: SearchFunction = (query, limit = 10) => {
  // 検索ロジックの実装
  return [`user1_${query}`, `user2_${query}`];
};

const results = searchUsers("太郎", 5);
```

## インターフェース vs 型エイリアス

どちらも JavaScript へのコンパイル後に消える

```typescript
// インターフェースは型の構造を定義する。
interface UserInterface {
  id: number;
  name: string;
}

// 型エイリアスは単純に型の別名付け
type UserType = {
  id: number;
  name: string;
};

// どちらも同じように使える
const user1: UserInterface = { id: 1, name: "太郎" };
const user2: UserType = { id: 2, name: "花子" };
```
