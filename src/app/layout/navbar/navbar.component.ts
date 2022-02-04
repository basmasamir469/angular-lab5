import { Component, OnInit ,Input} from '@angular/core';
import { Product, ProductWithCounter } from 'src/app/_models/Product/product.model';
import { ProductService } from 'src/app/_services/product/product.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dropdownopened=false
  



  constructor(private productservice:ProductService) { 
  
  }

  // @Input()
// addedproduct !:Product[];

addedproduct :ProductWithCounter[]=[]



  
ondelete(product:ProductWithCounter){
  console.log(product)
  if(product.cartCounter>1)
  product.cartCounter-=1
  else
  this.addedproduct.splice(this.addedproduct.indexOf(product),1)
  return this.addedproduct;
}

counttotal(){
let total=0;
  for(let item of this.addedproduct){
    
    total+=item.cartCounter*item.price;
 
}
  return total
}

countnumofproducts(){
  let counter=0;
  for(let item of this.addedproduct){
    
    counter+=item.cartCounter
 
}
  return counter
}




  ngOnInit(): void {

    this.productservice.carthaschanged.subscribe(

      (res)=>{
        this.addedproduct =res;
      },
      (err)=>{

      },
      ()=>{}
    )
  }

  
  

}
