import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // O usuário está autenticado, permita o acesso à rota
    } else {
      this.router.navigate(['/login']); // Redireciona o usuário para a tela de login
      return false; // Não permita o acesso à rota
    }
  }
}
