import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../Services/CustomerService';
import {Customer} from '../model/Customer';
import {Country} from '../model/Country';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  body: any;
  data: Array<Customer> = new Array<Customer>();
  pageNumber: number = 1;
  pageSize: number = 9;
  totalCount = 0;
  state: string = '';
  country: string = '';
  countryList: Array<Country> = [{id: 1, country: 'Cameroon'}, {id: 2, country: 'Ethiopia'},
    {id: 3, country: 'Morocco'}, {id: 4, country: 'Mozambique'}, {id: 5, country: 'Ugandan'},];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAllCustomers();
  }


  getAllCustomers() {
    this.customerService.getAll(this.country, this.state).subscribe(res => {
        this.body = res;
        this.data = this.body;
        this.totalCount = this.body.totalRecords;
      }, error =>
        console.log(error)
    );
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  changeState() {
    this.pageNumber = 1;
    this.getAllCustomers();
  }


  changeCountry() {
    this.state = '';
  }

  clearAll() {
    this.state = '';
    this.country = '';
    this.pageNumber = 1;
    this.getAllCustomers();
  }
}
