import { Component, OnInit } from '@angular/core';
import { MensagensService } from '../services/mensagens.service';
import { Messages } from '../types/Messages';
import { User } from '../types/User';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {
  users: User[] = []
  messages: Messages[] = []
  
  async ngOnInit() {
    await this.getUsersMessages();
  }
  constructor(private service: MensagensService){}


  async getUsersMessages(){
  const initUsersMessages = {
      user : async ()=> {
      (await this.service.getUser()).subscribe(
        response => this.users = response, error =>  alert(error));
    },
  
      messages : async () => {
      (await this.service.getMessages()).subscribe(
        response=> this.messages = response, error => alert(error))
    }
  }
  Object.values(initUsersMessages).forEach(callback => callback());
}
  

async deleteMessage(idMessage:number){
  console.log(idMessage);
  await this.service.deleteMessage(idMessage);
  this.getUsersMessages()
}

  isUser(messageId: number , userId: number){
    if(messageId === userId) return true;
    else return false;
  }
}

