import { ResponseConsulta } from './../resourcers/models/responseConsulta';
import { Observable } from 'rxjs';
import { requestConsulta } from 'src/app/resourcers/models/requestConsulta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultNutriService {

  constructor(private http:HttpClient) { }

  public enviarConsulta(requestConsulta:requestConsulta):Observable<ResponseConsulta>{
    return this.http.post<ResponseConsulta>('https://nutri-app-back-end.herokuapp.com/api/consultas/'
    ,requestConsulta)

  }
}
