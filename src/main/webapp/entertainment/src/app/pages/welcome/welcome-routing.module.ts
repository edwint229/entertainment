import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { SingleMediaPlayerComponent } from './single-media-player/single-media-player.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'player', pathMatch: 'full', component: SingleMediaPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
