import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  private prdList: IProduct[];
  constructor() {
    this.prdList = [
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
  }
  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductByID(prdID: number): IProduct | null {
    let foundProduct = this.prdList.find((product) => product.id == prdID);
    return foundProduct ? foundProduct : null;
  }

  getProductsByCatID(cID: number): IProduct[] {
    if (cID == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter((product) => product.categoryId == cID);
    }
  }
}
