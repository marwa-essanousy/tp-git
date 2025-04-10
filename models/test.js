"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ShoppingCartItem_1 = require("./ShoppingCartItem");
var ShoppingCart_1 = require("./ShoppingCart");
var p1 = new Product_1.Product(1, "Souris", 100);
var p2 = new Product_1.Product(2, "Clavier", 200);
var item1 = new ShoppingCartItem_1.ShoppingCartItem(p1, 0);
var item2 = new ShoppingCartItem_1.ShoppingCartItem(p2, 0);
// console.log(p1.productTitle)
// console.log(p1.prouctPrice)
// console.log(p2.productTitle)
// console.log(p2.prouctPrice)
console.log(p1.printProduct());
console.log(item2.substractProduct());
var card = new ShoppingCart_1.ShoppingCart([item1, item2], 3);
console.log(card.removeItem(2));
