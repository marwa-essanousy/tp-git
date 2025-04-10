import { ShoppingCartItem } from "./ShoppingCartItem";

export class ShoppingCart {
    private _itemsProduct: Array<ShoppingCartItem> =new  Array<ShoppingCartItem> ;
    private _total: number;

    
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }

    constructor(itemsProduct:  Array<ShoppingCartItem>, total: number) {
        this._itemsProduct = itemsProduct;
        this._total = total;
        
    }

    public addItem(item: ShoppingCartItem): void {
        if (!this._itemsProduct.some(existingItem => existingItem.itemProduct.productID === item.itemProduct.productID)){
            this._itemsProduct.push(item)
            this._total += item.quantity
        }
        else {
            item.addProduct()
        }

    }
    
    public removeItem(index: number ): void  {
        if (index >= 0 && index < this._itemsProduct.length){
            this.total -= this._itemsProduct[index].quantity
            this._itemsProduct.splice(index,1);

        }
        
    }

    public getItems(): Array<ShoppingCartItem> {
        return this._itemsProduct
    }

      
   
}