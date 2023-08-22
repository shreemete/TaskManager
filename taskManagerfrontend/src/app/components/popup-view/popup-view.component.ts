import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-view',
  templateUrl: './popup-view.component.html',
  styleUrls: ['./popup-view.component.css']
})


export class PopupViewComponent {
  @Input() task: any = {}

  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.closePopup.emit(false);
  }


}
