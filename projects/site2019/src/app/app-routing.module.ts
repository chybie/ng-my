import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderPageComponent } from './placeholder-page/placeholder-page.component';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeEarlyPageComponent } from './home-early-page/home-early-page.component';
import { HomeTicketPageComponent } from './home-ticket-page/home-ticket-page.component';
import { CodeOfConductPageComponent } from './code-of-conduct-page/code-of-conduct-page.component';
import { SpeakersPageComponent } from './speakers-page/speakers-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { LogoPageComponent } from './logo-page/logo-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SessionPageComponent } from './session-page/session-page.component';

// stage: 0, 1, 2
const HOMEPAGE_LIST = [
  PlaceholderPageComponent,
  HomeEarlyPageComponent,
  HomeTicketPageComponent,
  HomeTicketPageComponent
];

const routes: Routes = [
  {
    path: 'coc',
    component: CodeOfConductPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'team/:id',
    component: TeamPageComponent
  },
  {
    path: 'logo',
    component: LogoPageComponent
  },
  {
    path: 'speakers',
    component: SpeakersPageComponent
  },
  {
    path: 'speakers/:id',
    component: SpeakersPageComponent
  },
  {
    path: 'sessions',
    component: SessionPageComponent
  },
  {
    path: 'sessions/:id',
    component: SessionPageComponent
  },
  {
    path: 'form/:name',
    component: FormPageComponent
  },
  // {
  //   path: 'beta',
  //   component: HomeEarlyPageComponent
  // },
  {
    path: 'schedule',
    component: SchedulePageComponent
  },
  {
    path: 'post/:name',
    component: PostPageComponent
  },
  {
    path: '',
    component: HOMEPAGE_LIST[environment.featureFlag.homePageStage],
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
