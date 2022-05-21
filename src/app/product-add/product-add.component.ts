import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Output() onAdd = new EventEmitter()
  product: {name: string, price : number} = {
    name: "",
    price: 0
  }
  constructor(private productServices : ProductService) {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    // ban giu lieu len app.component.ts
    // this.onAdd.emit(this.product)
    this.productServices.createProduct(this.product);
  }

}
