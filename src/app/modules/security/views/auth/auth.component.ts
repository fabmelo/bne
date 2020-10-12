// angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// service
import { AuthService } from './../../services/auth.service';

// rxjs
import { first } from 'rxjs/operators';

@Component({
  selector: 'bne-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  inputUserName: any;
  inputPassword: any;
  message = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // direciona para o peoples se já estiver logado
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.createForm();

    // obtem a URL de retorno dos parâmetros de rota ou usa como padrão '/peoples'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/peoples';
  }

  /**
   * Getter para facilitar acesso aoa campos do formulário
   * @returns Devolve uma instância do item de formulário
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Recebe os dados enviados pelo formulário de login e envia ao authService
   */
  onSubmit() {
    this.submitted = true;

    // para aqui se o formulário for inválido
    if (this.form.invalid) return;

    this.loading = true;

    // realiza o login
    return this.authService
    .login(this.f.UserName.value, this.f.Password.value)
    .pipe(first())
    .subscribe(
      () => {
        // Limpa o formulário
        this.form.reset();
        // Direciona para a rota inicial
        this.router.navigate([this.returnUrl]);
        // para o loading
        this.loading = false;
      },
      (error) => {
        this.message = error;
        // para o loading
        this.loading = false;
      }
    );

  }

  /**
   * Cria o formulário e suas validações
   */
  private createForm() {
    this.form = this.formBuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

}
