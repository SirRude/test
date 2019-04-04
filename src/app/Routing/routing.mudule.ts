import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from '../front-page/front-page.component';
import { MeetingComponent } from '../meeting/meeting.component';
import { LoginComponent} from '../login/login.component';


// import { StreamVideoSiteComponent } from '../stream-video-site/stream-video-site.component';

const appRoutes: Routes = [
  { path: 'front', component: FrontPageComponent},
  {path: 'meet', component: MeetingComponent},
  {path: 'login', component: LoginComponent},

 

  { path: '', redirectTo: '/front', pathMatch: 'full' },
  { path: '**', component: FrontPageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutinModule { }