import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/_models/Product/category.model';
import { Product } from 'src/app/_models/Product/product.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { ProductService } from 'src/app/_services/product/product.services';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit{
  
 filtereditems :Product[]=[];
searchText !:string;
categoryArray !: Category[];
  constructor(private categoryservice:CategoryService,private productservice:ProductService) {
    // this.categoryArray=this.categoryservice.categoryArray
   }

  ngOnInit(): void {
   
    this.categoryservice.getallcategories().subscribe(
      (res)=>{
        this.categoryArray=res;
        console.log(res)
      },
      (err)=>{},
      ()=>{}
      )
   
  }
  
getproductbycategory(category:Category){
  this.productservice.getAllProducts().subscribe(
    (res)=>{
     this.filtereditems= this.productservice.productsArray.filter((product:Product)=>{
       return product.category.id==category.id;
      });
      console.log()
    },
    (err)=>{},
    ()=>{}
    )
}


}
