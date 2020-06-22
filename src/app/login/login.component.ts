import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  IsAuthenticUser : boolean =  false;
  constructor(private appService: AppServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.userName != null && this.password != null) {
      this.appService.login(this.userName, this.password).subscribe(
        response => {
          if (response.success) {
            this.IsAuthenticUser = true;
            // this.router.navigate(['dashboard']);
          }
        }
      )
    }

  }
}
