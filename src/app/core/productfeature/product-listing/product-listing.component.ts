import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{ Product} from 'src/app/_models/Product/product.model'
import { ProductService } from 'src/app/_services/product/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  p: number = 1;
  count: number = 6;

  productsArray!:Product[];
  


@Output()
itemadded:EventEmitter<Product>=new EventEmitter<Product>();
  

  constructor(private productservice:ProductService) { 
    
  }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(
      (res)=>{
        this.productsArray=res.product;
        console.log(res.product)
      },
      (err)=>{},
      ()=>{}
      )
  }

  
  

}
