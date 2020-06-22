import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { FormControl } from '@angular/forms';

// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
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
  Diabetes: any = "0";
  TB: any = "0";
  Hepatitis: any = "0";
  Fever: any = "0";
  Ohter: any = "0";
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

  date = new FormControl(new Date());
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.getReferralTypeList();
    this.getPartnerNamesList();
    this.getPanelNamesList();
    this.getGenderNamesList();
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
    this.appService.addPatient(this.firstName, this.LastName, this.guardianName, this.age, this.genderId, this.mobileNo, this.cNIC, this.address, this.Diabetes, this.TB, this.Hepatitis, this.Fever, this.Ohter, this.Department, this.EmpRefCode, this.ReferredTypeId, this.PratnerId, this.PanelMasterId, this.Status).subscribe(
      resp => {
        console.log(resp);
      },
      error => {

      }
    );

  }



}
