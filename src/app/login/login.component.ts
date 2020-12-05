import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup ,FormBuilder} from '@angular/forms';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HomeserviceService } from 'src/shared/homeservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email1 = ''
  password1 = ''

  constructor(private router: Router) { }

  onlogin()
  {
      if(this.email1 == "balbir" && this.password1 == "1234"){
         // this.router.navigate(['/login/dashboard'])
         alert("welcome ")
      }
      else
      {
          alert('enter the vaild infomation')
      }
      
  }
  
  ngOnInit() { }
}