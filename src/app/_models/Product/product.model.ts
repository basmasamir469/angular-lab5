import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Supplier } from "./supplier.model";
import { Tag } from "./tag.model";

export interface Product{
    imageurl:string;
    id:number;
   data:ProductLang[];
   price:number;
   discount?:number;
   
   supplier?:Supplier;
   
   category:Category;
   tag:Tag[];
   paymenttypes:PaymentType[];
   }

   export interface ProductWithCounter extends Product{
       cartCounter:number;
   }

   export interface AllProductResponse{
       product:Product[],
       numberOfProducts:number[]
   }


   