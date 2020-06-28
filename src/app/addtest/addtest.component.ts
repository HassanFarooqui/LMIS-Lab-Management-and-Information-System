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
  TestName: any;
  TestCharges: any;
  TestDiscPerc : number;
  TestDiscAmount : number;
  TestNetcharges : number;
  constructor(private appService: AppServiceService,
    private snackbar: MatSnackBar,
    private routeParams: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
  }

  calculateDiscount(){
    if(this.TestDiscPerc != undefined && this.TestDiscPerc > 0){
      this.TestDiscAmount =Math.round((this.TestCharges/100)*this.TestDiscPerc);
      this.TestNetcharges = Math.round(this.TestCharges - this.TestDiscAmount); 
    }
  }

}
