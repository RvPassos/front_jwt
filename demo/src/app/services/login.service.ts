import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule, inject } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@NgModule({
  imports: [HttpClientModule]
})

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8080/api/login';
  http = inject(HttpClient);

  constructor(private http2: HttpClient) { }


  logar(login: Login): Observable<User> {
    return this.http.post<User>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }



  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  Decode(){
    try{
      const token = this.getToken();
      if (token) {
        return jwtDecode(token);
      }
    } catch (error) {
        console.error('Erro ao decodificar o token', error);
    }
      return null;
  }

  hasPermission(permission: string): boolean {
    try{
      const decodedToken: any = this.Decode();
      console.log('Decoded token: ', decodedToken);
      if(decodedToken && decodedToken.role) {
        return decodedToken.role.includes(permission);
      }
    } catch (error){
        console.error('Erro ao verificar permissão', error);
    }
    return false;
  }

}
