import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAll(url: string): Observable<any>{
    return this.httpClient.get(url);
  }
  
}
