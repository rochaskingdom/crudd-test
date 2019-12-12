import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  private baseUrl = 'http://localhost:8080/gestoresBackend/api/v1/gestores';

  constructor(private http: HttpClient) { }

  getGestor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGestor(gestor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, gestor);
  }

  updateGestor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteGestor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getGestoresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}