# 発展的な型

TypeScript の高度な型システムを活用して、より柔軟で安全なコードを書くことができます。

## ユニオン型（Union Types）

```typescript
// 基本的なユニオン型
type StringOrNumber = string | number;
type Status = "loading" | "success" | "error";

function formatId(id: StringOrNumber): string {
    return `ID: ${id}`;
}

formatId(123); // "ID: 123"
formatId("ABC"); // "ID: ABC"

// 型ガードでの絞り込み
function processValue(value: string | number | boolean) {
    if (typeof value === "string") {
        // このブロックでは value は string 型
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        // このブロックでは value は number 型
        console.log(value.toFixed(2));
    } else {
        // このブロックでは value は boolean 型
        console.log(value ? "true" : "false");
    }
}
```

## インターセクション型（Intersection Types）

```typescript
// インターフェースの結合
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    department: string;
    salary: number;
}

// インターセクション型
type PersonEmployee = Person & Employee;

const worker: PersonEmployee = {
    name: "太郎",
    age: 30,
    employeeId: "EMP001",
    department: "開発部",
    salary: 500000
};

// 型と型の結合
type Timestamped<T> = T & {
    createdAt: Date;
    updatedAt: Date;
};

type TimestampedUser = Timestamped<Person>;

const user: TimestampedUser = {
    name: "花子",
    age: 25,
    createdAt: new Date(),
    updatedAt: new Date()
};
```

## リテラル型（Literal Types）

```typescript
// 文字列リテラル型
type Direction = "up" | "down" | "left" | "right";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("up"); // OK
// move("forward"); // エラー: "forward" は Direction 型ではない

// 数値リテラル型
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}

// オブジェクトリテラル型
type Config = {
    readonly apiUrl: "https://api.example.com";
    readonly version: "1.0";
    timeout: number;
};
```

## Mapped Types（マップ型）

```typescript
// 既存の型をベースに新しい型を作成
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

// すべてのプロパティをオプショナルに
type PartialUser = {
    [K in keyof User]?: User[K];
};

// すべてのプロパティを読み取り専用に
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

// すべてのプロパティを文字列型に
type StringifiedUser = {
    [K in keyof User]: string;
};

// 条件付き Mapped Types
type NonNullableUser = {
    [K in keyof User]: NonNullable<User[K]>;
};

// カスタム Mapped Type
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// 等価な型:
// {
//     getId: () => number;
//     getName: () => string;
//     getEmail: () => string;
//     getIsActive: () => boolean;
// }
```

## 条件付き型（Conditional Types）

```typescript
// 基本的な条件付き型
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// より実用的な例
type NonNullable<T> = T extends null | undefined ? never : T;

type SafeString = NonNullable<string | null>; // string
type SafeNumber = NonNullable<number | undefined>; // number

// 関数の戻り値型を抽出
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type StringFunction = () => string;
type GetStringReturn = ReturnType<StringFunction>; // string

// 配列の要素型を抽出
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type StringArray = string[];
type ElementType = ArrayElement<StringArray>; // string

// 条件付き型での分岐処理
type ToArray<T> = T extends any[] ? T : T[];

type Result1 = ToArray<string>; // string[]
type Result2 = ToArray<number[]>; // number[]
```

## Template Literal Types

```typescript
// テンプレートリテラル型
type Greeting = `Hello, ${string}!`;

const greeting1: Greeting = "Hello, World!"; // OK
const greeting2: Greeting = "Hello, TypeScript!"; // OK
// const greeting3: Greeting = "Hi there!"; // エラー

// ユニオン型と組み合わせ
type Color = "red" | "green" | "blue";
type Size = "small" | "medium" | "large";
type Variant = `${Color}-${Size}`;

// "red-small" | "red-medium" | "red-large" | "green-small" | ... など

const variant: Variant = "red-small"; // OK
// const invalid: Variant = "red-extra-large"; // エラー

// API エンドポイントの型安全性
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiEndpoint = `/api/${string}`;
type ApiCall = `${HttpMethod} ${ApiEndpoint}`;

const validCall: ApiCall = "GET /api/users"; // OK
const validCall2: ApiCall = "POST /api/products"; // OK
// const invalidCall: ApiCall = "GET /users"; // エラー
```

## Utility Types（ユーティリティ型）

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

// Partial<T>: すべてのプロパティをオプショナルに
type PartialUser = Partial<User>;
const updateUser = (id: number, updates: PartialUser) => {
    // 部分更新が可能
};

// Required<T>: すべてのプロパティを必須に
type RequiredUser = Required<User>;

// Pick<T, K>: 指定したプロパティのみを抽出
type UserSummary = Pick<User, "id" | "name" | "email">;
const summary: UserSummary = {
    id: 1,
    name: "太郎",
    email: "taro@example.com"
};

// Omit<T, K>: 指定したプロパティを除外
type CreateUserRequest = Omit<User, "id">;
const newUser: CreateUserRequest = {
    name: "花子",
    email: "hanako@example.com",
    age: 25,
    isActive: true
};

// Record<K, T>: キーと値の型を指定してオブジェクト型を作成
type UserRoles = Record<number, string>; // { [userId: number]: role }
const roles: UserRoles = {
    1: "admin",
    2: "user",
    3: "moderator"
};

// Exclude<T, U>: T から U に該当する型を除外
type NonBooleanPrimitives = Exclude<string | number | boolean, boolean>; // string | number

// Extract<T, U>: T から U に該当する型のみを抽出
type BooleanOnly = Extract<string | number | boolean, boolean>; // boolean

// ReturnType<T>: 関数の戻り値の型を抽出
function getUser() {
    return { id: 1, name: "太郎" };
}
type GetUserReturn = ReturnType<typeof getUser>; // { id: number; name: string; }
```

## 型アサーション

```typescript
// 基本的な型アサーション
const userInput: unknown = JSON.parse('{"name": "太郎", "age": 30}');
const user = userInput as { name: string; age: number };

// Non-null assertion
function processUser(user?: User) {
    // user が undefined ではないことが確実な場合
    console.log(user!.name); // ! で null/undefined ではないことをアサート
}

// const assertion
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]; // "red" | "green" | "blue"

const config = {
    apiUrl: "https://api.example.com",
    version: "1.0",
    timeout: 5000
} as const;

type Config = typeof config;
// {
//     readonly apiUrl: "https://api.example.com";
//     readonly version: "1.0";
//     readonly timeout: 5000;
// }

// satisfies 演算子（TypeScript 4.9+）
type Colors = "red" | "green" | "blue";

const colorConfig = {
    primary: "red",
    secondary: "green",
    accent: "blue"
} satisfies Record<string, Colors>;

// colorConfig.でプロパティにアクセス可能、かつ型チェックも有効
```

## 実践的な例：状態管理

```typescript
// 状態管理の型安全性
type LoadingState = {
    status: "loading";
};

type SuccessState = {
    status: "success";
    data: any;
};

type ErrorState = {
    status: "error";
    error: string;
};

// 判別されたユニオン（Discriminated Union）
type AppState = LoadingState | SuccessState | ErrorState;

function handleState(state: AppState) {
    switch (state.status) {
        case "loading":
            console.log("読み込み中...");
            break;
        case "success":
            console.log("データ:", state.data); // state.data にアクセス可能
            break;
        case "error":
            console.log("エラー:", state.error); // state.error にアクセス可能
            break;
        default:
            // 全ケースを網羅していることを確認
            const exhaustiveCheck: never = state;
    }
}

// 非同期処理の型安全性
type AsyncResult<T, E = Error> = 
    | { success: true; data: T }
    | { success: false; error: E };

async function fetchUserSafely(id: number): Promise<AsyncResult<User>> {
    try {
        const user = await fetchUser(id);
        return { success: true, data: user };
    } catch (error) {
        return { success: false, error: error as Error };
    }
}

// 使用例
const result = await fetchUserSafely(1);
if (result.success) {
    console.log(result.data.name); // 型安全
} else {
    console.error(result.error.message); // 型安全
}
```