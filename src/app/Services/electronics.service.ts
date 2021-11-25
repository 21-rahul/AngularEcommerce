import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Electronics} from '../home/Electronics'
import { TV } from '../items/filterbytitle';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElecronicsService {

  url = 'http://localhost:3000/elecronics';
  constructor(private http: HttpClient) {}

   arrElectronics: Electronics[] = [];

   getAllElectronics(): Observable<any> {
    console.log(this.arrElectronics)
     return this.http.get(this.url);
   }
 

 url1 = 'http://localhost:3000/ALLProduct';

 getAllProducts(){
  return this.http.get<any>(this.url1)
  .pipe(map((res:any)=>{
    return res;
}))
}

   getAllProduct(): Observable<any> {
     return this.http.get(this.url1);
   }

   getAllTV(): Observable<any> {
    let customurl= this.url1+"?category=TV";
    return this.http.get(customurl);
  }

  getAllMobile(): Observable<any> {
    let customurl= this.url1+"?category=Mobile";
    return this.http.get(customurl);
  }

  getAllAC(): Observable<any> {
    let customurl= this.url1+"?category=AC";
    return this.http.get(customurl);
  }

  getAllLaptop(): Observable<any> {
    let customurl= this.url1+"?category=Laptop";
    return this.http.get(customurl);
  }

}
