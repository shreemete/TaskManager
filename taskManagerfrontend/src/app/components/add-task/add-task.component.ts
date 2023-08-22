import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private taskdata: UserServiceService) { }
  user: any = localStorage.getItem("user_id");


  addTask(data: NgForm) {
    data.value.user = localStorage.getItem("user_id");
    this.taskdata.saveTask(data.value).subscribe((result) => console.log(result));
    data.reset();
  }
}
