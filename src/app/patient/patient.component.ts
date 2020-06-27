import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'FirstName','MobileNo', 'CNIC', 'Age', 'CreatedOn', 'Actions'];

  patientList : any[];
  constructor(private appService :  AppServiceService,
              private router: Router,
              private spinnerService : NgxSpinnerService) {
                
              }
  
  ngOnInit(): void {
    this.getPatientList();

  }


  getPatientList() {
    this.spinnerService.show();
      this.appService.listOfPatient().subscribe(
        response => {
          if (response.success) {
            this.patientList = response.model;
           // this.router.navigate(['dashboard']);
           this.spinnerService.hide();
          }
        }
      )
    }

    Add(){
      let routerUrl = '/addPatient/'+ 0;
      this.router.navigate([routerUrl])
    }

    Edit(id){
      let routeUrl = '/addPatient/' + id;
      this.router.navigate([routeUrl]);
    }

    
}
