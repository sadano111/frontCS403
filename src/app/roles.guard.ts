import { CanActivateFn, Router } from '@angular/router';
import { DialogComponent } from './dialogerror/dialogerror.component';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export const rolesGuard: CanActivateFn = (route, state) => {
  const roles = localStorage.getItem("roles");
  const dialog = Inject(MatDialog);

  if (roles == "addmin") {
    return true
  } else {
    const dialogRef = dialog.open(DialogComponent, {
      width: '250px',
      data: { message: 'คุณไม่สามารถเข้าถึงหน้านี้ได้' }
    });
    return false
  }
};
