import { Component, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  storeInfo:StoreData;
  isShown:boolean=true;
  constructor(){
    this.storeInfo= new StoreData("ITI","https://picsum.photos/400/300",['Smart','Alex','Banha']);
  }
  tapToToggel(){
    this.isShown=!this.isShown;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
