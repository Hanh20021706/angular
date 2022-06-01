import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
 
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutComponent },



  { path: "products", children:[
    {path: "" , redirectTo: 'list', pathMatch: 'full'},
    { path: "list", component: ProductsComponent },
    { path: "add", component: ProductAddComponent },
  { path: ":id", component: ProductDetailComponent },
  { path: "edit/:id", component: ProductAddComponent },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
