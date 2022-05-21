import { Component } from '@angular/core';
import { IProduct } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * các phương thức khai báo
 * các biến lớp thuộc các lớn trên 
 * lặp các phần tử dùng ngFor (ngFor="let newname of table  bên trong thẻ {{new name}}")
 * <div *ngFor='let color of colors'> {{color}} </div>
 * lặp 1 mảng 
 * <div *ngFor='let color of colors; let i=index'> color {{ i }} is {{ color }} </div>
 */

export class AppComponent {
  // myName = 'hanh';
  title = 'my-app';

  // productName : string = "Product A";
  // productPrice : number = 200;
  // productStatus : boolean = true;


  // productInfor : {id: number, name : string, price : number} = {
  //   id: 1,
  //   name : "Product B",
  //   price : 3000
  // };

  // productList : IProduct[] =[
   
  // ];

  // onHandleClick() {
  //   console.log('hello')
  //   this.productStatus = !this.productStatus
  // };

//   onDelete(id: number) {
//     this.productList = this.productList.filter(product => product.id !==id)
//   }

//   onHandleKeyPress(event : any) {
//     this.title = event.target.value
//   }
//   onHandleAdd(product: any){
// this.productList.push(product)
//   }

 
}