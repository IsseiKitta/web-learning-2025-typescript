// Q1
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user1: User = {
  id: 1,
  name: "田中",
  email: "tanaka@example.com"
};

const user2: User = {
  id: 2,
  name: "佐藤",
  email: "sato@example.com",
  age: 30
};

console.log(user1);
console.log(user2);

// Q2
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const product1: Product = {
  id: 1,
  name: "ノートパソコン",
  price: 89800,
  category: "電子機器",
  inStock: true
};

const product2: Product = {
  id: 2,
  name: "マウス",
  price: 2980,
  category: "電子機器",
  inStock: false
};

function showAvailableProducts(products: Product[]): void {
  const availableProducts = products.filter(product => product.inStock);

  availableProducts.forEach(product => {
    console.log(`${product.name}: ¥${product.price}`);
  });
}

showAvailableProducts([product1, product2]);