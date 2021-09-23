import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Customer } from '../../interfaces/customer';
import { Store } from '@ngxs/store';
import { SetCustomer } from 'src/app/actions/customer.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginError: boolean
  public loginForm: FormGroup;

  constructor(private store: Store, private router: Router, private loginService: LoginService) {
    this.router = router
    this.loginError = false;
    this.loginForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.loginForm.controls.email.setValue("test@gmail.com");
    this.loginForm.controls.password.setValue("test");
  }

  submit(data: Customer): void {
    this.loginService.login(data).subscribe((res: Customer) => {
      if (res === null) {
        this.loginError = true;
      }
      else {
        this.setCustomer(res);
        this.router.navigate(['/main/news'])
      }
    });
  }

  setCustomer(customer: Customer) {
    this.store.dispatch(new SetCustomer(customer))
  }
}
