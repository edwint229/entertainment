import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MovieListComponent } from './pages/welcome/movie-list/movie-list.component';
import { SingleMediaPlayerComponent } from './pages/welcome/single-media-player/single-media-player.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {
        path: 'movies',
        component: MovieListComponent,
        pathMatch: 'full'
      },
      {
        path: 'player',
        component: SingleMediaPlayerComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
