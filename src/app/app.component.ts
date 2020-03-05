import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotNews edited';
  newsData: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get('http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72d03ea8b55f41cb83d5c34eafe01069').subscribe(data => {
      //debugger
      this.newsData = data;
    })
  }
}
