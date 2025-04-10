import { Product } from './Product';
import { ShoppingCartItem } from './ShoppingCartItem';
import { ShoppingCart } from './ShoppingCart';
const p1 = new Product(1, "Souris", 100);
const p2 = new Product(2, "Clavier", 200);

const item1 = new ShoppingCartItem(p1, 0);
const item2 = new ShoppingCartItem(p2, 0);
// console.log(p1.productTitle)
// console.log(p1.prouctPrice)
// console.log(p2.productTitle)
// console.log(p2.prouctPrice)
console.log(p1.printProduct());
console.log(item2.substractProduct())

const card = new ShoppingCart([item1, item2] , 3)
console.log(card.removeItem(2))