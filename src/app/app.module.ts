import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadastrarModule } from './cadastrar/cadastrar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensagensModule } from './mensagens/mensagens.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    CadastrarModule,
    MensagensModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
