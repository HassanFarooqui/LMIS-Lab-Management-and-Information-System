import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AppServiceService } from '../app-service.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {
  displayedColumns: string[] = ['TestID', 'TestName' ,'TestCharges', 'TestDiscPerc', 'TestDiscAmount' , 'NetCharges', 'Actions'];
  //displayedColumns: string[] = ['TestID', 'TestName' ];
  originalTestList = [];
  selectedItems = [];
  selectItemData : any;
  PackageName : any;
  Incentive : boolean = false;
  Active : boolean = false;
  IsPartial : boolean = false;
  CreditLimit : any;
  Totaldiscount : any;
  dropdownSettings: IDropdownSettings;
  multipleTestList = new FormControl();
  multiSelectDataSource = [];
  multiSelectId : any = [];


  constructor(private appService: AppServiceService) { }
  TestListDataSource : any = []
  ngOnInit(): void {
    this.getTestList(); 
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
 
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item.TestName);
   

    this.TestListDataSource = new MatTableDataSource(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  getTestList(){    
    this.appService.listOfTest().subscribe(
      response => {
        if(response.success){
        if(response.model.length > 0){
          this.originalTestList = response.model;
                response.model.forEach(element => {
                  var obj = {
                    TestId : element.TestId,
                    TestName: element.TestId + ' | ' + element.TestName + ' | Rs: ' + element.TestCharges + ' | Disc: ' + element.TestDiscPerc                 
                   } 
                   this.multiSelectDataSource.push(obj);
                 });
              }
        }
      }
    );
  }

  addTestInList(){
    this.TestListDataSource = [];
    this.multiSelectId.forEach(element => {
     var obj = this.originalTestList.filter(x => x.TestId == element)[0];
     this.TestListDataSource.push(obj);     
    });
  }

  calculateDiscount(){
    
    
    if (this.TestListDataSource.TestDiscPerc != undefined && this.TestListDataSource.TestDiscPerc > 0){
      this.TestListDataSource.TestDiscAmount = Math.round((this.TestListDataSource.TestCharges / 100) * this.TestListDataSource.TestDiscPerc);
      this.TestListDataSource.TestNetcharges = Math.round(this.TestListDataSource.TestCharges - this.TestListDataSource.TestDiscAmount);
    } 
  }
}
