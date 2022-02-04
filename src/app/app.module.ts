import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemsComponent } from './core/productfeature/product-items/product-items.component';
import { ProductListingComponent } from './core/productfeature/product-listing/product-listing.component';
import { ProductFilterComponent } from './core/productfeature/product-filter/product-filter.component';
import { TestFromCliComponent } from './test-from-cli/test-from-cli.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductService } from './_services/product/product.services';
import { ProductDetailsComponent } from './core/productfeature/product-details/product-details.component';
import { ProductFormComponent } from './core/productfeature/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './shared/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemsComponent,
    ProductListingComponent,
    ProductFilterComponent,
    TestFromCliComponent,
    DropdownComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent,
    LoginComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
