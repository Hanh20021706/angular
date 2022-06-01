import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  product:IProduct = {
      name: "",
      price: 0,
      status: true
  }
  constructor(
    private productServices: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productServices.getProduct(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  onSubmit() {
    const id = + this.route.snapshot.paramMap.get('id')!;
    if(id){
        this.productServices.updateProduct(this.product).subscribe(data => {
            setTimeout (() => {
                this.router.navigateByUrl('/products')
            }, 2000)
        })
    }

    this.productServices.createProduct(this.product).subscribe(data => {
        setTimeout(() => {
            this.router.navigateByUrl('/products')
        },2000)
    })

    // this.productServices.createProduct(this.product);
  }
}
