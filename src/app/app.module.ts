import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { ContentFormComponent } from './main-page/content-form/content-form.component';
import { UserContenComponent } from './main-page/user-conten/user-conten.component';
import {UserService} from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { MainPageComponent } from './main-page/main-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentFormComponent,
    UserContenComponent,
    UserListComponent,
    MainPageComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
