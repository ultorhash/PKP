import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators'
import { Store } from '@ngxs/store';
import { Customer } from '../interfaces/customer';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private customer$: Observable<Customer>
    private isLogged: boolean;

    constructor(private store: Store) {
        this.customer$ = this.store.select(state => state.customer.customer);
        this.isLogged = false;
    }

    isLoggedIn() {
        this.customer$.subscribe((res) => {
            if ((res as unknown as Customer[]).length) this.isLogged = true;
        })
        return of(this.isLogged).pipe(delay(500));
    }
}