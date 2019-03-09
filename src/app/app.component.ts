import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Weather } from './post';
import { Observable } from 'rxjs/Observable';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  private config =  {
    headers:  new HttpHeaders ({
      'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36'
    }),
  };

  weathers: any;
  response: any;
  private serviceUrl = 'https://api.weather.gov/gridpoints/OKX/36,38/forecast';

  constructor(private http: HttpClient) { }
  getWeather() {
    this.response = this.http.get<Weather>(this.serviceUrl );
    this.response.subscribe(
      results => {
        this.weathers = results.properties.periods;
        console.log('this.weather ====> ', this.weathers);
      });
    }
}
