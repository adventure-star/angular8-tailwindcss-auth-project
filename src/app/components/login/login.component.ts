import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { setLocalToken } from 'src/app/services/general';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit() {
  }
  onClickSubmit(data: any) {
    this.authService.login(data.email, data.password)
      .subscribe(data => {

        if (data.errors) {
          console.log(data.errors);
        } else {
          setLocalToken(data);
          this.router.navigate(['/home']);
        }

      });
  }

}
