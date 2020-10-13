// angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// services
import { UtilService } from './../../../core/services/util.service';
import { AuthService } from './../../../modules/security/services/auth.service';

@Component({
  selector: 'bne-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  user: any;
  isMobile: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private utilService: UtilService
    ) {}

  ngOnInit(): void {
    // obtem os dados do usuário logado que estão na sessionStorage
    if (JSON.parse(sessionStorage.getItem('currentUser'))) {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    }
    this.isMobile = this.utilService.detectMobile();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
