import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        nombreUsuario: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required,
        Validators.minLength(6),
      Validators.maxLength(20)])
      }
    )
  }

  sendCredentials(): void {
    const body = this.loginForm.value;
    this.authService.submitLogin(body)
    .subscribe((response) => {
      this.router.navigate(['/admin'])
    })
  }
  

}
