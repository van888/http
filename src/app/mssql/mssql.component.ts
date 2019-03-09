import { Component, OnInit } from '@angular/core';
import { mssql } from 'mssql';
import { HttpClient } from '@angular/common/http';
import { Incident } from './interface';

@Component({
  selector: 'app-mssql',
  templateUrl: './mssql.component.html',
  styleUrls: ['./mssql.component.css']
})


export class MssqlComponent implements OnInit {
    private config = {
        headers: {
          'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36'
        }
    };
    val2: any;
    incident: any;
    private serviceUrl = 'http://localhost:3001/incidents/2';

    constructor(private http: HttpClient ) { }

    ngOnInit() {
    }
    getIncident() {
        this.http.get<Incident>(this.serviceUrl)
        .subscribe(
            val => {
            this.incident = val[0];

            console.log('this.incident ====> ', this.incident);
            // var jsonObject = JSON.parse(jsonString)
        });
    }

}
