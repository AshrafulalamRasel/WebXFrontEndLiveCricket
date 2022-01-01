import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../service/users.service';
import {Router} from '@angular/router';
import {AuthTokenHttpService} from '../../../../share/auth/auth-token-http.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private router: Router,
              private authTokenHttpService: AuthTokenHttpService) { }


  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return true;
    }
    this.userService.login(this.f.userName.value, this.f.password.value)
      .subscribe(
        data => {
          if (this.authTokenHttpService.getAuthTokenScopes()[0] === 'SYSTEM_USER') {
            localStorage.setItem('loginType', 'user-login');
            this.router.navigate(['/dashboard']);
          }
        },
        error => {

          if (error.status === 403) {
          }
          if (error.status === 500) {
          }
        });
  }
}
