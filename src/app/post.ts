export interface Weather {
    context: any[];
    type: string;
    geometry: Geometry;
    properties: Properties;
}

export interface Geometry2 {
    type: string;
    coordinates: any[];
}

export interface Geometry {
    type: string;
    geometries: Geometry2[];
}

export interface Elevation {
    value: number;
    unitCode: string;
}

export interface Period {
    number: number;
    name: string;
    startTime: Date;
    endTime: Date;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}

export interface Properties {
    updated: Date;
    units: string;
    forecastGenerator: string;
    generatedAt: Date;
    updateTime: Date;
    validTimes: string;
    elevation: Elevation;
    periods: Period[];
}




// private headerObj = new HttpHeaders({'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36'})


// export class AppComponent {
//   private config = {
//     headers: {
//       'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36'
//     }
//   };
//   weathers: any;
//   private serviceUrl = 'https://api.weather.gov/gridpoints/OKX/36,38/forecast';

//   constructor(private http: HttpClient) { }

//   getWeather() {
//     this.http.get<Weather>(this.serviceUrl, this.config).subscribe(
//       val => {
//         this.weathers = val;
//       console.log('this.weather ====> ', this.weathers);
//       });
//     }
// }

        // console.log(JSON.stringify(val));


        // const test = JSON.stringify(this.weathers);
        // console.log('has data -->> ', test );
        // console.log('name \t\t\t\t\t ', JSON.parse(test).properties.periods[0]['name']);
        // console.log('detailedForecast \t\t ', JSON.parse(test).properties.periods[0].detailedForecast);


      // console.log('this.weather ====> ', this.weathers);


// export class AppComponent {
//   private config = {
//     headers: {
//       'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36'
//     }
//   };

//   private serviceUrl = 'https://api.weather.gov/gridpoints/OKX/36,38/forecast';

//   constructor(private http: HttpClient) { }

//   getWeather(): Observable<any>  {
//     console.log(this.serviceUrl, this.config);
//     // first argument is URL, put config as second argument
//     return this.http.get<any>(this.serviceUrl, this.config);
//   }
// }




// export class AppComponent {
//   // https://jsonplaceholder.typicode.com/posts
//   // https://api.weather.gov/gridpoints/OKX/36,38/forecast
//   // https://api.weather.gov/points/39.7456,-97.0892#.XFix1VxKibg
//   // https://forecast.weather.gov/MapClick.php?lat=40.78176000000005&lon=-73.96471499999996#.XFix1VxKibg
//   readonly ROOT_URL = 'https://api.weather.gov/gridpoints/OKX/36,38/forecast';

//   // posts: Observable<any>;
//   posts: any;
//   constructor(private http: HttpClient) {}
//   results: any;

//   getPosts() {
//     const ua1 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ';
//     const ua2 = 'Chrome/71.0.3578.98 Safari/537.36';
//     const ua = ua1 + ua2;

//     const httpOptions = {
//       headers: new HttpHeaders({
//         'User-Agent':  ua
//       })
//     };
//     // const headers = new HttpHeaders().set([
//     //   'User-Agent': ua,
//     // 'Content-Type': 'application/json',
//     // console.log(this.http.get<any>(this.ROOT_URL, httpOptions));
//     // return this.http.get<any>(this.ROOT_URL, httpOptions);
//     this.posts = this.http.get(this.ROOT_URL, httpOptions).subscribe(
//       results => {
//       if (!results) {
//         console.log('some error');
//         return;
//       }
//       console.log('from http.get: ', results);
//       return results;
//     }
//     );

//     // console.log(this.results); // print undefined
//     console.log('this.posts = ', this.posts); // print undefined

//   }
// }



