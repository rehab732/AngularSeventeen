import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
export class OrderMasterComponent implements AfterViewInit{
  categoryList:ICategory[];
  selectedCategory:number = 0;
  orderTotalPrice:number=0;
  @ViewChild('ClinetName')
clientNameInp!:ElementRef;

@ViewChild(ProductListComponent) prdListComponent!:ProductListComponent;
  constructor(){
    this.categoryList = [
      { id: 1, name: 'Valeo' },
      { id: 2, name: 'Front' },
      { id: 3, name: 'Back' },
      { id: 4, name: 'Valeo' },
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInp.nativeElement.value="Your Name Here";
    this.clientNameInp.nativeElement.style.border="4px solid red";
console.log("print here for test");
    console.log(this.prdListComponent.prodList);
  }

  onTotalPriceChange(totalPrice:number){
this.orderTotalPrice=totalPrice;
  }

}
