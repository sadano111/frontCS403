import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail-page/detail.component';
import { HistoryComponent } from './history/history-page/history.component';
import { UploadComponent } from './upload/upload-page/upload.component'
import { LoginComponent } from './login/login-page/login.component';
import { ExpressComponent } from './express/express-page/express.component';


const routes: Routes = [
  {
    path: 'detail', loadChildren: () =>
      import('./detail/detail.module').then(min => min.DetailModule),component: DetailComponent
  },
  {
    path: 'history', loadChildren: () =>
      import('./history/history.module').then(min => min.HistoryModule),component: HistoryComponent
  },
  {
    path: 'upload', loadChildren: () =>
      import('./upload/upload.module').then(min => min.UploadModule),component: UploadComponent
  },
  {
    path: 'expresspage', loadChildren: () =>
      import('./express/express.module').then(min => min.ExpressModule),component: ExpressComponent
  },
  {
    path: '', loadChildren: () =>
      import('./login/login.module').then(min => min.LoginModule),component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
