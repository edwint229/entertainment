import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  movieList = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMovieList();
  }

  loadMovieList() {
    this.http.get('api/common/files').subscribe(ret => {
      if (ret['returnCode'] === 1) {
        this.movieList = ret['result'];
      }
    });
  }

  openVeido(item) {
    location.href = 'api/common/files/download?filePath=' + item.path;
  }

}
