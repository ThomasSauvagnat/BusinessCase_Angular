import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {UrlApi} from "../services/url-api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  private _email:string = '';
  private _password:string = '';
  public error:string = '';

  formLogin: FormGroup = new FormGroup({
    email: new FormControl(
      this._email, [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      this._password, [
        Validators.required,
      ]
    )
  });

  getFormControl(key: string): AbstractControl {
    return this.formLogin.controls[key];
  }

  isFormControlInvalid(key: string) {
    const field: AbstractControl = this.getFormControl(key);
    return field.invalid && (field.touched && field.dirty);
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      // Lance la requête HTTP à l'API
      this.authService.loginCheck({email: this.getFormControl('email').value, password: this.getFormControl('password').value}).subscribe(
        (response) => {
          if (response.token) {
            localStorage.setItem(UrlApi.keyTokenJWT, response.token);
            this.router.navigate(['/dashboard']).then();
          }
        },
        // Gestion de l'erreur
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.error = 'Identifiants invalides';
            }
          }
        }
      );
    }
  }

  // TRUC DE JULE
  // constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    // localStorage.setItem('truc', 'sejfosihrfdddz');
    // this._authService.login('admin@amdin.fr', 'test')
  }

}
