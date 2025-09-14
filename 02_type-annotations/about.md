# 型注釈と型推論

TypeScript では型を明示的に指定する「型注釈」と、コンパイラが自動で型を決定する「型推論」があります。

## 型注釈（Type Annotations）

### 基本的な型注釈

```typescript
// 変数の型注釈
const name: string = "太郎";
const age: number = 25;
const isActive: boolean = true;

// 関数の型注釈
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// 関数の型注釈2
function add(a: number, b: number): number {
  return a + b;
}
```

### 配列の型注釈

```typescript
// 文字列の配列
const names: string[] = ["太郎", "花子", "次郎"];

// 数値の配列（別の書き方）
const scores: Array<number> = [85, 92, 78];

// 混合型の配列
const mixed: (string | number)[] = ["太郎", 25, "花子", 30];
```

### オブジェクトの型注釈

```typescript
// オブジェクトの型を直接定義
const user: {
  name: string;
  age: number;
  email?: string; // オプショナル
} = {
  name: "太郎",
  age: 25,
  // emailフィールドはなくてもいい
};
```

## 型推論（Type Inference）

TypeScript は多くの場合、型を自動で推論します

```typescript
// 型推論の例
const message = "Hello"; // string 型として推論
const count = 42; // number 型として推論
const isEnabled = true; // boolean 型として推論

// 配列の型推論
const numbers = [1, 2, 3]; // number[] として推論
const words = ["hello", "world"]; // string[] として推論

// 関数の戻り値の型推論
function double(x: number) {
  return x * 2; // 戻り値は number として推論
}
```

## いつ型注釈を使うべきか

### 型注釈が必要な場面

1. **関数の引数**

```typescript
function processUser(user: { name: string; age: number }) {
  // 引数には型注釈が必要
}
```

2. **変数を宣言した時点では値を代入しない場合**

```typescript
let data: string | null;
data = getData();
```

3. **複雑な型の場合**

```typescript
const config: {
  apiUrl: string;
  timeout: number;
  retries?: number;
} = getConfig();
```

### 型推論で十分な場面

```typescript
// 以下は型注釈不要（推論で十分）
const name = "太郎"; // string として推論
const items = [1, 2, 3]; // number[] として推論
const user = { name: "太郎", age: 25 }; // オブジェクト型として推論
```
