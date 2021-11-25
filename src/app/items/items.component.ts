import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import {ElecronicsService} from '../Services/electronics.service';
import { TV } from './filterbytitle'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  constructor(private ElecronicsService: ElecronicsService, private cartService : CartService ) { }

  ngOnInit(): void {
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.getAllProduct();
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


  arrTV : TV[]=[];

  getTVData() {
    this.ElecronicsService.getAllTV().subscribe(
      (data) => {
        console.log(data)
        this.arrTV = [...this.arrTV,...data];
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  getAllProduct(){
    this.ElecronicsService.getAllProduct().subscribe((data)=>{
      this.arrTV = data;
    })
  }

  getMobileData() {
    this.ElecronicsService.getAllMobile().subscribe(
      (data) => {
        console.log(data)
        this.arrTV = [...this.arrTV,...data];
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  getACData() {
    this.ElecronicsService.getAllAC().subscribe(
      (data) => {
        console.log(data)
        this.arrTV = [...this.arrTV,...data];
      },
      (error) => {
        console.log(error);
      }
    );
  } 


  getLaptopData() {
    this.ElecronicsService.getAllLaptop().subscribe(
      (data) => {
        console.log(data)
        this.arrTV = [...this.arrTV,...data];
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  istrTV :boolean = false;
  istrMobile:boolean = false;
  istrAc: boolean = false;
  istrlap: boolean = false;

  arr : TV[] = []  
  Checking(){
    //let arr: any[]=[]
    this.arrTV = []
    if(this.istrTV){
      console.log(this.arr)
      this.getTVData()
      
    }
    if(this.istrMobile){
      console.log(this.arr)
      this.getMobileData();
      
    }
     if(this.istrAc){
      console.log(this.arr)
      this.getACData();
      
    }
    if(this.istrlap){
      console.log(this.arr)
      this.getLaptopData();
      
    }
    console.log(this.arr)
    this.arrTV = this.arr
    if(!this.istrTV && !this.istrMobile && !this.istrAc && !this.istrlap){
      console.log(this.arr)
      this.getAllProduct();
    }
  }


  PriceLowtoHigh(){
    this.arrTV.sort((x,y)=>x.Price-y.Price)
  }

  PriceHighToLow(){
    this.arrTV.sort((x,y)=>y.Price-x.Price)
  }
}
