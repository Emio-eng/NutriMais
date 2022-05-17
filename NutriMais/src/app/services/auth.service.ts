import { ResponseLogin } from 'src/app/resourcers/models/responseLogin';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogged = new BehaviorSubject<boolean>(false);
  isLogged = this._isLogged.asObservable();

  constructor(private user:UserService) { }

  login(ResponseLogin: ResponseLogin){
    return this.user.postLogin(ResponseLogin).pipe(
      tap((response:any)=>{
        localStorage.setItem('token',response.token)
        this._isLogged.next(true)
      })
    )

  }
}
