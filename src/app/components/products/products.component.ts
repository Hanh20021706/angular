import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList!: IProduct[];
  constructor(private productServices: ProductService) {
    //  console.log(this.productServices.getProducts())
    this.showProducts();
  }

  ngOnInit(): void {}

  showProducts() {
    this.productServices.getProducts().subscribe((data) => {
      this.productList = data;
    });
  }

  onRemoveItem(id: number) {
      const confirm = window.confirm('ban co chac chan xoa khong ?');
      if(confirm){
        this.productServices.removeProduct(id).subscribe(() => {
            this.productList = this.productList.filter((item) => item.id !== id);
        })
      }
   
  }
}
