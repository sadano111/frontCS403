import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(private router: Router) { }

  public firstname:any = ""
  public lastname:any = ""
  public roles:any = ""

  ngOnInit(): void {
    this.getLogin()
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  getLogin() {
    this.firstname = localStorage.getItem("firstname")
    this.lastname = localStorage.getItem("lastname")
    this.roles = localStorage.getItem("roles")
    console.log(this.firstname)
  }

  detailBt() {
    this.router.navigateByUrl('/detail');
  };

  historyBt() {
    this.router.navigateByUrl('/history');
  };

  uploadBt() {
    this.router.navigateByUrl('/upload');
  };
  expressBt() {
    this.router.navigateByUrl('/expresspage');
  };
  adduserBt() {
    this.router.navigateByUrl('/singup');
  };
  summaryBt() {
    this.router.navigateByUrl('/summary');
  }
}
