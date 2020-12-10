import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecordsDataService {
  api_url = 'http://localhost:3000/api/records/';
  recordsList = [];
  recordObs = new Subject();

  constructor(private http: HttpClient) { }

  submit(username :String, time :Number, date :Date,mood:String) {
    const recordItem = {
      username: username,
      time:time,
      date:date,
      mood:mood
    }
    this.http.post<any>(this.api_url, recordItem)
      .subscribe(data => {
        this.recordsList.push(data);
        this.recordObs.next([...this.recordsList])
        console.log(data);
      })
  }

  getList() {
    this.http.get<any>(this.api_url).subscribe(data => {
      this.recordsList = data;
      this.recordObs.next([...this.recordsList]);
    })
  }

  getSubscription(): any {
    return this.recordObs.asObservable();
  }

  

  forceReload() {
    this.getList();
    this.recordObs.next([...this.recordsList]);
  }

}
