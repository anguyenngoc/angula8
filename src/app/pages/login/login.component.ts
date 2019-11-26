import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Users } from 'src/app/shared/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide = true;

  public loginForm: FormGroup;
  public loading = false;
  // public submitted = false;
  public returnUrl: string;
  public error: string;
  public userss: Users[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.formToLogin();
  }

  formToLogin() {
    this.loginForm = this.formBuilder.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
    });

    // tslint:disable-next-line:no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  // getter for assecc controller
  // tslint:disable-next-line:no-unused-expression
  get f() { return this.loginForm.controls; }

  // // validate
  // validateFormLogin() {
  //   this.validateService.getErrorMessage();
  // }
  getErrorAccount() {
    return this.f.account.hasError('required') ? 'Bạn chưa nhập tài khoản' : '';
  }
  getErrorPassword() {
    return this.f.password.hasError('required') ? 'Bạn chưa nhập mật khẩu' : '';
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

  }
}
