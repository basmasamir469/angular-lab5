import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/Product/product.model';
import { ProductService } from 'src/app/_services/product/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product !: Product;
  relatedproducts !:Product[];

  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService) { }

  ngOnInit(): void {
    this.getproductbyid();
    this.getrelatedproducts();
  }
  getproductbyid(){
    this.activatedroute.params.subscribe({
     next: (params)=>{
        console.log(params)
        const id= +params['id'];
        this.product=this.productservice.getProductById(id)!;
        console.log(this.product)
      },
     error: (err)=>{},
     complete: ()=>{}
    })
    
  
   }
   getrelatedproducts(){
    // this.relatedproducts= this.productservice.getAllProducts().slice(0,4);
   }

}
