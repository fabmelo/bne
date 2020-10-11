// angular
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
} from '@angular/router';

// service
import { AuthService } from './../../modules/security/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * @returns Devolve o status do login no canActivate
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true; // Se logado return true
    }

    // não conectado, redirecione para a página de login com o URL de retorno
    this.router.navigate(['/auth'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }

}
