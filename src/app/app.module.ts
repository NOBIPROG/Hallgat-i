import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentRowComponent } from './components/student-row/student-row.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HeaderComponent,
    StudentRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
