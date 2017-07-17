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

  public searchForm = new FormGroup({
    search_key: new FormControl('search_key')
  });

  constructor(private service: WikipediaService){}

  getWikiData(event) {
    console.log(this.searchForm.value.search_key);
  }
}
