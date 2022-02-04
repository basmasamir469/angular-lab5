import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/Product/product.model';
import { ProductService } from 'src/app/_services/product/product.services';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {


  constructor(private productservice:ProductService) { }
  @Input()
  productitem !:Product;

  
  
  // @Output()
  // itemaddedtocart : EventEmitter<Product>=new EventEmitter<Product>();

  // calculateprice():number{
  //   let result;
  //   if(this.productitem.discount){
  //     return result=this.productitem.price-(this.productitem.discount*this.productitem.price);
  //   }
  //   else{
  //     return this.productitem.price;
  //   }

  // }
  
  
  onaddeditem(){
    console.log(this.productitem)
    
    this.productservice.addproducttocart(this.productitem)
  }

 

  ngOnInit(): void {
  }

}
