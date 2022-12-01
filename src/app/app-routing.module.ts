<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
=======
import { CadastrarComponent } from './cadastrar/cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
>>>>>>> branchEnzo
import { RouterModule, Routes } from '@angular/router';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { CadastrarComponent } from './cadastrar/cadastrar/cadastrar.component';

<<<<<<< HEAD
const routes: Routes = [
  {
    path: "usuario/cadastrar",
    component : CadastrarComponent,
  }
=======
import { AppComponent } from './app.component';
import { MensagensComponent } from './mensagens/mensagens/mensagens.component';

const routes: Routes = [
  {path:'', component: CadastrarComponent},
  {path:'messages', component: MensagensComponent}
>>>>>>> branchEnzo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
