import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable()
export class TodosService {
  constructor(public http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => res));
  }
}
