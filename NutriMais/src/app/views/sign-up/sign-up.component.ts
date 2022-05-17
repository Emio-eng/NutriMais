import { AlertService } from './../../services/alert.service';
import { UserService } from './../../services/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ResponseRegister } from 'src/app/resourcers/models/responseRegister';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {



  checked = false;
  public Registro: ResponseRegister;
  userRegister:FormGroup;

  constructor(
    private user:UserService, private alertService:AlertService,
  ) {

   }



  ngOnInit(): void {
    this.Registro = new ResponseRegister();
    this.userRegister = new FormGroup({
      nameUser: new FormControl('',[Validators.required,Validators.minLength(3)]),
      emailUser: new FormControl('',[Validators.required,Validators.email]),
      cpfUser: new FormControl('',[Validators.required,Validators.maxLength(14)]),
      passwordUser: new FormControl('',[Validators.required,Validators.minLength(8)]),
      crnUser: new FormControl('',[Validators.required,Validators.minLength(8)]),
      is_Nutricionista: new FormControl('',[Validators.required]),
    })
  }

 get nameUser(){
    return this.userRegister.get('nameUser')!
  }
  get emailUser(){
    return this.userRegister.get('emailUser')!
  }
  get cpfUser(){
    return this.userRegister.get('cpfUser')!
  }
  get passwordUser(){
    return this.userRegister.get('passwordUser')!
  }
  get is_Nutricionista(){
    return this.userRegister.get('is_Nutricionista')!
  }


  public register(){
    if(this.userRegister.invalid){
      return;
    }

    this.user.postRegister(this.Registro).subscribe(data=>
      {
        console.log(data);
      },)

  }



}

