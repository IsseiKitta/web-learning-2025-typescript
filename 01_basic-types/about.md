# 基本的な型

TypeScript の型システムを理解することで、より安全で保守しやすいコードが書けるようになります。

## 変数宣言

### let と const

```typescript
// let: 再代入可能
let name = "太郎";
name = "花子"; // OK

// const: 再代入不可（推奨）
const age = 25;
age = 26; // エラー
```

### 型注釈（Type Annotation）

```typescript
const userName: string = "太郎";
const userAge: number = 25;
const isActive: boolean = true;
```

## プリミティブ型

### string 型

```typescript
const message: string = "Hello, TypeScript!";
const template: string = `ユーザー名: ${userName}`;
```

### number 型

Typescript の number 型は整数と少数を含めた数値の型です。

```typescript
const count: number = 100;
const price: number = 299.99;
const bigNumber: number = 1e6; // 1,000,000
```

### boolean 型

```typescript
const isLoggedIn: boolean = true;
const hasPermission: boolean = false;
```

### null と undefined

```typescript
const data: null = null;
const value: undefined = undefined;

// 実際にはユニオン型でよく使用
let maybeString: string | null = null;
let maybeNumber: string | undefined = undefined;
```

プリミティブ型には symbol や bigint もありますが、あまり使いません。

## オブジェクト型

### 基本的なオブジェクト型

TypeScript でオブジェクトの型注釈は、オブジェクトプロパティをキーと値の型のペアで定義します：

```typescript
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "太郎",
  age: 25,
};
```

### オプショナルプロパティ

オブジェクトプロパティのオプショナルを型付けするには、プロパティ名の後ろに `?` を書きます：

```typescript
type Profile = {
  name: string;
  email?: string; // オプショナルプロパティ
  phone?: string;
};

const profile1: Profile = {
  name: "花子",
}; // emailとphoneは省略可能

const profile2: Profile = {
  name: "太郎",
  email: "taro@example.com",
};
```

### インデックス型

オブジェクトのフィールド名をあえて指定せず、プロパティの型「のみ」を指定したい場合に使用します：

```typescript
type Dictionary = {
  [key: string]: number;
};

const scores: Dictionary = {
  math: 85,
  english: 92,
  science: 78,
};
```

### readonly プロパティ

`readonly` を使用すると、プロパティを読み取り専用にできます：

```typescript
type Point = {
  readonly x: number;
  readonly y: number;
};

const point: Point = { x: 10, y: 20 };
// point.x = 30; // エラー：readonlyプロパティには代入できない
```

`const`は再代入不可であることを決めるだけの変数宣言でしたので、オブジェクトのプロパティは変更できます。一方で`readonly`はプロパティへの代入を禁止にするものの、変数自体への代入は許可されます

> https://typescriptbook.jp/reference/values-types-variables/object/readonly-vs-const

## 型推論

TypeScript は多くの場合、型を自動で推論します：

```typescript
const inferredString = "Hello"; // string型として推論
const inferredNumber = 42; // number型として推論
const inferredBoolean = true; // boolean型として推論
```
