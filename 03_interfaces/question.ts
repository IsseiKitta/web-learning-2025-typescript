/*

問題1

ユーザー情報を管理するインターフェースを作成してください：

1. User という interface を定義し、以下のプロパティを持たせてください：
   - id（number型、必須）
   - name（string型、必須）
   - email（string型、必須）
   - age（number型、オプショナル）

2. User型を使って、以下のオブジェクトを作成してください：
   - user1: id=1, name="田中", email="tanaka@example.com"
   - user2: id=2, name="佐藤", email="sato@example.com", age=30

3. それぞれのユーザー情報をコンソールに出力してください

ヒント: `interface` を使ってオブジェクトの構造を定義しよう

*/

/*

問題2

商品情報を管理するインターフェースを作成してください：

1. Product という interface を定義し、以下のプロパティを持たせてください：
   - id（number型、必須）
   - name（string型、必須）
   - price（number型、必須）
   - category（string型、必須）
   - inStock（boolean型、必須）

2. Product型を使って商品オブジェクトを2つ作成してください

3. 在庫がある商品のみをフィルタリングして表示する関数 showAvailableProducts を作成してください
   - 引数: Product[] (商品の配列)
   - 戻り値: void
   - 在庫がある商品の名前と価格をコンソールに出力

4. 作成した関数を実行してテストしてください

ヒント: 配列のforEachメソッドとfilterメソッドを使おう。inStockを条件として使うと楽
> https://typescriptbook.jp/reference/values-types-variables/array/how-to-loop-an-array
> https://typescriptbook.jp/reference/values-types-variables/array/array-operations

*/
