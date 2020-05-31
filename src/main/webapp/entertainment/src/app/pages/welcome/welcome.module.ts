import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { WelcomeComponent } from './welcome.component';
import { SingleMediaPlayerComponent } from './single-media-player/single-media-player.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NzListModule,
    NzEmptyModule,
    NzTableModule,
    NzDividerModule
  ],
  declarations: [WelcomeComponent, SingleMediaPlayerComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
