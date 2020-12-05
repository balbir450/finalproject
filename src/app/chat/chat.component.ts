import { Component, OnInit } from '@angular/core';

import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[ChatserviceService]
})
export class ChatComponent implements OnInit {

  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;

  constructor(private webSocketService: ChatserviceService) { }
  ngOnInit(): void {
    this.webSocketService.listen('typing').subscribe((data) => this.updateFeedback(data));
    this.webSocketService.listen('chat').subscribe((data) => this.updateMessage(data));
  }

  messageTyping(): void {
    this.webSocketService.emit('typing', this.userName);    
  }

  sendMessage(): void {
    this.webSocketService.emit('chat', {
      message: this.message,
      handle: this.userName
    });
    this.message = "";    
  }

  updateMessage(data:any) {
    this.feedback = '';
    if(!!!data) return;
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any){
    this.feedback = `${data} is typing a message`;
  }

}