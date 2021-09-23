import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { RemoveCustomer } from '../../actions/customer.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public customer$: Observable<Customer[]>
  public loggedCustomer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private store: Store, private router: Router) {
    this.customer$ = this.store.select(state => state.customer.customer);
  }

  ngOnInit(): void {
    this.customer$.subscribe((res: Customer[]) => {
      this.loggedCustomer.firstName = res[0]?.firstName;
      this.loggedCustomer.lastName = res[0]?.lastName;
      this.loggedCustomer.email = res[0]?.email;
      this.loggedCustomer.password = res[0]?.password;
    })
  }

  profile() {
    this.router.navigate(['main/profile']);
  }

  news() {
    this.router.navigate(['main/news']);
  }

  logout() {
    this.removeCustomer(this.loggedCustomer)
    this.router.navigate(['login']);
  }

  removeCustomer(customer: Customer) {
    this.store.dispatch(new RemoveCustomer(customer))
  }

}
