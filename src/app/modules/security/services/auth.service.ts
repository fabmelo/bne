// angular
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// intefaces
import { User } from './../models/user.interface';

// others
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private userLoggedIn = new Subject<boolean>();
  public currentUser: Observable<User>;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    // recupera dados do usuário/login que estão no sessionStorage
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    // atribui a currentUser o valor recuperado
    this.currentUser = this.currentUserSubject.asObservable();
    this.userLoggedIn.next(false);
  }

  /**
   * Seta o status do usuário
   */
  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  /**
   * Recupera o status do usuário
   * @returns Devolve o status de login
   */
  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  /**
   * Retorna os valores do usuário atual
   * @returns Devolve o valor do usuário atual
   */
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   * Método que realiza o login e retorna o token
   * @param UserName
   * @param Password
   * @returns Devolve os dados do usuário em caso de sucesso do login
   */
  login(UserName: string, Password: string) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        UserName,
        Password,
      })
      .pipe(
        map((user) => {
          // armazenar detalhes do usuário e token jwt no armazenamento local  e mantem o usuário logado entre as atualizações da página
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);

          // seta como logado
          this.setUserLoggedIn(true);

          return user;
        })
      );
  }

  /**
   * Método que remove usuário do armazenamento local para desconectar o usuário
   */
  logout() {
    this.setUserLoggedIn(false); // seta como deslogado
    this.currentUserSubject.next(null); // limpa dados do usuário
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }
}
