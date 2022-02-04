import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-from-cli',
  templateUrl: './test-from-cli.component.html',
  styleUrls: ['./test-from-cli.component.scss']
})
export class TestFromCliComponent implements AfterViewInit {
   
  title='hello';
    person="basma"
    number=''
   showpassword=false
   check(fvalue:any){
     console.log(fvalue);
   }
 @ViewChild('in') testvar !:ElementRef
 @ViewChildren('in') testvarArray !:QueryList<ElementRef>
 ngAfterViewInit(): void {
     console.log(this.testvar.nativeElement.value)
     

     this.testvarArray.forEach(el=> {
      const element= el.nativeElement;
      element.classList.add('form-control');
      
    });
    const myopserve=new Observable((observer)=>{
      console.log('observable has started');
      const x =5;
      const y=5;
      if(x+y==10){
        console.log('resolved');
        observer.next('success')
      }
      else {
        console.log('rejected');
        observer.error('error')
      }
      observer.complete();
    })

    myopserve.subscribe(
      (res)=>{
        console.log(res)
      },
      (err)=>{
        console.log(err)
      },
      ()=>{
        console.log('completed')
      },
    )
    let x=1;
    const interve=setInterval(()=>{
     
      x +=1;
      console.log(x)
    },1000)

  //   const myintervaal=this.myowninterval(1,1000);
  


  //   myowninterval(x:number,periodofinterval:number){
  
  //    return new Observable((observer)=>{
  //      setInterval(()=>{
  //            observer.next(x++)
  //      },periodofinterval)
  //    })
  // }

    
   
 }
 constructor() { 
    
  }
  test( x:HTMLInputElement){
    console.log(x.type);
  }


  ngOnInit(): void {
  }

  

}
