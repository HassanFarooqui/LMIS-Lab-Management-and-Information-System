import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AppServiceService } from '../app-service.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

interface Package {
  TestId: number;
  TestName: string;
  TestTypeId: number
  TestCharges: number;
  TestDiscPerc: number;
  TestDiscAmount: number;
  NetCharges: number;
}

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {
  displayedColumns: string[] = ['TestID', 'TestName', 'TestCharges', 'TestDiscPerc', 'TestDiscAmount', 'NetCharges', 'Actions'];
  //displayedColumns: string[] = ['TestID', 'TestName' ];
  originalTestList = [];
  selectedItems = [];
  selectItemData: any;
  PackageName: any;
  Incentive: boolean = false;
  Active: boolean = false;
  IsPartial: boolean = false;
  CreditLimit: any;
  Totaldiscount: any;
  dropdownSettings: IDropdownSettings;
  multipleTestList = new FormControl();
  multiSelectDataSource = [];
  multiSelectId: any = [];
  TestListDataSource: Array<Package> = [];


  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.getTestList();

  }
  onItemSelect(item: any) {
    this.selectedItems.push(item.TestName);
    //this.TestListDataSource = new MatTableDataSource(this.selectedItems);
  }
  onSelectAll(items: any) {
   this.selectedItems.push(items.TestName);
  }

  getTestList() {
    this.appService.listOfTest().subscribe(
      response => {
        if (response.success) {
          if (response.model.length > 0) {
            this.originalTestList = response.model;
            response.model.forEach(element => {
              var obj = {
                TestId: element.TestId,
                TestName: element.TestId + ' | ' + element.TestName + ' | Rs: ' + element.TestCharges + ' | Disc: ' + element.TestDiscPerc
              }
              this.multiSelectDataSource.push(obj);
            });
          }
        }
      }
    );
  }

  addTestInList() {
    this.TestListDataSource = [];
    this.multiSelectId.forEach(element => {
      var obj = this.originalTestList.filter(x => x.TestId == element)[0];
      this.TestListDataSource.push(obj);
    });
  }

  calculateDiscount(discountPerc: any, element) {
    if(discountPerc > 100){
       discountPerc = 0;
    }
    else if (discountPerc != undefined && discountPerc > 0) {
      element.TestDiscAmount = Math.round((element.TestCharges / 100) * discountPerc);
      element.NetCharges = Math.round(element.TestCharges - element.TestDiscAmount);
    }
  }

  DeleteTestInGrid(){
    console.log('2');
  }
}
