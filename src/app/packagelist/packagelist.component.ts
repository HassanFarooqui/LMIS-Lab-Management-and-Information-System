import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddpackageComponent } from '../addpackage/addpackage.component';
@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})
export class PackagelistComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddPackage(): void{
    const dialogRef = this.dialog.open(AddpackageComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
