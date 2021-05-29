import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

//Modelo
import {Paciente} from '../modelos/paciente'
//Observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private _http: HttpClient) { }

  getData(query: string): Observable <Paciente[]>{
    const urlAPI = 'https://www.datos.gov.co/resource/gt2j-8ykr.json' + query;
    return this._http.get<Paciente[]>(urlAPI);
  }
}
