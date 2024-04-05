import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  url = "https://cs403.onrender.com"

  getList(){
    return this.http.get(this.url+"/get_all_data");
  }

  addList(body:any) {
    return this.http.post(this.url+"/express",body)
  }

  getDetail() {
    return this.http.get(this.url+"/getdetail")
  }
  
  addToken(body:any) {
    return this.http.post(this.url+"/id_token",body)
  }

  getLineUser() {
    return this.http.get(this.url+"/token")
  }

  getSecurityUser() {
    return this.http.get(this.url+"/security")
  }


  constructor(private http: HttpClient) { }
}
