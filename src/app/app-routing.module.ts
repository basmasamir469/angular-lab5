import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/productfeature/product-details/product-details.component';
import { ProductFormComponent } from './core/productfeature/product-form/product-form.component';
import { ProductListingComponent } from './core/productfeature/product-listing/product-listing.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:ProductListingComponent},
  {path:'home', redirectTo:'',pathMatch:'full'},
  {path: 'product',children:[
  {path:'listing', component:ProductListingComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'add',component:ProductFormComponent},
  {path:'edit/:id',component:ProductFormComponent},
  {path:'delete/:id',component:ProductFormComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
