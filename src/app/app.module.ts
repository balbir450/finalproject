import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialog, MatDialogModule, matDialogAnimations} from '@angular/material/dialog';
import {  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactComponent } from './contact/contact.component';
import { NodemailerComponent } from './nodemailer/nodemailer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerPaymentComponent } from './owner-payment/owner-payment.component';
import { OwnerDataComponent } from './owner-data/owner-data.component';
import { MRloginComponent } from './mrlogin/mrlogin.component';
import { MRloginService } from './mrlogin.service';
import { MRregisterComponent } from './mrregister/mrregister.component';
import { MRRegisterService } from './mrregister.service';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { CartdetailService } from './cartdetail.service';
import { CartService } from './cart.service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddproductService } from './addproduct.service';



@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    ContactComponent,
    NodemailerComponent,
    LoginComponent,
    SignupComponent,
    OwnerComponent,
    OwnerPaymentComponent,
    OwnerDataComponent,
    MRloginComponent,
    MRregisterComponent,
    ChatComponent,
    DashboardComponent,
    CartComponent,
    CartdetailsComponent,
    AddproductComponent,
    
  ],
  imports: [
   
    
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  entryComponents:[SubscribeComponent],
  providers: [MRloginService,
              MRRegisterService,
              CartdetailService,
              CartService,
              AddproductService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
