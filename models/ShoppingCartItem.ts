import { Product } from "./Product";

export class ShoppingCartItem {
    private _itemProduct: Product;
    private _quantity: number;

    public get itemProduct(): Product {
        return this._itemProduct;
    }
    public set itemProduct(value: Product) {
        this._itemProduct = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

    constructor(itemProduct: Product, quantity: number = 1) {
        this._itemProduct = itemProduct;
        this._quantity = quantity;
        
    }

    public addProduct() : number{
        this._quantity += 1;
        return this._quantity

    }
    
    public substractProduct() {
        this._quantity --
        return this._quantity
    }

    public displayProductItem(): string {
        return this._itemProduct.printProduct()
    }



      
   
}