import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UrlApi} from "./url-api";

@Injectable({
  providedIn: 'root'
})

// Avec Jules
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(email: string, password: string): void {
    this._httpClient.post<any>(`${environment.urlBack}/api/login_check`, {email, password}).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
    })
  }

  // Avec Kévin
  getRequest<T>(url: string, dateMin: string, dateMax: string): Observable<T> {
    const token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);
    // headers => autorisations
    let headers = undefined;
    if (token) {
      headers = {
        'Content-type': 'application/ld+json',
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*'
      };
    }
    // Permet de passer en paramètre les date_min et max dans l'URL
    let params = new HttpParams();
    params = params.append('min_date', dateMin);
    params = params.append('max_date', dateMax);

    // Retourne le résultat
    return this._httpClient.get<T>(url, {
      headers: headers,
      params: params,
    });
  }

  loginCheck(data: { email:string, password: string }): Observable<any> {
    return this._httpClient.post(UrlApi.loginCheck, data);
  }
}

