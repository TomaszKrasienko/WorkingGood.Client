import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "./core/services/notifications/notifications.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WorkingGood.Client';

  constructor(public signalRService: NotificationsService) {
  }

  ngOnInit() {
    this.signalRService.startConnection();
    // this.signalRService.addNotificationsListener();
  }
}
