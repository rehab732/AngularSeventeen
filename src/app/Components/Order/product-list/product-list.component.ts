import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Pipe,
  SimpleChanges,
  input,
} from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../Models/icategory';
import { NgStyle, NgClass, CurrencyPipe, DatePipe } from '@angular/common';
import { LightBoxDirective } from '../../../Directives/light-box.directive';
import { USDTOEGPPipe } from '../../../Pipes/usdtoegp.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FormsModule,
    NgStyle,
    NgClass,
    LightBoxDirective,
    CurrencyPipe,
    DatePipe,
    USDTOEGPPipe,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnChanges {
  @Input() sentCategoryID: number = 0;
  prodList: IProduct[];
  prodListOfCat: IProduct[];
  orderTotalPrice = 0;
  onSale: boolean = true;
  @Output()
  totalPriceChanched:EventEmitter<number>;
  orderDate: Date;
  constructor() {
    this.prodListOfCat = [];
    this.orderDate = new Date();
    this.prodList = [
      {
        id: 1,
        name: 'Lenovo Laptop',
        price: 20000,
        quantity: 50,
        categoryId: 1,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 2,
        name: 'Lenovo Laptop',
        price: 316665,
        quantity: 0,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 3,
        name: 'Lenovo Laptop',
        price: 2145646,
        quantity: 1,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 4,
        name: 'Lenovo Laptop',
        price: 111246000,
        quantity: 10,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 5,
        name: 'Lenovo Laptop',
        price: 44450000,
        quantity: 2,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
      {
        id: 6,
        name: 'Lenovo Laptop',
        price: 78822000,
        quantity: 16,
        categoryId: 100,
        imgURL: 'https://fakeimg.pl/200x100',
      },
    ];
    this.prodListOfCat = this.prodList;
    this.totalPriceChanched=new EventEmitter<number>();
  }
  ngOnChanges(): void {
    this.filterProductsByCatID();
  }
  Buy(price: number, count: any) {
    let itemsCount: number;
    itemsCount = +count;
    this.orderTotalPrice += itemsCount * price;
    //execute event
    this.totalPriceChanched.emit(this.orderTotalPrice)
  }

  private filterProductsByCatID() {
    if (this.sentCategoryID == 0) {
      this.prodListOfCat = this.prodList;
    } else {
      this.prodListOfCat = this.prodList.filter(
        (pro) => pro.categoryId == this.sentCategoryID
      );
    }
  }
}
