import { Injectable } from '@angular/core';
import { PaymentType } from 'src/app/_models/Product/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  paymentTypes:PaymentType[]=[
   {id:1,name:'COD'},
   {id:2,name:'Paypal'},
   {id:3,name:'Credit Card'},
   {id:4,name:'Debit Card'},
   {id:5,name:'Visa'},
   {id:6,name:'Master Card'}
  
  ]

  constructor() { }

  getallpaymentTypes():PaymentType[]{
    return this.paymentTypes
  }
  getbyId(){}
  add(){}
  edit(){}
  delete(){}
}
