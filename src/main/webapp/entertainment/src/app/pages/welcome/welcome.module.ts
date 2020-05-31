import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { WelcomeComponent } from './welcome.component';
import { SingleMediaPlayerComponent } from './single-media-player/single-media-player.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NgZorroAntdModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [WelcomeComponent, SingleMediaPlayerComponent, MovieListComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
