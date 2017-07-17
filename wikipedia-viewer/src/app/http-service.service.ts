import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
  constructor(private _http: Http) {}

  getWikipediaData() {
      let params = new URLSearchParams();
      params.set('action', 'opensearch');
      params.set('search', 'Android');
      params.set('limit', '10');
      params.set('format', 'json');
      return this._http.get('https://en.wikipedia.org/w/api.php', {
          search: params
      }).map(res =>  res.json());
  }
}
