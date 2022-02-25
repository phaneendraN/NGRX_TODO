import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTodos } from './todos.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxtodolist';
  todos$ : Observable<any>;

  constructor( private store : Store<any> ) {
    this.store.dispatch(getTodos());
    this.todos$ = store.select("todos");
  }
}
