import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RoutinModule } from './Routing/routing.mudule';
import { MeetingComponent } from './meeting/meeting.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    MeetingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RoutinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
