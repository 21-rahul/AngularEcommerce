import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import {Dash} from './dash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productService : ProductService , activateRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.getElectroData();
  }


  arrUsers:Dash[]=[];

  getElectroData() {
    this.productService.getAllUsers().subscribe(
      (data) => {
        this.arrUsers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
