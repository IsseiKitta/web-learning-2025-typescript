// Q1
type IsString<T> = T extends string ? true : false;

type RemoveNull<T> = T extends null ? never : T;

// テスト
type Test1 = IsString<string>;        // true
type Test2 = IsString<number>;        // false
type Test3 = RemoveNull<string | null>; // string
type Test4 = RemoveNull<number>;       // number

const test1: Test1 = true;      // Test1 は true 型
const test2: Test2 = false;     // Test2 は false 型
const test3: Test3 = "hello";   // Test3 は string 型
const test4: Test4 = 42;        // Test4 は number 型

console.log("Test1 (IsString<string>):", test1);
console.log("Test2 (IsString<number>):", test2);
console.log("Test3 (RemoveNull<string | null>):", test3);
console.log("Test4 (RemoveNull<number>):", test4);

// Q2
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

type PartialUser = MyPartial<User>;
type RequiredUser = MyRequired<User>;

const partialUser: PartialUser = {
  name: "太郎"
  // 他のプロパティはオプショナル
};

const requiredUser: RequiredUser = {
  id: 1,
  name: "花子",
  email: "hanako@example.com",
  age: 25
  // すべてのプロパティが必須
};

console.log("Partial User:", partialUser);
console.log("Required User:", requiredUser);

// Q3
type EventType<T extends string> = `on${Capitalize<T>}`;

type CreateEventHandler<T extends string> = {
  [K in EventType<T>]: () => void;
};

type ClickHandler = CreateEventHandler<"click">;      // { onClick: () => void }
type FocusHandler = CreateEventHandler<"focus">;      // { onFocus: () => void }
type BlurHandler = CreateEventHandler<"blur">;        // { onBlur: () => void }
type SubmitHandler = CreateEventHandler<"submit">;    // { onSubmit: () => void }

const clickHandler: ClickHandler = {
  onClick: () => console.log("Clicked!")
};

const focusHandler: FocusHandler = {
  onFocus: () => console.log("Focused!")
};

const blurHandler: BlurHandler = {
  onBlur: () => console.log("Blurred!")
};

const submitHandler: SubmitHandler = {
  onSubmit: () => console.log("Submitted!")
};

console.log("Click handler:", clickHandler);
console.log("Focus handler:", focusHandler);
console.log("Blur handler:", blurHandler);
console.log("Submit handler:", submitHandler);