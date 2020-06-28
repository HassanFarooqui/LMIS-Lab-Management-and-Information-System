import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from '../shared/message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  IsAuthenticUser: boolean = false;
  constructor(private appService: AppServiceService,
    private router: Router,
    private snackbar: MatSnackBar,
    private msg: MessageService) { }

  ngOnInit(): void {
    console.log("login ");
  }

  checkLogin() {
    if (this.userName != null && this.password != null) {
      this.appService.login(this.userName, this.password).subscribe(
        response => {
          if (response.success) {
            this.snackbar.open(response.message, 'Login successfully', {
              duration: 2000,
            });
            this.IsAuthenticUser = true;
          }
          else{
            this.snackbar.open(response.message, 'Incorrect Id or Password',{
              duration: 2000,
            });
          }
        }
      )
    }

  }
}
