"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsProduct, total) {
        this._itemsProduct = new Array;
        this._itemsProduct = itemsProduct;
        this._total = total;
    }
    Object.defineProperty(ShoppingCart.prototype, "total", {
        get: function () {
            return this._total;
        },
        set: function (value) {
            this._total = value;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCart.prototype.addItem = function (item) {
        if (!this._itemsProduct.some(function (existingItem) { return existingItem.itemProduct.productID === item.itemProduct.productID; })) {
            this._itemsProduct.push(item);
            this._total += item.quantity;
        }
        else {
            item.addProduct();
        }
    };
    ShoppingCart.prototype.removeItem = function (index) {
        if (index >= 0 && index < this._itemsProduct.length) {
            this.total -= this._itemsProduct[index].quantity;
            this._itemsProduct.splice(index, 1);
        }
    };
    ShoppingCart.prototype.getItems = function () {
        return this._itemsProduct;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
