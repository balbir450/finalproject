import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NodemailerComponent } from './nodemailer/nodemailer.component';
import{SignupComponent} from './signup/signup.component';
import { OwnerPaymentComponent } from './owner-payment/owner-payment.component';
import { OwnerDataComponent } from './owner-data/owner-data.component';
import { MRloginComponent } from './mrlogin/mrlogin.component';
import { MRregisterComponent } from './mrregister/mrregister.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent } from './owner/owner.component';
import { CartComponent } from './cart/cart.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'chat', component: ChatComponent
  },
  {path: 'MRregister', component: MRregisterComponent},
  {
    path: 'ownerdata', component: OwnerDataComponent
  },
  {
    path: 'ownerpayment', component: OwnerPaymentComponent
  },
  {
    path: 'nodemailer', component: NodemailerComponent 
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup',component: SignupComponent
  },
  
  {path: 'MRlogin', component: MRloginComponent},
  {path: 'owner', component: OwnerComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cartdetails', component: CartdetailsComponent},
  {path: 'addproduct', component: AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
