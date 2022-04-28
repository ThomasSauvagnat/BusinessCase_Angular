import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): void {
    this._httpClient.post<any>(`${environment.urlBack}/api/login_check`, {email, password}).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
    })
  }
}
