import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail-page/detail.component';
import { HistoryComponent } from './history/history-page/history.component';
import { UploadComponent } from './upload/upload-page/upload.component'
import { LoginComponent } from './login/login-page/login.component';
import { ExpressComponent } from './express/express-page/express.component';
import { UserLoginComponent } from './user-login/userLogin/user-login.component';
import { UserRegisterComponent } from './user-register/userRegister/user-register.component';
import { SummaryComponent } from './summary/summary/summary.component';
import { SuccesspageComponent } from './successpage/successpage/successpage.component';


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
    path: 'linelogin', loadChildren: () =>
      import('./login/login.module').then(min => min.LoginModule),component: LoginComponent
  },
  {
    path: '', loadChildren: () =>
      import('./user-login/user-login.module').then(min => min.UserLoginModule),component: UserLoginComponent
  },
  {
    path: 'singup', loadChildren: () =>
      import('./user-register/user-register.module').then(min => min.UserRegisterModule),component: UserRegisterComponent
  },
  {
    path: 'summary', loadChildren: () =>
      import('./summary/summary.module').then(min => min.SummaryModule),component: SummaryComponent
  },
  {
    path: 'success', loadChildren: () =>
      import('./successpage/successpage.module').then(min => min.SuccesspageModule),component: SuccesspageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
