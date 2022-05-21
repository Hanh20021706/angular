import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ClientComponent } from './layout/client/client.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  // {path : "" , component: AppComponent},
  // {path: "about", component:AboutComponent},
  // {path:"products", component:ProductsComponent},
  // {path: "signup" , component:SignupComponent},
  // {path: "signin" , component:SigninComponent},
  {
    path: "" , component : ClientComponent, children:[
      {
        path: "",component: HomePageComponent
      },
      {
        path: "signin", component:SigninComponent
      },
      {
        path: "signup", component:SignupComponent
      },
      {
        path: "product", component:ProductPageComponent
      },
      // {
      //   path: "product/id", component: ProductDetailComponent
      // },
      {
        path: "about", component:AboutComponent
      },

    ]
  },
  {
    path: "admin" , component: AdminComponent , children : [
      {
        path: "product", children: [
          {path: "" , component: ProductsComponent},
          {path: "add" , component: ProductAddComponent},
          

        ]

      },
      {
        path : "product/id" , component  : ProductDetailComponent
      }
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
