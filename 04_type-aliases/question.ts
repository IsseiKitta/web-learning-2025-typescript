/*

問題1

型エイリアスを使って複数の型をまとめてください：

1. Status という型エイリアスを作成し、"pending" | "completed" | "canceled" のユニオン型にしてください

2. Task という型エイリアスを作成し、以下のプロパティを持たせてください：
   - id（number型）
   - title（string型）
   - status（Status型）
   - dueDate（Date型、オプショナル）

3. Task型を使ってタスクオブジェクトを3つ作成してください（それぞれ異なるstatusを持つ）

4. タスクの配列を受け取り、完了済みのタスクのみを返す関数 getCompletedTasks を作成してください

ヒント: `type` を使うと複雑な型も簡単に再利用できます。

*/

/*

問題2

APIレスポンスの型を定義してください：

1. ApiResponse という型エイリアスを作成し、以下の構造にしてください：
   - success（boolean型）
   - data（any型、オプショナル）
   - error（string型、オプショナル）

2. UserData という型エイリアスを作成し、以下のプロパティを持たせてください：
   - userId（number型）
   - username（string型）
   - lastLogin（Date型）

3. ApiResponse<UserData> のような形で使えるように、ApiResponse をジェネリック型に変更してください

4. 成功とエラーの両方のレスポンス例を作成し、コンソールに出力してください

*/