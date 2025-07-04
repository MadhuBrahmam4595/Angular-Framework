import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  private baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  profile(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/api/user/profile`);
  }


}
