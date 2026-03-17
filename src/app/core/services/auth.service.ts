import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../shared/models/auth/login-request.model';
import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../../shared/models/auth/register-request.model';
import { LoginResponse } from '../../shared/models/auth/login-response.model';
import { RegisterResponse } from '../../shared/models/auth/register-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  login(loginRequest:LoginRequest){
    return this.httpClient.post<LoginResponse>(
      `${environment.apiUrl}/auth/login`, loginRequest
    )
  };

  register(registerRequest:RegisterRequest){
    return this.httpClient.post<RegisterResponse>(
      `${environment.apiUrl}/auth/register`, registerRequest
    )
  };


}
