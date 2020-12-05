import { Component } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import {MatDialog} from '@angular/material/dialog';
import {  MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements CanActivate {


  title = 'MRTracker';
  isLoggedIn = false
  username:String
  search: String

  status = localStorage['login_status']

  constructor(private router:Router, public dialog:MatDialog)
  {
    this.loadStatus()
  }

  canActivate()
  {  
      this.loadStatus()
      return true
  }
 
  
  loadStatus()
  {
      if(this.status == '1')
      {
        this.isLoggedIn = true
        this.username = localStorage['username']
      }
  }


  onLogout()
  {
    if(confirm('Are you sure to log out'))
    {
      this.isLoggedIn = false
      localStorage['login_status'] = '0'
      localStorage['username'] = null
      localStorage['id'] = null

      this.router.navigate(['/MRlogin'])
    }
  }

  onSearch()
  {
    localStorage['searchValue'] = this.search

    this.router.navigate(['/MRlogin/search'])
  }
  openDialog() :void{
    let dialogRef = this.dialog.open(SubscribeComponent, {
     
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
  
     
    });

}}
