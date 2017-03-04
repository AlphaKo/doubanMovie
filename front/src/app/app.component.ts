import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/rx';
import 'rxjs/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  headerStyle = false;
  typeArr = ['top250', 'in_theaters', 'coming_soon'];
  ngOnInit() {
    Observable.fromEvent(window, 'scroll')
      .map(() => window.scrollY !== 0)
      .distinctUntilChanged()
      .subscribe((value) => {
        this.headerStyle = value;
      })
  }
  

}
