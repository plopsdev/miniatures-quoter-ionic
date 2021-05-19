import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = "http://127.0.0.1:8000/api/quotes";

export interface Scale {
  id: number;
  name: string;
  paintPrice: number;
  buildPrice: number;
}

export interface Quality {
  id: number;
  name: string;
  priceMultiplier: number;
}


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getScales(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/scales')
  }

  getQualities(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/qualities')
  }

  addScale(scale: Scale): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/scales', scale)
  }

  editScale(scale: Scale): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/scales/' + scale.id, scale)
  }

  getScale(id: number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/scales/' + id)
  }

  deleteScale(id: number): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/scales/' + id)
  }
}
