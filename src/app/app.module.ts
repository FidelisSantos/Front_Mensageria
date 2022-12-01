import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { FormsModule } from '@angular/forms';
=======
import { CadastrarModule } from './cadastrar/cadastrar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensagensModule } from './mensagens/mensagens.module';

>>>>>>> branchEnzo

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    CadastrarModule,
<<<<<<< HEAD
=======
    MensagensModule,
>>>>>>> branchEnzo
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
