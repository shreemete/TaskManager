import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-popup-update',
  templateUrl: './popup-update.component.html',
  styleUrls: ['./popup-update.component.css']
})
export class PopupUpdateComponent {
  @Input() task: any = {}
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
  taskGrp = new FormGroup({
    task_id: new FormControl(this.task.task_id),
    taskName: new FormControl(this.task.taskName),
    taskDetails: new FormControl(this.task.taskDetails),
    user: new FormControl(this.task.user),
  });
  constructor(private taskData: UserServiceService) { }
  ngOnChanges() {
    this.taskGrp = new FormGroup({
      task_id: new FormControl(this.task.task_id),
      taskName: new FormControl(this.task.taskName),
      taskDetails: new FormControl(this.task.taskDetails),
      user: new FormControl(this.task.user),
    });
  }
  updateTask(ele: any) {
    // console.log(ele.value);
    this.taskData.updateTask(ele.value, this.task.task_id).subscribe();
    this.close()
  }
  close() {
    this.closePopup.emit(false);
  }
}
