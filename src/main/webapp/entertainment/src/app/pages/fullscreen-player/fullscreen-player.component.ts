import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { LS_MOVIE } from '../../services/local-storage.namespace';
import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'app-fullscreen-player',
  templateUrl: './fullscreen-player.component.html',
  styleUrls: ['./fullscreen-player.component.css']
})
export class FullscreenPlayerComponent implements OnInit {

  videoUrl = null;
  preload: string = 'auto';
  api: VgAPI;

  constructor(
    private store: LocalStorageService
  ) { }

  ngOnInit(): void {
    let movie = this.store.get(LS_MOVIE);
    this.videoUrl = 'api/common/files/download?filePath=' + movie.path;
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }

}
