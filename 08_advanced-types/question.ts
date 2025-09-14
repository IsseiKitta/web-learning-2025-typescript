/*

問題1

条件型を使った型操作を行ってください：

1. IsString 条件型を作成してください：
   - T が string型の場合は true を返す
   - そうでなければ false を返す

2. RemoveNull 条件型を作成してください：
   - T が null を含むユニオン型の場合、null を除去した型を返す
   - 例: RemoveNull<string | null> => string

3. 以下の型をテストしてください：
   ```
   type Test1 = IsString<string>;        // true
   type Test2 = IsString<number>;        // false
   type Test3 = RemoveNull<string | null>; // string
   type Test4 = RemoveNull<number>;       // number
   ```

4. テスト用の変数を作成してコンソールに型情報をコメントで記載してください

ヒント: TypeScript の型システムの応用例を調べてみましょう。

*/

/*

問題2

マッピング型を使った型変換を行ってください：

1. User インターフェースを作成してください：
   ```
   interface User {
     id: number;
     name: string;
     email: string;
     age: number;
   }
   ```

2. Partial 型（すべてのプロパティをオプショナルにする）を自作してください：
   - MyPartial<T> という型を作成
   - in keyof を使用してマッピング型を実装

3. Required 型（すべてのプロパティを必須にする）を自作してください：
   - MyRequired<T> という型を作成

4. 以下の型を使用して変数を作成してください：
   ```
   type PartialUser = MyPartial<User>;
   type RequiredUser = MyRequired<User>;
   ```

5. それぞれの型で変数を作成し、プロパティの違いを確認してください

*/

/*

問題3

テンプレートリテラル型を使ってください：

1. EventType テンプレートリテラル型を作成してください：
   - "on" + Capitalize<イベント名> の形式
   - 例: "click" => "onClick", "focus" => "onFocus"

2. CreateEventHandler 型を作成してください：
   - イベント名を受け取り、対応するハンドラー関数の型を生成
   - 例: CreateEventHandler<"click"> => { onClick: () => void }

3. 以下のイベント名でテストしてください：
   - "click", "focus", "blur", "submit"

4. 各イベントハンドラーを持つオブジェクトを作成し、コンソールに出力してください

*/