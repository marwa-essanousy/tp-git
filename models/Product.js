"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productID, productTitle, prouctPrice) {
        this._productID = productID;
        this._productTitle = productTitle;
        this._prouctPrice = prouctPrice;
    }
    Object.defineProperty(Product.prototype, "productID", {
        get: function () {
            return this._productID;
        },
        set: function (value) {
            this._productID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productTitle", {
        get: function () {
            return this._productTitle;
        },
        set: function (value) {
            this._productTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "prouctPrice", {
        get: function () {
            return this._prouctPrice;
        },
        set: function (value) {
            this._prouctPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.printProduct = function () {
        return this._productTitle + " " + this._prouctPrice;
    };
    return Product;
}());
exports.Product = Product;
