import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from 'src/shared/http.service';


@Component({
  selector: 'app-nodemailer',
  templateUrl: './nodemailer.component.html',
  styleUrls: ['./nodemailer.component.css']
})
export class NodemailerComponent implements OnInit {
  name1;
  age;
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

 

  constructor(public http: HttpService) {}
  ngOnInit() {
    console.log(this.http.test);
  }

  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    }
    this.http.sendEmail("http://localhost:4000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully   mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }
}


  






 

 



 
