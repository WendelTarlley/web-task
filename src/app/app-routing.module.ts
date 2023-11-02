import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { LoginComponent } from './telas/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:TelaInicialComponent,canActivate:[AuthGuard]},
  {path:'pagina-inicial',component:TelaInicialComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
