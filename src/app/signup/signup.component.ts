import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  
  
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder){
    // this.signUpForm  = this.fb.group({
    //   firstname: ['', [Validators.required,Validators.minLength(4)]],
    //   lastname: [ null, [ Validators.maxLength(100)]],
    //   mobile: [null, [Validators.required, Validators.pattern(`^([0|\\+[0-9]{1,5})?([1-9][0-9]{9})$`)]],
    //   email: ["", [Validators.email, Validators.required]],
    //   password: ['', [Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    //   confirmPassword: ['', Validators.required]
    //     }, confirmNewPasswordValidator);
   


        this.signUpForm = new FormGroup({
          firstname: new FormControl(null,[Validators.required,Validators.maxLength(100), Validators.minLength(2),Validators.pattern(`^(?=.{2,100}$)[a-zA-Z]+(?:['_.\\s][a-zA-Z]+)*$`)]),
          lastname: new FormControl(null, [ Validators.maxLength(100)]),
          mobile: new FormControl(null,[Validators.required, Validators.pattern(`^([0|\\+[0-9]{1,5})?([1-9][0-9]{9})$`)]),
          email: new FormControl(null,[Validators.email, Validators.required]),
          password: new FormControl(null,[Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
          
          confirmPassword: new FormControl(null, [
            Validators.required
          ])
        }, confirmNewPasswordValidator);


      }


 
}


function confirmNewPasswordValidator(findForm: AbstractControl): { [s: string]: boolean } {
  if (findForm.get('password').value !== findForm.get('confirmPassword').value) {
    return { isConfirmNewPasswordNotSame: true };
  }
  return null;
}

