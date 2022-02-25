import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos.component';
import { TodosEffects } from './todos.effects';
import { todos } from './todos.reducer';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    AppComponent,  TodoComponent, TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos }),
    EffectsModule.forRoot([TodosEffects]),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
