import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItems(endPoint: string) {
    return this.http.get(`${environment.api}${endPoint}`);
  }

  register(endPoint: string, data: any) {
    return this.http.post(`${environment.api}${endPoint}`, data);
  }
}
