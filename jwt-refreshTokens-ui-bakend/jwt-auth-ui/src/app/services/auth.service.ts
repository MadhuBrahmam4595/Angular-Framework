import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  register(data: { username: string; password: string }) {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, data);
  }

  refreshToken(): Observable<{token: string, refreshToken: string}>{
    const refeshToken = localStorage.getItem('refresh_token');
    return this.httpClient.post<{token: string, refreshToken: string}>(`${this.baseUrl}/refresh`, {refeshToken});
  }

  storeTokens(token: string, refreshToken: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refreshToken);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  } 

  getRefreshToken(): string | null{
    return localStorage.getItem('refresh_token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
