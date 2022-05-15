import { Observable } from 'rxjs';
import { ResponseRegister } from 'src/app/resourcers/models/responseRegister';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseJwt } from '../resourcers/models/responseJwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = 'https://nutri-app-back-end.herokuapp.com/api/';

  constructor(
    private http:HttpClient
  ) { }

  public postRegister(responseRegister:ResponseRegister):Observable<ResponseJwt>{
    return this.http.post<ResponseJwt>
    ('https://nutri-app-back-end.herokuapp.com/api/register/',responseRegister)
  }
}
