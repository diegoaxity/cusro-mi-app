import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../model/login.reponse';
import { ColorResponse } from '../model/colors.reponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  login(username: string, pwd: string): Observable<LoginResponse> {
    const body = {
      email: username,
      password: pwd
    };
    return this._http.post<LoginResponse>('https://reqres.in/api/login?delay=3', body);
  }

  getColors(): Observable<ColorResponse> {
    return this._http.get<ColorResponse>('https://reqres.in/api/unknown?delay=3');
  }
}
