import { AuthService } from './../../../modules/security/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bne-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
