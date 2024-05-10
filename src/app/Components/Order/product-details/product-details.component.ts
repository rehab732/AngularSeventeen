import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from '../../../Models/iproduct';
import { StaticProductService } from './../../../Services/static-product.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe, Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  recivedProductID: number = 4;
  myProduct: IProduct | null = null;
  productArrayIDS: number[] = [];
  constructor(
    private _staticProductService: StaticProductService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _router: Router
  ) {}
  ngOnInit(): void {
    // this.recivedProductID = Number(
    //   this._activatedRoute.snapshot.paramMap.get('pid')
    // );
    // this.myProduct = this._staticProductService.getProductByID(
    //   this.recivedProductID
    // );
    this.productArrayIDS = this._staticProductService.getProductsIDS();

    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.recivedProductID=Number(paramMap.get('pid'));
      this.myProduct=this._staticProductService.getProductByID(this.recivedProductID);
    });
  }
  goBack() {
    this._location.back();
  }
  goPrevious() {
    let currentIndex = this.productArrayIDS.findIndex(
      (ele, index) => ele == this.recivedProductID
    );
    let previousIndex;
    if (currentIndex > 0) {
    previousIndex=  this.productArrayIDS[currentIndex - 1];
      this._router.navigate(['/Products', previousIndex]);
    }
  }
  goNext() {
    let currentIndex = this.productArrayIDS.findIndex(
      (ele, index) => ele == this.recivedProductID
    );
    // console.log(currentIndex);
    let nextIndex;
    if (currentIndex < this.productArrayIDS.length) {
    nextIndex=  this.productArrayIDS[currentIndex + 1];

      this._router.navigate(['/Products', nextIndex]);
    }
  }
}
