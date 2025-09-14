// Q1
type Status = "pending" | "completed" | "canceled";

type Task = {
  id: number;
  title: string;
  status: Status;
  dueDate?: Date;
};

const task1: Task = {
  id: 1,
  title: "レポート作成",
  status: "pending",
  dueDate: new Date("2024-12-31")
};

const task2: Task = {
  id: 2,
  title: "ミーティング準備",
  status: "completed"
};

const task3: Task = {
  id: 3,
  title: "プレゼン資料",
  status: "canceled"
};

function getCompletedTasks(tasks: Task[]): Task[] {
  return tasks.filter(task => task.status === "completed");
}

console.log(getCompletedTasks([task1, task2, task3]));

// Q2
type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
};

type UserData = {
  userId: number;
  username: string;
  lastLogin: Date;
};

const successResponse: ApiResponse<UserData> = {
  success: true,
  data: {
    userId: 123,
    username: "john_doe",
    lastLogin: new Date()
  }
};

const errorResponse: ApiResponse = {
  success: false,
  error: "User not found"
};

console.log(successResponse);
console.log(errorResponse);