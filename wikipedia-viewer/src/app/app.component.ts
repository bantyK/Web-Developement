import { ViewChild, Component } from '@angular/core';
import { WikipediaService } from './http-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WikiData } from './wikipedia_data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private search_key: string;

  private wikiData: WikiData[] = [];

  private showLogo = false;

  @ViewChild ('logoImage') logo;

  constructor(private service: WikipediaService) {}

  getWikiData() {
    this.showLogo = true;
    // this.service.getWikipediaData(this.search_key)
    //             .subscribe(data => {
    //               this.parseData(data);
    //             });
  }

  parseData(jsonData: string) {
    for (let i = 0; i < jsonData[1].length; i++) {
      const data = new WikiData(jsonData[1][i], jsonData[2][i], jsonData[3][i]);
      this.wikiData.push(data);
    }
  }
}
