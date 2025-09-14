// Q1
const name = "Issei";

console.log(`Hello, ${name}`);

// Q2
type Profile = {
  name: string;
  email?: string;
  phone?: string;
};

const profile1: Profile = {
  name: "花子",
};

const profile2: Profile = {
  name: "太郎",
  email: "taro@example.com",
  phone: "123-4567-890",
};

console.log(profile1);
console.log(profile2);
