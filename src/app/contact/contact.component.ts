import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  constructor(private router: Router) { }

 

  goToPage(page:string):void{
    this.router.navigate([`${page}`]);

  }

}
