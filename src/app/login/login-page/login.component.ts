import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { liff } from '@line/liff';
import { LoginService } from 'src/app/linelogin/login.service';
import { LineliffService } from 'src/app/linelogin/lineliff.service';

type UnPromise<T> = T extends Promise<infer X> ? X : T;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LineliffService],
})
export class LoginComponent implements OnInit {
  // profile: LIFFUserProfile;
  // message: string;
  // title = 'liff-demo';
  os: ReturnType<typeof liff.getOS>;
  profile!: UnPromise<ReturnType<typeof liff.getProfile>>;
 

  constructor() {
  }
  // ngOnInit() {
  //   new Promise<LIFFUserProfile>(resolve => {
  //     liff.init(data => {
  //       resolve(liff.getProfile());
  //     }, err => {
  //       // LIFF initialization failed
  //       // err.code;
  //     });
  //   })
  //     .then((profile) => {
  //       this.profile = profile;
  //       if (profile.displayName === 'CK Sun') {
  //         this.message = 'Hello';
  //       } else {
  //         this.message = 'Hi';
  //       }
  //     });
  // }
  

  ngOnInit(): void {
    liff.init({liffId:'2004090496-dKy6vmJy'}).then(()=>{
      this.os = liff.getOS();
      if(liff.isLoggedIn()){
        liff.getProfile().then(profile => {
          console.log(profile)
          this.profile = profile;
        }).catch(console.error);
      }else{
        liff.login()
      }
    }).catch(console.error);
  }

  // liff_open(): void {
  //   liff.init({
  //     liffId: '2004090496-dKy6vmJy'
  //   }).then(() => {
  //       this.os = liff.getOS();
  //       if (liff.isLoggedIn()) {
  //         liff.getProfile().then(profile => {
  //           this.profile = profile;
  //           console.log(this.profile)
  //         })
  //         .catch(console.error);
  //       } else {
  //         liff.login();
  //       }
  //     })
  //     .catch(console.error);
  //   console.log(JSON.stringify(this.profile));
  // }
}
