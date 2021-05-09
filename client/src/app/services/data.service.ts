import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }
  api: string = 'http://localhost:8080/';

  getServer1Data(): Observable<object> {
    return this.http.get(this.api + 'server1/');
  }

  getServer2Data(): Observable<object> {
    return this.http.get(this.api + 'server2/');
  }
}
