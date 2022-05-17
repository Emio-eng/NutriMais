import { Content } from './../resourcers/models/content';
import { Observable } from 'rxjs';
import { Nutri } from './../resourcers/models/nutri';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  content: any[] = [];
  apiUrl = "https://nutri-app-back-end.herokuapp.com/api/"

  constructor(private http:HttpClient) { }

  public getNutricionista():Observable<Nutri[]>{
    return this.http.get<Nutri[]>("https://nutri-app-back-end.herokuapp.com/api/nutricionistas/")

  }
}
