# 型エイリアス（Type Aliases）

型エイリアスは複雑な型に名前を付けて再利用可能にする機能です。コードの可読性と保守性を向上させます。

## 基本的な型エイリアス

```typescript
// 基本的な型エイリアス
type UserID = number;
type UserName = string;
type IsActive = boolean;

// 使用例
const userId: UserID = 12345;
const userName: UserName = "太郎";
const isActive: IsActive = true;
```

## ユニオン型の型エイリアス

```typescript
// ユニオン型
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

// 使用例
const orderStatus: Status = "pending";
const productId: ID = "PROD-001";
const numericId: ID = 12345;

// 関数での使用
function updateStatus(status: Status) {
  console.log(`ステータスを${status}に更新`);
}
```

## オブジェクト型の型エイリアス

```typescript
// オブジェクトの型エイリアス
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

// 使用例
const user: User = {
  id: 1,
  name: "太郎",
  email: "taro@example.com",
  isActive: true,
};
```

## 関数型の型エイリアス

```typescript
// 関数の型エイリアス
type Calculator = (a: number, b: number) => number;
type EventHandler = (event: string) => void;
type Validator<T> = (value: T) => boolean; // Tはジェネリクスといい、関数の実装時に型を自由に決定できる

// 使用例
const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;

const onClick: EventHandler = (event) => {
  console.log(`クリックイベント: ${event}`);
};

const isValidEmail: Validator<string> = (email) => {
  return email.includes("@");
};
```

## 配列とタプルの型エイリアス

```typescript
// 配列の型エイリアス
type NumberList = number[];
type UserList = User[];
type StringOrNumber = (string | number)[];

// タプルの型エイリアス
type Coordinate = [number, number]; // [x, y]
type RGB = [number, number, number]; // [red, green, blue]
type NameAndAge = [string, number];

// 使用例
const point: Coordinate = [10, 20];
const color: RGB = [255, 128, 0];
const person: NameAndAge = ["太郎", 25];
```

## 条件付き型とマップ型

```typescript
// 条件付き型
type NonNullable<T> = T extends null | undefined ? never : T;

// マップ型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 使用例
type SafeString = NonNullable<string | null>; // string
type ReadonlyUser = Readonly<User>; // Userのすべてのプロパティを読み取り専用にする
type PartialUser = Partial<User>; // Userのすべてのプロパティをオプショナルにする
```

## 型エイリアス vs インターフェース

```typescript
// 型エイリアス：ユニオン型、プリミティブ型、計算された型に適している
type Theme = "light" | "dark";
type EventType = "click" | "hover" | "focus";
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

// インターフェース：オブジェクトの形状の定義、継承に適している
interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  permissions: string[];
}
```

## 実践的な使用例

```typescript
// API レスポンスの型定義
type APIResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
};

type UserResponse = APIResponse<User>;
type ProductListResponse = APIResponse<Product[]>;

// エラーハンドリング
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

// 使用例
function fetchUser(id: number): Promise<Result<User>> {
  // 実装...
  return Promise.resolve({
    success: true,
    data: { id, name: "太郎", email: "taro@example.com", isActive: true },
  });
}
```
