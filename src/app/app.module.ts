import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { UserContenComponent } from './user-conten/user-conten.component';
import { ListUserComponent } from './list-user/list-user.component';
import {UserService} from './user.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentFormComponent,
    UserContenComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
