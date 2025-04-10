export class Product{
    private _productID: number;
    private _productTitle: string;
    private _prouctPrice: number;


    public get productID(): number {
        return this._productID;
    }
    public set productID(value: number) {
        this._productID = value;
    }

    public get productTitle(): string {
        return this._productTitle;
    }
    public set productTitle(value: string) {
        this._productTitle = value;
    }

    public get prouctPrice(): number {
        return this._prouctPrice;
    }
    public set prouctPrice(value: number) {
        this._prouctPrice = value;
    }

   constructor(productID: number, productTitle: string, prouctPrice: number) {
         this._productID = productID;
         this._productTitle = productTitle;
         this._prouctPrice = prouctPrice;
         
       }
       public printProduct(): string {
        return this._productTitle + " " + this._prouctPrice;
      }

   
}
