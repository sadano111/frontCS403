import { Component, Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogerror',
  templateUrl: './dialogerror.component.html',
  styleUrls: ['./dialogerror.component.css']
})
export class DialogerrorComponent {
  constructor(private dialog: MatDialog) {}

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'คุณไม่สามารถเข้าถึงหน้านี้ได้' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
} 
