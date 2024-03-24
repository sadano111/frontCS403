import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
  

export class DetailComponent {
  constructor(private router: Router, private service:ServiceService) { }

  addList() {
    let data = {
      "name": this.name,
      "phone": this.phone,
      "role": this.selectedRole,
      "express": this.selectedExpress,
      "parcel": Number (this.parcel)
    }
    console.log(data)
    this.service.addList(data).subscribe(res => {
      console.log(data)
    })
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

  // ตัวแปร สำหรับเลือ role และ company
  selectedExpress: string = ""
  selectedRole: string = ""

  name: string = ""
  phone: string = ""
  parcel: number = 0
  
  express = [
    { value: 'flash', viewValue: 'Flash Express' },
    { value: 'kerry', viewValue: 'Kerry Express' },
    { value: 'thai-post', viewValue: 'Thai Post' },
    { value: 'best', viewValue: 'Best Express' },
    { value: 'jnt', viewValue: 'J&T Express' },
  ];

  roles = [
    { value: 'security', viewValue: 'ยาม' },
    { value: 'transport', viewValue: 'พนักงานส่งของ' },
  ];
}
