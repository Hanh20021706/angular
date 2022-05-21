import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!:any;

  // productDetail!:IProduct;
    // injecttable  (khoi tao va dinh kem )
  constructor(private productServices: ProductService) {
   console.log(this.productServices.getProducts())
    this.showProducts();
   }

  ngOnInit(): void {
  }

  showProducts(){
    this.productServices.getProducts().subscribe(data => {
      this.productList = data

    })
  }

  // showitem(id: number) {
  //   this.productDetail = this.productList.find(item => item.id === id)!;
  // }





}
