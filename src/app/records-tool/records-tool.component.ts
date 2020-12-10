import { Component, OnInit } from '@angular/core';
import { RecordsDataService } from '../records-data.service';

@Component({
  selector: 'app-records-tool',
  templateUrl: './records-tool.component.html',
  styleUrls: ['./records-tool.component.css']
})
export class RecordsToolComponent implements OnInit {
  username :string;
  time:number;
  date:Date;
  mood:string;
  
  constructor(
    private fbService: RecordsDataService // inject service
  ) { }

  ngOnInit( ): void {}

  add() {
    console.log(this.username, this.time, this.date, this.mood);
    this.fbService.submit(this.username, this.time, this.date, this.mood)
  }

}
