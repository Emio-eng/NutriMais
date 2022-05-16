import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ResponseLogin } from 'src/app/resourcers/models/responseLogin';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userLogin:FormGroup;
  public Login: ResponseLogin;

  constructor( private user:UserService, private alertService:AlertService,) { }
  ngOnInit(): void {
    this.Login = new ResponseLogin();
    this.userLogin = new FormGroup({
      emailUser: new FormControl('',[Validators.required, Validators.email]),
      passwordUser: new FormControl('',[Validators.required,Validators.minLength(8)])
    })

  }

  public login() :void{
    if(this.userLogin.invalid){
      return;
    }
    this.user.postLogin(this.Login).subscribe(
      (data) =>{
        localStorage.setItem('access',data.access)
      },
      (error) => {

      }
    )

  }

}
