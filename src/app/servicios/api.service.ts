
import {LoginI} from '../model/login.interface';
import {ResponseI} from '../model/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  url: string = "https://ecovitali.presttoapp.net/Puertto/PostCalidad/Api/api/Login";
  
  constructor(private http:HttpClient ) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url;
    return this.http.post<ResponseI>(direccion, form);
  }
}