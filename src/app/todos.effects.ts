import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS } from "./todos.reducer";
import { TodosService } from "./todos.service";

@Injectable()
export class TodosEffects {
    constructor(
        private actions$: Actions,
        private todosService: TodosService
    ) {
    }


    getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_TODOS),
      switchMap(() => this.todosService.getTodos().pipe(
        map(todos => ({type: GET_TODOS_SUCCESS, payload: todos})),
        catchError(() => of({type: GET_TODOS_ERROR}))
      ))
    )
  );

}