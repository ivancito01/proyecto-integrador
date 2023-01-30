import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL ='https://back-argpro.onrender.com/auth/';
  constructor(private httpClient: HttpClient) { }
  public nuevo(nuevousuario : NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL+'nuevo',nuevousuario)
  }
  public login(loginusuario : LoginUsuario ):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+'login',loginusuario)
  }
}
