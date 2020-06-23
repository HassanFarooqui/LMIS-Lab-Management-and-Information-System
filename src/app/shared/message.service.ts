import { Injectable } from '@angular/core';
//import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';

//import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor( public snackBar: MatSnackBar) { }

  showMessage(message: string, duration: number, style: string = "") {
		duration = duration ? duration : 5000;
		style = style ? "snackbar-" + style : "snackbar-default";
  		this.snackBar.open(message, '', {
			duration: duration,
			panelClass: [style]
		});
  	}

// 	confirmDialog(operation: string, message: string): any {
// 		let promise = new Promise((resolve, reject) => {
// 			let dialogRef = this.dialog.open(ConfirmDialogComponent, {
// 				width: '450px',
// 				data: { operation: operation, message: message }
// 			});

// 			dialogRef.afterClosed().subscribe(result => {
// 				if (result) {
// 					resolve();
// 				}
// 				else {
// 					reject();
// 				}
// 			});
// 		});
// 		return promise;
// 	}
 }
