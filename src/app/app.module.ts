import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderClientComponent } from './components/header-client/header-client.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ProductsComponent,
    NameComponent,
    ProductAddComponent,
    FooterComponent,
    HeaderAdminComponent,
    NavAdminComponent,
    SigninComponent,
    SignupComponent,
    ProductPageComponent,
    ClientComponent,
    AdminComponent,
    HomePageComponent,
    HeaderClientComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
