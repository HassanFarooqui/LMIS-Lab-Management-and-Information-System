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
  dropdownList = [];
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


  constructor(private appService: AppServiceService) { }
  TestListDataSource = new MatTableDataSource(this.selectedItems);
  ngOnInit(): void {
    this.getTestList(); 
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
 
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item.TestName);
    
    console.log(this.dropdownList);

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
                response.model.forEach(element => {
                  var obj = {
                    TestId : element.TestId,
                    TestName: element.TestName + '' + element.TestTypeId
                   
                   } 
                   this.multiSelectDataSource.push(obj);
                 });
              }
        }
      }
    );
  }

  addTestInList(){
     this.selectedItems.push(this.multipleTestList.value);
     this.selectItemData = this.multiSelectDataSource.find(s => s.TestId == this.selectedItems);
  }
}
