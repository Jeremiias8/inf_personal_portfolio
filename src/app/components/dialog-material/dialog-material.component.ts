import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  footballer: string;
  name: string;
}

@Component({
  selector: 'app-dialog-material',
  templateUrl: './dialog-material.component.html',
  styleUrls: ['./dialog-material.component.css']
})
export class DialogMaterialComponent implements OnInit {

  footballer: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMaterialComponent, {
      width: '250px',
      data: { name: this.name, footballer: this.footballer },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.footballer = result;
    });
  }

  ngOnInit(): void {
  }

}
