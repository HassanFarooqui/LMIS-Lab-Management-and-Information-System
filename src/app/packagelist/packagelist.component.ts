import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddpackageComponent } from '../addpackage/addpackage.component';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';

import { AppServiceService } from '../app-service.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})
export class PackagelistComponent implements OnInit {

  displayedColumns: string[] = ['TestID', 'TestName' ,'TestCharges', 'TestDiscPerc', 'TestDiscAmount' , 'NetCharges', 'Actions'];
  testList : any[];
  TestListDataSource = new MatTableDataSource(this.testList);
  packageList : any[];
  dataSource : any;

  constructor( public dialog: MatDialog,
    private spinnerService: NgxSpinnerService,
    private appService: AppServiceService) { }

  ngOnInit(): void {
  }

  AddPackage(): void{
    const dialogRef = this.dialog.open(AddpackageComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getTestList(){
    this.spinnerService.show();
    this.appService.listOfPackages().subscribe(
      response => {
        if(response.success){
              this.testList = response.model;
              this.TestListDataSource = new MatTableDataSource(this.testList);
              this.spinnerService.hide();
        }
      }
    );
  }
}
