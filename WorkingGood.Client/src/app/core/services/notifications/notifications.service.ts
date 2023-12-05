import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  public hubConnection: HubConnection;

  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:10002/working-good")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(error => console.log(`Error while starting broadcasting connection ${error}`));
  }

  public addNotificationsListener = () => {
    this.hubConnection.on("notify", (data) => {
      console.log(data);
    })
  }
  constructor() {

  }
}
