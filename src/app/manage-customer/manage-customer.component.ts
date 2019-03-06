import { Component, OnInit } from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  customers: Customer = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://localhost:8080/api/v1/customers').subscribe(customers => {
    this.customers = customers;
  });
  }

}
