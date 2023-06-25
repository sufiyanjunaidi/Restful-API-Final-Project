import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
