import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  customersCount: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/api/v1/customer').subscribe(value => {
      this.customersCount = value.lenght;
    });

  }

}
