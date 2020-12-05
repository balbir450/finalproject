import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  private _loginurl="assets/json-folder/logIn.json";
  user = new BehaviorSubject(null);
  private tokenExpirationTimer : any;

  constructor(private _http: HttpClient, private router : Router) { 
    this.getJSON().subscribe(data => {
      console.log(data);
  });
}
public getJSON(): Observable<any> {
  return this._http.get("./assets/json-folder/logIn.json");
}}


