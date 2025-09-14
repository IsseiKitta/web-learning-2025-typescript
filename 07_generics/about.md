# ジェネリックス

ジェネリックスは TypeScript の強力な機能の一つで、型安全性を保ちながら再利用可能なコードを作成できます。

## 基本的なジェネリック関数

```typescript
// ジェネリックでない版本（問題あり）
function getFirstNumber(items: number[]): number | undefined {
    return items[0];
}

function getFirstString(items: string[]): string | undefined {
    return items[0];
}

// ジェネリック版本（解決策）
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

// 使用例
const numbers = [1, 2, 3];
const strings = ["apple", "banana", "cherry"];
const booleans = [true, false, true];

const firstNumber = getFirst(numbers); // number | undefined
const firstString = getFirst(strings); // string | undefined
const firstBoolean = getFirst(booleans); // boolean | undefined

// 明示的な型指定
const firstExplicit = getFirst<string>(["hello", "world"]); // string | undefined
```

## 複数の型パラメータ

```typescript
// 2つの型パラメータ
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const stringNumberPair = pair("hello", 42); // [string, number]
const booleanArrayPair = pair(true, [1, 2, 3]); // [boolean, number[]]

// マップ関数
function map<T, U>(items: T[], transform: (item: T) => U): U[] {
    return items.map(transform);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, x => x * 2); // number[]
const strings = map(numbers, x => x.toString()); // string[]
const booleans = map(numbers, x => x > 3); // boolean[]
```

## ジェネリック制約（Type Constraints）

```typescript
// 長さを持つオブジェクトのみを受け入れる
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

const stringLength = getLength("hello"); // 5
const arrayLength = getLength([1, 2, 3]); // 3
// const numberLength = getLength(42); // エラー: number には length プロパティがない

// オブジェクトのキーを制約する
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "太郎", age: 30, city: "東京" };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number
// const invalid = getProperty(person, "height"); // エラー: "height" は存在しない

// 数値型のみを受け入れる
function add<T extends number>(a: T, b: T): T {
    return (a + b) as T;
}
```

## ジェネリッククラス

```typescript
// ジェネリックなコンテナークラス
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    getAll(): T[] {
        return [...this.items];
    }
}

// 使用例
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // 3
console.log(numberStack.peek()); // 2

const stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.getAll()); // ["apple", "banana"]

// カスタム型での使用
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const taskStack = new Stack<Task>();
taskStack.push({ id: 1, title: "タスク1", completed: false });
taskStack.push({ id: 2, title: "タスク2", completed: true });
```

## ジェネリックインターフェース

```typescript
// ジェネリックインターフェース
interface Repository<T> {
    findById(id: number): T | undefined;
    findAll(): T[];
    create(item: T): T;
    update(id: number, item: Partial<T>): T | undefined;
    delete(id: number): boolean;
}

// ユーザーリポジトリの実装
interface User {
    id: number;
    name: string;
    email: string;
}

class UserRepository implements Repository<User> {
    private users: User[] = [];
    private nextId: number = 1;

    findById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    findAll(): User[] {
        return [...this.users];
    }

    create(user: User): User {
        const newUser = { ...user, id: this.nextId++ };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updates: Partial<User>): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return undefined;
        
        this.users[userIndex] = { ...this.users[userIndex], ...updates };
        return this.users[userIndex];
    }

    delete(id: number): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return false;
        
        this.users.splice(userIndex, 1);
        return true;
    }
}

// 使用例
const userRepo = new UserRepository();
const user = userRepo.create({ id: 0, name: "太郎", email: "taro@example.com" });
console.log(userRepo.findById(user.id));
```

## 条件付き型（Conditional Types）

```typescript
// 基本的な条件付き型
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>; // false
type Test3 = IsArray<boolean[]>; // true

// より複雑な例
type NonNullable<T> = T extends null | undefined ? never : T;

type SafeString = NonNullable<string | null>; // string
type SafeNumber = NonNullable<number | undefined>; // number

// 関数の戻り値型を抽出
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type StringFunc = () => string;
type NumberFunc = (x: number) => number;

type StringReturn = ReturnType<StringFunc>; // string
type NumberReturn = ReturnType<NumberFunc>; // number
```

## ユーティリティ型とジェネリックス

```typescript
// Partial<T>: すべてのプロパティをオプショナルに
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type PartialUser = Partial<User>;
// 等価な型:
// {
//     id?: number;
//     name?: string;
//     email?: string;
//     age?: number;
// }

function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

// Pick<T, K>: 指定したプロパティのみを取り出し
type UserSummary = Pick<User, "id" | "name">;
// 等価な型:
// {
//     id: number;
//     name: string;
// }

// Omit<T, K>: 指定したプロパティを除外
type UserWithoutId = Omit<User, "id">;
// 等価な型:
// {
//     name: string;
//     email: string;
//     age: number;
// }

// Record<K, T>: キーと値の型を指定してオブジェクト型を作成
type UserRoles = Record<string, boolean>;
// 等価な型:
// {
//     [key: string]: boolean;
// }

const permissions: UserRoles = {
    canRead: true,
    canWrite: false,
    canDelete: true
};
```

## 実践的な例：APIレスポンスの型安全性

```typescript
// APIレスポンスのジェネリック型
interface APIResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    timestamp: string;
}

// 異なるデータ型での使用
interface Product {
    id: number;
    name: string;
    price: number;
}

interface Order {
    id: string;
    userId: number;
    products: Product[];
    total: number;
}

// API関数
async function fetchData<T>(url: string): Promise<APIResponse<T>> {
    const response = await fetch(url);
    const data = await response.json();
    return {
        data,
        success: response.ok,
        message: response.ok ? undefined : "API Error",
        timestamp: new Date().toISOString()
    };
}

// 使用例
async function example() {
    const productResponse = await fetchData<Product>("/api/products/1");
    if (productResponse.success) {
        console.log(productResponse.data.name); // 型安全
    }
    
    const orderResponse = await fetchData<Order[]>("/api/orders");
    if (orderResponse.success) {
        orderResponse.data.forEach(order => {
            console.log(`Order ${order.id}: $${order.total}`);
        });
    }
}
```