import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AppServiceService } from '../app-service.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
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
  dropdownSettings: IDropdownSettings;


  constructor(private appService: AppServiceService) { }
  TestListDataSource = new MatTableDataSource(this.selectedItems);
  ngOnInit(): void {
    this.getTestList(); 
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'TestId',
      textField: 'TestName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item.TestName);
    console.log(this.selectedItems);
    this.TestListDataSource = new MatTableDataSource(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  getTestList(){    
    this.appService.listOfTest().subscribe(
      response => {
        if(response.success){
              this.dropdownList = response.model;
        }
      }
    );
  }
}
