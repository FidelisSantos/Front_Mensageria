import { Messages } from './../types/Messages';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../types/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  constructor(private http: HttpClient) {}

  async getUser(): Promise<Observable<User[]>>{
    const url = 'https://mensageria.azurewebsites.net/user';
      return this.http.get<User[]>(url);
  }
  
  async getMessages(): Promise<Observable<Messages[]>>{
    const url = 'https://mensageria.azurewebsites.net/message';
    return this.http.get<Messages[]>(url);
  }

  async deleteMessage(idMessage:number): Promise<void>{
    const url = `https://mensageria.azurewebsites.net/message/${idMessage}`;
    try{
      this.http.delete(url);
    }catch{
      return alert('Erro ao deletar');
    }
    
  }
}
