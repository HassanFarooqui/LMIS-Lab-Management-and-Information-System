import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'FirstName','MobileNo', 'CNIC', 'Age', 'CreatedOn', 'Actions'];

  patientList : any[];
  constructor(private appService :  AppServiceService ) { }
  
  ngOnInit(): void {
    this.getPatientList();
  }


  getPatientList() {
    
      this.appService.listOfPatient().subscribe(
        response => {
          if (response.success) {
            this.patientList = response.model;
           // this.router.navigate(['dashboard']);
          }
        }
      )
    }

}
