import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/Product/category.model';
import { PaymentType } from 'src/app/_models/Product/payment-type.model';
import { Product } from 'src/app/_models/Product/product.model';
import { Tag } from 'src/app/_models/Product/tag.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { ProductService } from 'src/app/_services/product/product.services';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
   paymenttypes:PaymentType[]=[]
   categories:Category[]=[]
   tags:Tag[]=[];
   product !:Product;
   editmode=false;
   deletemode=false;
  constructor(private productservice:ProductService,private router:Router,private paymentTypesService:PaymentTypeService,
    private categoryService:CategoryService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('params',this.activatedroute.snapshot.params)
    // console.log('url',this.activatedroute.snapshot.url)
    if(this.activatedroute.snapshot.url[0].path=='edit'){
          this.editmode=true;
    }
    if(this.activatedroute.snapshot.url[0].path=='delete'){
      this.deletemode=true
      
}
if(this.deletemode){

  this.deleteproduct();
}
  
    if(this.editmode){
      this.getproductbyid()
    }
    this.getallproductTypes();
    this.getallcategories();
    this.categoryService.getallcategories().subscribe(
      (res)=>{
        this.categories=res;
        console.log(res)
      },
      (err)=>{},
      ()=>{}
      )
  }
  getproductbyid(){
   const id= +this.activatedroute.snapshot.params['id'];
   
   this.product=this.productservice.getProductById(id)!;
   console.log(this.product)
 
  }
  deleteproduct(){
    const id= +this.activatedroute.snapshot.params['id'];
    this.productservice.deleteProduct(id)
  }
  getallcategories(){
    // this.categories=this.categoryService.getallcategories();
  }

  getallproductTypes(){
        this.paymenttypes=this.paymentTypesService.getallpaymentTypes();
  }
  onaddproduct(form:NgForm){
    console.log(form.value)
    const product:Product=form.value;
    this.productservice.addProduct(product);
    console.log(this.productservice)
    this.router.navigateByUrl('home');

  }
  
  changeoncheckbox(index:number){

  }
  ondeletetag(tag:Tag){
    this.tags.splice(this.tags.indexOf(tag),1)
  }

}
