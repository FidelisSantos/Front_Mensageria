import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { login } from '../types/login';
import { postUser } from '../types/postUser';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent{

  name!: string;
  genre!: string;
  email!: string;
  password!: string;

  private postUser: postUser = {
    name: '',
    genre: '',
    login: {
      email: '',
      password: ''
    }
  };

  constructor
  (
    private http: HttpClient,

  ){

  }

  cadastrar(){
      const url = "https://mensageria.azurewebsites.net/user";
      this.postUser.name = this.name;
      this.postUser.genre = this.genre;
      this.postUser.login.email = this.email;
      this.postUser.login.password = this.password;
      this.http.post(url, this.postUser).subscribe()
      console.log(this.postUser.name)
  }

}
