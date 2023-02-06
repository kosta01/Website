import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productList = [
  {id:1 , 
  name: 'Product 1',
  price: 100}
]

cartProductList = [];

addtoCart(product: any) {
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
