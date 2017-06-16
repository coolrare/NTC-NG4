import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  keyword = 'Hello';

  doSearch(value: string) {
    console.log(value);
    this.keyword = value;
  }
}
