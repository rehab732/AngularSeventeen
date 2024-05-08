import { Component } from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [
    ProductListComponent,
    FormsModule
  ],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent {
  categoryList:ICategory[];
  selectedCategory:number = 0;
  orderTotalPrice:number=0;

  constructor(){
    this.categoryList = [
      { id: 1, name: 'Valeo' },
      { id: 2, name: 'Front' },
      { id: 3, name: 'Back' },
      { id: 4, name: 'Valeo' },
    ];
  }

}
