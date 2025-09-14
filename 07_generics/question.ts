/*

問題1

ジェネリクスを使って型安全な配列操作関数を作成してください：

1. getFirst 関数を作成してください：
   - ジェネリック型 T を使用
   - 引数: T型の配列
   - 戻り値: T型またはundefined（配列が空の場合）
   - 配列の最初の要素を返す

2. getLast 関数を作成してください：
   - ジェネリック型 T を使用
   - 引数: T型の配列
   - 戻り値: T型またはundefined（配列が空の場合）
   - 配列の最後の要素を返す

3. 以下の配列で関数をテストしてください：
   - 数値配列: [1, 2, 3, 4, 5]
   - 文字列配列: ["apple", "banana", "orange"]
   - 空配列: []

4. 結果をコンソールに出力してください

ヒント: `<T>` を使うことで、さまざまな型に対応した関数が作れます。

*/

/*

問題2

ジェネリクスを使ったクラスを作成してください：

1. Stack クラスを作成してください：
   - ジェネリック型 T を使用
   - プライベートプロパティ: items（T型の配列）
   - メソッド: push(item: T) - アイテムを追加
   - メソッド: pop() - 最後のアイテムを削除して返す（T型またはundefined）
   - メソッド: peek() - 最後のアイテムを確認（T型またはundefined）
   - メソッド: isEmpty() - スタックが空かどうか確認（boolean）

2. 数値用のStackと文字列用のStackを作成してテストしてください：
   - 数値スタック: 1, 2, 3 を追加後、2回 pop
   - 文字列スタック: "hello", "world" を追加後、peek と pop を実行

3. 各操作の結果をコンソールに出力してください

*/

/*

問題3

制約付きジェネリクスを使ってください：

1. Identifiable インターフェースを作成してください：
   - id プロパティ（number型）

2. findById 関数を作成してください：
   - ジェネリック型 T extends Identifiable を使用
   - 引数: T型の配列、id（number型）
   - 戻り値: T型またはundefined
   - 指定されたidを持つオブジェクトを見つけて返す

3. 以下のオブジェクト配列で関数をテストしてください：
   ```
   const users = [
     { id: 1, name: "Alice", email: "alice@example.com" },
     { id: 2, name: "Bob", email: "bob@example.com" },
   ];

   const products = [
     { id: 101, name: "Laptop", price: 999 },
     { id: 102, name: "Mouse", price: 29 },
   ];
   ```

4. findById(users, 1) と findById(products, 102) の結果をコンソールに出力してください

*/