import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent  {

  drs: any[]

  constructor(private router: Router,
      drservice: OwnerService,
      private service: OwnerService) {

          drservice.getdr().subscribe((response)=>{
              if(response['status']=='success')
              {
                  this.drs = response['data']         
              }
              else{
                  alert('error')
                  console.log(response['error'])
                  
              }
       })
  }


  loadAllProducts() {
      this.service
        .getAllProducts()
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.drs = response['data']
          } else {
            alert('error')
          }
        })
    }
  
 ondelete(productId: number) {
  this.service
    .deleteProduct(productId)
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.loadAllProducts()
      } else {
        console.log(response['error'])
      }
    })
}
  onAddDR()
  {
      this.router.navigate(['/login/dashboard/drs/add_dr'])
  }
  dashboard()
  {
      this.router.navigate(['/login/dashboard'])
  }


}