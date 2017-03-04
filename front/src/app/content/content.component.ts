import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from './content.service';

import { fade } from '../animations/fade';
import { fly } from '../animations/fly';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [
  ],
  animations: [
    fade,
    fly
  ]
})
export class ContentComponent implements OnInit {
  @Input() type: string;

  movies;
  left = [];
  showBoolean = false;
  nowMovie;
  showYears = false;
  oTitle = false;
  main = true;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getJson(this.type)
      .map(data => data.subjects)
      .map(data => this.movies = data)
      .subscribe();
  }
  toRight() {
    if (this.movies.length > 5) {
      this.left.push(this.movies.shift());
    }
  }
  toLeft() {
    if (this.left.length !== 0) {
      this.movies.unshift(this.left.pop());
    }
  }
  show(movie) {
    this.showBoolean = false;
    let fn = () => {
      this.showBoolean = true;
      this.nowMovie = movie;
    }
    setTimeout(fn, 150);
  }

}
