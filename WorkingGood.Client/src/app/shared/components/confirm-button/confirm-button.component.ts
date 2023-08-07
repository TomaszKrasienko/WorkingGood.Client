import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.css']
})
export class ConfirmButtonComponent implements OnInit {
  @Output() confirmEmitter = new EventEmitter<void>();
  @Input() isValid = true;
  constructor() { }

  ngOnInit(): void {
  }

  confirm(): void{
    this.confirmEmitter.emit();
  }

}
