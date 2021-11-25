import { Component, OnInit } from '@angular/core';
import {Electronics} from './Electronics';
import {ElecronicsService} from '../Services/electronics.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ElecronicsService: ElecronicsService) { }

  ngOnInit(): void {
    this.getElectroData();
  }
  arrElectronics: Electronics[] = [];

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

}
