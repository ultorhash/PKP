import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/interfaces/customer';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginData: Customer): Observable<Customer> {
    
    return this.http.post<Customer>(`${environment.apiURL}/api/login/auth`, loginData);
  }
}
