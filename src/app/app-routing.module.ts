import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { CadastrarComponent } from './cadastrar/cadastrar/cadastrar.component';
import { AppComponent } from './app.component';
import { MensagensComponent } from './mensagens/mensagens/mensagens.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'messages', component: MensagensComponent}
const routes: Routes = [
  {
    path: "usuario/cadastrar",
    component : CadastrarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
