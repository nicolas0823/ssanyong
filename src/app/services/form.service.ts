import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { cotizacion, CotizacionRequest } from '../components/interfaces/Form';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseURL: string = environment.baseURL

  constructor(private http: HttpClient) { }

  cotizacion(data: cotizacion): Observable<CotizacionRequest> {

    return this.http.post<CotizacionRequest>(`${this.baseURL}`, data)

  }

}
