import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenPlayerComponent } from './fullscreen-player.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';

@NgModule({
  declarations: [FullscreenPlayerComponent],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class FullscreenPlayerModule { }
