import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!:any;

  constructor(

    private router: ActivatedRoute,
    private productServices : ProductService
  ) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    this.productServices.getProduct(+id).subscribe(data => this.productDetail= data)
  }

  ngOnInit(): void {
  }

}
