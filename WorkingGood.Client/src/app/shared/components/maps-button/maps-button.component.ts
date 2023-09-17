import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maps-button',
  templateUrl: './maps-button.component.html',
  styleUrls: ['./maps-button.component.css']
})
export class MapsButtonComponent implements OnInit {
  @Input() address: string | undefined = '';
  constructor() { }

  ngOnInit(): void {
  }

  redirectToMaps(): void{
    if(this.address !== undefined) {
      const googleMapsUrl: string = `https://www.google.com/maps?q=${this.address}`;
      window.open(googleMapsUrl);
    }
  }

}
