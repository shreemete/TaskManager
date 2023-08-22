import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = "http://127.0.0.1:8000/user/"
  config = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
  constructor(private http: HttpClient) { }
  users(): Observable<any> {
    return this.http.get(this.url + "user/", { headers: this.config })
  }
  tasks(): Observable<any> {
    return this.http.get(this.url + "task/", { headers: this.config })
  }
  saveUser(data: any): Observable<any> {
    // console.log(data);
    return this.http.post(this.url + "user/", data, { headers: this.config })
  }
  saveTask(data: any): Observable<any> {
    // console.log(data);
    return this.http.post(this.url + "task/", data, { headers: this.config })
  }
  deleteTask(id: any) {
    return this.http.delete(this.url + "task/" + id + "/", { headers: this.config })
  }
  getTaskById(id: any) {
    return this.http.get(this.url + "task/" + id + "/", { headers: this.config })
  }
  updateTask(data: any, id: any) {
    return this.http.put(this.url + "task/" + id + "/", data, { headers: this.config })

  }
}
