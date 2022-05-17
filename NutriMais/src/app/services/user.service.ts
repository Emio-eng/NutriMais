import { Observable, tap } from 'rxjs';
import { ResponseRegister } from 'src/app/resourcers/models/responseRegister';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseJwt } from '../resourcers/models/responseJwt';
import { ResponseLogin } from '../resourcers/models/responseLogin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = 'https://nutri-app-back-end.herokuapp.com/api/';
  private usuarioAutenticado:boolean=false;

  constructor(
    private http:HttpClient
  ) { }

  public postRegister(responseRegister:ResponseRegister):Observable<ResponseJwt>{
    return this.http.post<ResponseJwt>
    ('https://nutri-app-back-end.herokuapp.com/api/register/',responseRegister)
  }

  public postLogin(responseLogin:ResponseLogin):Observable<ResponseJwt>{

    return this.http.post<ResponseJwt>(
      'https://nutri-app-back-end.herokuapp.com/api/token/',responseLogin).pipe(
        tap((res:ResponseJwt)=> localStorage.setItem("access",res.access))
      )


  }

}
