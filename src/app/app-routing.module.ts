import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { CadastrarComponent } from './cadastrar/cadastrar/cadastrar.component';

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
