"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartItem = void 0;
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(itemProduct, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this._itemProduct = itemProduct;
        this._quantity = quantity;
    }
    Object.defineProperty(ShoppingCartItem.prototype, "itemProduct", {
        get: function () {
            return this._itemProduct;
        },
        set: function (value) {
            this._itemProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingCartItem.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingCartItem.prototype.addProduct = function () {
        this._quantity += 1;
        return this._quantity;
    };
    ShoppingCartItem.prototype.substractProduct = function () {
        this._quantity--;
        return this._quantity;
    };
    ShoppingCartItem.prototype.displayProductItem = function () {
        return this._itemProduct.printProduct();
    };
    return ShoppingCartItem;
}());
exports.ShoppingCartItem = ShoppingCartItem;
