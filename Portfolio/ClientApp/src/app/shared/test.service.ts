import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  GetOne(): Observable<number> {
    return this.http.get('/api/Default/ReturnOne')
      .pipe(map((response: any) => {
        return response;
      }));
  }
} 
