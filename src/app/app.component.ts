//angular
import { Component } from '@angular/core';

// interface
import { User } from './modules/security/models/user.interface';

// service
import { AuthService } from './modules/security/services/auth.service';

@Component({
  selector: 'bne-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUser: User;

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x)); // obtem o usuário atual caso exista
  }


}
