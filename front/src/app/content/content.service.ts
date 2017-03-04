import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/rx';
@Injectable()
export class ContentService {
  douban: string = '/douban/';
  arr = [];
  constructor(private http: Http) { }

  getJson(type) {
    return this.http.get(this.douban + type + '.json')
      .map(res => res.json())
      .do(data => console.log(data));
  }
}
