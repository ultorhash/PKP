import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
    
  }

}
