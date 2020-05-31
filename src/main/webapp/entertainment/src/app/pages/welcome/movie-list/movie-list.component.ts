import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { LS_MOVIE } from '../../../services/local-storage.namespace';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList = [];
  lastModifiedStr = null;

  constructor(
    private http: HttpClient,
    private store: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadMovieList();
  }

  loadMovieList() {
    this.http.get('api/common/files').subscribe(ret => {
      if (ret['returnCode'] === 1) {
        this.movieList = ret['result'];
        if (this.movieList.length > 0) {
          this.lastModifiedStr = this.movieList[0].lastModifiedStr;
        }
      }
    });
  }

  openVeido(item) {
    this.store.set(LS_MOVIE, item);
    this.router.navigateByUrl('/player');
    //this.router.navigateByUrl('/welcome/player');
  }

}
