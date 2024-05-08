import { Component } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  categoryList:ICategory[];
  prodList: IProduct[] | null;
  orderTotalPrice = 0;
  selectedCategory=0;
  constructor() {
    this.categoryList=[
      {id:1,name:"Valeo"},
      {id:2,name:"Front"},
      {id:3,name:"Back"},
      {id:4,name:"Valeo"},
    ]
    this.prodList = [
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 100,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
    ];
  }
  Buy(price: number, count: any) {
    let itemsCount: number;
    itemsCount = +count;
    this.orderTotalPrice = itemsCount * price;
  }
}
