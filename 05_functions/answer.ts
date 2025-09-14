// Q1
const add1 = function (a: number, b: number): number {
  return a + b;
};

const add2 = (a: number, b: number): number => {
  return a + b;
};

console.log("add1(5, 3):", add1(5, 3));
console.log("add2(5, 3):", add2(5, 3));

console.log("add1 name:", add1.name);
console.log("add2 name:", add2.name);

// Q2
const calculator = {
  value: 10,
  addFunction: function (num: number) {
    return this.value + num;
  },
  addArrow: (num: number) => {
    // thisは外部スコープ（グローバルオブジェクトまたはundefined）を参照するため、
    // calculator.valueにアクセスできない
    return this.value + num;
  },
};

console.log("addFunction(5):", calculator.addFunction(5)); // 15
console.log("addArrow(5):", calculator.addArrow(5)); // NaN (this.value is undefined)
