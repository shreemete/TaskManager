import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent {
  classes = "active"
  btn1() {
    this.classes = "notActive"
  }
  btn2() {
    this.classes = "active"
  }

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
