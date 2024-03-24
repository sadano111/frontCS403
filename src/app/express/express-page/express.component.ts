import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ServiceService } from 'src/app/service.service';

export interface expressData {
  date: Date;
  name: any;
  phone: any;
  express: any;
  parcel: any;
}

const data: expressData[] = []

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.css']
})

export class ExpressComponent {

  display: any[] = ['date', 'name', 'phone', 'express', 'parcel'];
  // dataDisplay: MatTableDataSource<expressData>;
  dataDisplay = new MatTableDataSource<expressData>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  
  ngOnInit(): void {
    this.getData()
  }

  testData: any[] = []
  
  getData() {
    let test:any = []
    this.service.getDetail().subscribe(res => {
      for (let i = 0; i < Object.values(res)[1].length; i++){
        console.log("1")
        this.testData.push(Object.values(res)[1][i])
      }
      test = res
      console.log(this.testData)
      this.convert(this.testData)
    })
  }

  convert(data: any) {
    console.log(data[2]["name"])
    let list = []
    for (let i = 0; i < data.length; i++){
      list.push({
        "date": new Date(),
        "name": data[i]["name"],
        "phone": data[i]["phone"],
        "express": data[i]["express"],
        "parcel": data[i]["parcel"]
      })
      this.dataDisplay.data = list
      console.log(this.dataDisplay.data)
      console.log(list)
    }
  }

  constructor(private router: Router, private service: ServiceService) { 
    this.dataDisplay = new MatTableDataSource<expressData>(data);

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
