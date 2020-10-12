import { AuthService } from './../../../modules/security/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bne-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  user: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (JSON.parse(sessionStorage.getItem('currentUser'))) {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
