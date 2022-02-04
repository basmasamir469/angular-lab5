import { Component, Input } from '@angular/core';
import { Product } from './_models/Product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'my-first-project';
  

  addedproduct : Product[]=[];

//   onitemadded(product:Product){
//     console.log(product);
//     if (this.addedproduct.includes(product))
//     product.counter+=1
//     else{
    
//     this.addedproduct.push(product);
//   }
  
// }
}
