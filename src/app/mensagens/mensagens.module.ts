import { FormsModule } from '@angular/forms';
import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MensagensComponent } from './mensagens/mensagens.component';


@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[
    MensagensComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class MensagensModule { }
