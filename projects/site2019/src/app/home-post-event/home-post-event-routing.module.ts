import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostEventComponent } from './post-event/post-event.component';

const routes: Routes = [
  {
    path: '',
    component: PostEventComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePostEventRoutingModule {}
