import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.JumiaTask;

  constructor(private http: HttpClient, private router: Router) {
  }


  getAll(country: string, state: string) {

    let url = this.baseUrl + '/getAll/?country=' + country + '&state=' + state;
    return this.http.get(url);
  }


}
