import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../../services/notifications/notifications.service";
import {NotificationModel} from "../../models/notifications/notification.Model";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private signalRService: NotificationsService) { }
  isVisible: boolean = false;
  notification: NotificationModel;

  ngOnInit(): void {
    this.notificationsListener();
  }

  public notificationsListener = () => {
    this.signalRService.hubConnection.on('notify', (data: NotificationModel) => {
      this.notification = data;
      this.isVisible = true;
      setTimeout(() => {
        this.clearNotification();
      }, 5000);
    });
  }

  clearNotification(): void {
    this.isVisible = false;
    this.notification.content = 'reset';
    this.notification.type = '';
  }
}
