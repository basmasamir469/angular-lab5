import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/Product/category.model';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryArray:Category[]=[
    // {id:1,name:'Food'},
    // {id:2,name:'Electronics'},
    // {id:3,name:'Clothes'},
    // {id:4,name:'Books'},
    // {id:5,name:'Others'},
    // {id:6,name:'Furniture'},
    // {id:7,name:'Home'},
    // {id:8,name:'Beauty'},
    // {id:9,name:'Sports'},
    // {id:10,name:'Toys'},
    // {id:11,name:'Health'},
    // {id:12,name:'Baby'}
  ]
          

  

  constructor(private httpclient:HttpClient) { }
  // getallcategories():Category[]{
  //   return this.categoryArray
  // }

  getallcategories():Observable<Category[]>
  {
    
    return this.httpclient.get<Category[]>(environment.baseUrl+'category')
    
  };
  getbyid(){}
  add(){}
  delete(){}
  edit(){}
}
