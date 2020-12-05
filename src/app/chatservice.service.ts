import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';


import * as io from "socket.io-client";


@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
    socket:any;
    readonly url:string="http://localhost:3500";
  

    constructor() {
        this.socket = io.connect(this.url);
    }
    

    listen(eventname: string) : Observable<any> {
        return new Observable((subscriber) => {
            this.socket.on(eventname, (data) => {
                subscriber.next(data);
            })
        })
    }

    emit(eventname: string, data: any) {
        this.socket.emit(eventname, data);
    }
}
