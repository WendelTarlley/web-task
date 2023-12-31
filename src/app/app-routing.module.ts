import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { LoginComponent } from './telas/login/login.component';
import { AuthGuard } from './auth.guard';
import { ConfiguracaoComponent } from './telas/configuracao/configuracao/configuracao.component';
import { KanbanComponent } from './telas/kanban/kanban.component';
const routes: Routes = [
  {path:'',component:TelaInicialComponent,canActivate:[AuthGuard]},
  {path:'pagina-inicial',component:TelaInicialComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'configuracao',component:ConfiguracaoComponent,canActivate:[AuthGuard]},
  {path:'kanban',component:KanbanComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
