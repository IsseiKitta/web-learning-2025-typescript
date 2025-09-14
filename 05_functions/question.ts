/*

問題1

関数式とアロー関数の違いを実装して比較してください：

1. 以下の2つの方法で同じ機能の関数を作成してください：
   - add1: 関数式（function キーワード）で2つの数値を足す関数
   - add2: アロー関数で2つの数値を足す関数

2. それぞれの関数で add(5, 3) を実行し、結果をコンソールに出力してください

3. コンソールに関数の名前（name プロパティ）を出力して違いを確認してください

ヒント:
- 関数式は function キーワードで定義します。
- アロー関数は `=>` で定義します。
- 詳しくは [Qiita: 関数宣言・関数式・アロー関数の違い](https://qiita.com/suin/items/a44825d253d023e31e4d) を参照してください。

*/

/*

問題2

this の挙動の違いを確認してください：

1. 以下のオブジェクトを作成してください：
   ```
   const calculator = {
     value: 10,
     addFunction: function(num: number) {
       return this.value + num;
     },
     addArrow: (num: number) => {
       return this.value + num; // このthisの挙動に注目
     }
   };
   ```

2. calculator.addFunction(5) と calculator.addArrow(5) を実行し、結果を比較してください

3. コンソールに結果を出力し、this の挙動の違いを確認してください

> https://qiita.com/takkyun/items/c6e2f2cf25327299cf03
> https://qiita.com/suin/items/a44825d253d023e31e4d

*/
