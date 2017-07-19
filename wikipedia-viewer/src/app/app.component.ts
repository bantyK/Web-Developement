import { Component } from '@angular/core';
import { WikipediaService } from './http-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private search_key: string;

  constructor(private service: WikipediaService){}

  getWikiData() {
    this.service.getWikipediaData(this.search_key)
                .subscribe(data => console.log(data));
  }
}
