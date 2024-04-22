import { Component, OnInit, ViewChild } from '@angular/core';
import { liff } from '@line/liff';

import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

type UnPromise<T> = T extends Promise<infer X> ? X : T;

const data: ParcelData[] = []

export interface ParcelData {
  number: number;
  phone: string;
  name: any;
  date: Date;
  company: any;
  take: any;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
  
export class StudentComponent implements OnInit  {
  os: ReturnType<typeof liff.getOS>;
  profile!: UnPromise<ReturnType<typeof liff.getProfile>>;
 
  idToken: string = '';

  constructor(private router: Router, private service: ServiceService) {
    this.dataDisplay = new MatTableDataSource(data);
  }
  display: any[] = ['number', 'phone', 'name', 'date', 'company', 'take'];
  dataDisplay: MatTableDataSource<ParcelData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.liff_token()
  }

  liff_token(): void {
    liff.init({
      liffId: '2004090496-dKy6vmJy'
    }).then(() => {
      this.os = liff.getOS();
      if (liff.isLoggedIn()) {       
        const idToken = liff.getIDToken();
        if (idToken) {
          this.idToken = idToken.toString();
          console.log(this.idToken);
        }
      } else {
        liff.login();
      }
    }).catch(console.error);
  }

  getData() {
    let test: any = []
    this.service.getParcel(this.idToken).subscribe(res => {
      test =  res
      console.log(Object.values(test["data"]))
      this.convert(res)
    })
  }

  convert(data: any) {
    console.log(Object.values(data["data"]).length)
    let list = []
    for (let i = 0; i < Object.values(data["data"]).length; i++){
      // if (data["data"][i]["take"] == false) {
      //   data["data"][i]["take"] = 'ยังไม่ได้รับพัสดุ'
      // }
      list.push({
        "number": data["data"][i]["number"],
        "name": data["data"][i]["name"],
        "phone": data["data"][i]["phone"],
        "date": data["data"][i]["date"],
        "company": data["data"][i]["company"],
        "take": data["data"][i]["take"]
      })
      // this.dataDisplay.data = list
      console.log(list) 
    }
  }

  ngAfterViewInit() {
    this.dataDisplay.paginator = this.paginator;
    this.dataDisplay.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataDisplay.filter = filterValue.trim().toLowerCase();

    if (this.dataDisplay.paginator) {
      this.dataDisplay.paginator.firstPage();
    }
  }

}