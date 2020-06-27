import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from '../shared/message.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PatientComponent } from '../patient/patient.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientList: any[];
  ReferrelList: any[];
  PartnerList: any[];
  PanelList: any[];
  GenderList: any[];
  selected: any;
  male: boolean = false;
  Status: boolean = true;
  Diabetes: boolean = false;
  //Diabetes: any = "0";
  TB: boolean = false;
  // TB: any = "0";
  Hepatitis: boolean = false;
  //Hepatitis: any = "0";
  Fever: boolean = false;
  //Fever: any = "0";
  Other: boolean = false;
  //Other: any = "0";
  firstName: string;
  guardianName: string;
  age: any;
  mobileNo: any;
  cNIC: any;
  address: any;
  ddlGender: any;
  genderId: number;
  ReferredTypeId: number;
  PratnerId: number = 0;
  PanelMasterId: number = 0;
  Address: string;
  Date: string;
  LastName: string;
  Department: string;
  EmpRefCode: string;
  PatientID: number=0;
  ReferringPartnerID: any;

  date = new FormControl(new Date());
  constructor(private appService: AppServiceService,
              private snackbar: MatSnackBar,
              private msg: MessageService,
              private routeParams: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.getReferralTypeList();
    this.getPartnerNamesList();
    this.getPanelNamesList();
    this.getGenderNamesList();
    this.PatientID = +this.routeParams.snapshot.paramMap.get('id');
    if  (this.PatientID > 0){
      this.getPatientRec();
    }
  }

  getPatientRec(){
    this.appService.getPatientRecbyId(this.PatientID).subscribe(
      Response =>{
        if(Response.success){
          this.firstName = Response.model[0].FirstName;
          this.LastName = Response.model[0].LastName;
          this.guardianName = Response.model[0].GuardianName;
          this.age = Response.model[0].Age;
          this.genderId = Response.model[0].GenderID;
          this.mobileNo = Response.model[0].MobileNo;
          this.address = Response.model[0].Address;
          this.cNIC = Response.model[0].CNIC;
          this.Diabetes = Response.model[0].Diabetes;
          this.TB = Response.model[0].TB;
          this.Hepatitis = Response.model[0].Hepatitis;
          this.Fever = Response.model[0].Fever;
          this.Other = Response.model[0].Other;
          this.Department = Response.model[0].DepartmentName;
          this.EmpRefCode = Response.model[0].EmpReferrenceNo;
          this.PanelMasterId = Response.model[0].panelID;
          this.ReferringPartnerID = Response.model[0].ReferringPartnerID;
          this.ReferredTypeId = Response.model[0].ReferredTypeId;
          //
        }
    })
  }
  getReferralTypeList() {
    this.appService.listOfReferralType().subscribe(
      Response => {
        if (Response.success) {
          this.ReferrelList = Response.model;
        }
      }
    )
  }

  getPartnerNamesList() {
    this.appService.listOfPartners().subscribe(
      Response => {
        if (Response.success) {
          this.PartnerList = Response.model;
        }
      }
    )
  }

  getPanelNamesList() {
    this.appService.listOfPanels().subscribe(
      Response => {
        if (Response.success) {
          this.PanelList = Response.model;
        }
      }
    )
  }

  getGenderNamesList() {
    this.appService.listOfGender().subscribe(
      Response => {
        if (Response.success) {
          this.GenderList = Response.model;
        }
      }
    )
  }

  RefferIdSelected() {
    this.PratnerId = 0;
  }

  AddPatient() {
    this.appService.addOrEditPatient(this.PatientID, this.firstName, this.LastName, this.guardianName, this.age, this.genderId, this.mobileNo, this.cNIC, this.address, this.Diabetes, this.TB, this.Hepatitis, this.Fever, this.Other, this.Department, this.EmpRefCode, this.ReferredTypeId, this.PratnerId, this.PanelMasterId, this.Status).subscribe(
      Response => {
        if (Response.success) {
          this.snackbar.open(Response.message, null, {
            duration: 5000,
          });
          this.router.navigate(['patient']);
        }
        else{
          this.snackbar.open(Response.message, null,{
            duration: 5000,
          });
        }
      },
      error => {

      }
    );

  }



}
