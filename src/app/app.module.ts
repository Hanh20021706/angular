import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
