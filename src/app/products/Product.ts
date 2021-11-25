export class Product{
    id:number = 0;
    Amount:number = 0;
    ProductName:string ="";
    Quantity:number =0;

    constructor(id:number,Amount:number,ProductName:string,Quantity:number){
        this.id = id;
        this.Amount =Amount;
        this.ProductName= ProductName;
        this.Quantity = Quantity;
    }
}