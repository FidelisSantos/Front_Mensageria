import { CadastrarComponent } from './cadastrar/cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MensagensComponent } from './mensagens/mensagens/mensagens.component';

const routes: Routes = [
  {path:'', component: CadastrarComponent},
  {path:'messages', component: MensagensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
