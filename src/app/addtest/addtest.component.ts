import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  constructor(private appService: AppServiceService,
    private snackbar: MatSnackBar,
    private routeParams: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
  }

}
