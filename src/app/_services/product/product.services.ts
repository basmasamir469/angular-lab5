import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AllProductResponse, Product, ProductWithCounter } from "src/app/_models/Product/product.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})

export class ProductService {

    productsArray :Product[]=[
        
      
      ];
      private cartarray:ProductWithCounter[]=[];
      carthaschanged : EventEmitter<ProductWithCounter[]>=new EventEmitter<ProductWithCounter[]>();
    constructor(private httpclient:HttpClient) {
        
    }

    getAllProducts():Observable<AllProductResponse>
    {
      const header=new HttpHeaders({authorization:sessionStorage.getItem('token')!})
      return this.httpclient.get<AllProductResponse>(environment.baseUrl+'product',{headers:header})
      
    };

    getProductById(id:number){

       
       return this.productsArray.find(product=>product.id===id);
    };
    addProduct(product:Product){
      this.productsArray.push(product);
    };
    deleteProduct(id:number){
      for(let product of this.productsArray)
      {
        if(product.id==id)
      this.productsArray.splice(this.productsArray.indexOf(product),1)
      }
      console.log(this.productsArray)
      return this.productsArray;
    };
    updateProduct(){};

   

      addproducttocart(product:Product){
    console.log(product);
    const newproduct : ProductWithCounter ={...product,cartCounter:1};
    for(let item of this.cartarray){
      if (item.data[0].name == product.data[0].name){
        item.cartCounter++;
        return
      }
      
    }this.cartarray.push(newproduct);
    this.carthaschanged.emit(this.cartarray)
    // if (this.cartarray.includes(product))
    
    // product.counter+=1
  //   else{
    
   
  // }
  
  
}
}