import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../auth/dto/login-request.dto';
import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../../auth/dto/register-request.dto';
import { LoginResponse } from '../../auth/dto/login-response.dto';
import { RegisterResponse } from '../../auth/dto/register-response.dto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${environment.apiUrl}/auth/login`, loginRequest)
  }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(
      `${environment.apiUrl}/auth/register`, registerRequest
    )
  }


}
