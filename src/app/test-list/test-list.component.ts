import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {MatTableModule, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  
   displayedColumns: string[] = ['TestID', 'TestName' ,'TestCharges', 'TestDiscPerc', 'TestDiscAmount' , 'NetCharges', 'Actions'];
   
  testList : any[];
  dataSource : any;

  constructor(private appService: AppServiceService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private MatTableModule: MatTableModule) { }
   
    TestListDataSource = new MatTableDataSource(this.testList);
   
  ngOnInit(): void {
    this.getTestList();    
  }
  
  applyFilter(filterValue: string) {
    this.TestListDataSource.filter = filterValue.trim().toLowerCase();
  }

  Add(){
    let routerUrl = '/addTest';
    this.router.navigate([routerUrl])
  }

  Edit(){
  }

  getTestList(){
    this.spinnerService.show();
    this.appService.listOfTest().subscribe(
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
