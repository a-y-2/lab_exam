import { Component, OnInit } from '@angular/core';
import { RecordsDataService } from '../records-data.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit {

  public subscription;
  public recordList;

  constructor(
    private fbService: RecordsDataService // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.fbService.getSubscription().subscribe(msg => {
      this.recordList = msg;
    });
    this.fbService.forceReload();
  }


}
