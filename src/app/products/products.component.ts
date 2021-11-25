import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Product } from './Product';
import {Electronics} from '../home/Electronics';
import {ElecronicsService} from '../Services/electronics.service'
import { TV } from '../items/filterbytitle';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService , private ElecronicsService: ElecronicsService,private activateRoute : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getElectroData();

    // this.activateRoute.paramMap.subscribe((param)=>{
      
    //   this.istrforid = Number(param.get('id'));
    //   this.istrforName = String(param.get('ProductName'));
    //   if(this.istrforid>0 || this.istrforName!=""){
    //     console.log("hey");
    //     this.displayBasedOnName();
    //     this.displayBasedOnId();
    //   }
    //   else{
    //     this.GetData();
    //   }
    //});
    //this.GetData();
    
  }
  
  arrTV: TV[]=[];
  // displaybasedonTv(){
    
  // }

  arrElectronics: Electronics[] = [];
  search(){
    if(this.Title!=""){
      this.arrElectronics = this.arrElectronics.filter(res=>{
        return res.Title.toLocaleLowerCase().match(this.Title.toLocaleLowerCase())
      })
    }else if(this.Title==""){
      this.ngOnInit();
    }
  
}


  getElectroData() {
    this.ElecronicsService.getAllElectronics().subscribe(
      (data) => {
        this.arrElectronics = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

 Title="";


  arrProducts :Product[]=[];


// DisplayAll(){
//   this.();
// }


// GetData(){
//    this.productService.getAllProducts().subscribe((data)=>{
//       this.arrProducts = data;
//     },(error)=>{
//       console.log(error);
//   })
// }

//istrforid=0;

// RouteBasedOnId(){
//   console.log(this.istrforid)
//   // this.arrProducts = this.productService.getproductbyid(this.istrforid);
//   let str = "";
//   if(this.istrforid>0){
//     str = "products1/"+this.istrforid;
//   }
//   this.router.navigate([str]);
// }

istrforName="";

// RouteBasedOnName(){
//   console.log(this.istrforName)
//   // this.arrProducts = this.productService.getproductbyid(this.istrforid);
//   let str = "";
//   if(this.istrforName!=""){
//     str = "products2/"+this.istrforName;
//   }
//   this.router.navigate([str]);
// }


// displayBasedOnName(){
//   console.log(this.istrforName+"Route id")
//  // this.arrProducts = this.productService.getproductbyid(this.istrforid);
 
// this.productService.getproductbyName(this.istrforName).subscribe((data)=>{
//    this.arrProducts=data;
//    console.log(this.arrProducts);
//  });
// console.log(this.arrProducts);

// }



// displayBasedOnId(){
//    console.log(this.istrforid+"Route id")
//   // this.arrProducts = this.productService.getproductbyid(this.istrforid);
  
//  this.productService.getproductbyid(this.istrforid).subscribe((data)=>{
//     this.arrProducts=data;
//     console.log(this.arrProducts);
//   });
// console.log(this.arrProducts);

// }

}
