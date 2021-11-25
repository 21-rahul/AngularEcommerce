import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Product} from '../products/Product';
import {Dash} from '../dashboard/dash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 URL="http://localhost:3000/Product"
 url = "http://localhost:3000/signup"
  constructor( private http : HttpClient) { 

  }

  arrUsers:Dash[]=[];
  
  arrProduct:Product[] =[];

  getAllProducts():Observable<any>{
    return this.http.get(this.URL);
  }

  getAllUsers():Observable<any>{
    return this.http.get(this.url);
  }

  getproductbyid(id:number):Observable<any>{
    console.log(this.arrProduct);

    let customUrl = this.URL+"?id="+id;
  //  this.arrProduct.filter((prod)=>prod.id==id); 
  return this.http.get(customUrl);
  }


  getproductbyName(ProductName:string):Observable<any>{
    console.log(this.arrProduct);
  
    let customUrl = this.URL+"?ProductName="+ProductName;
  //  this.arrProduct.filter((prod)=>prod.id==id); 
  return this.http.get(customUrl);
  }
}
