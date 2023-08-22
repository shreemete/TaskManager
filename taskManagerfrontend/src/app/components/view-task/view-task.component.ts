
import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})


export class ViewTaskComponent {
  displayedColumns: string[] = ['id', 'name', 'action', "update"];
  task: any = [];
  viewPopup = false;
  updatePopup = false;
  element = {};
  constructor(private taskData: UserServiceService) {
    this.getData();
  }

  getData() {
    // console.log("getdata")
    this.taskData.tasks().subscribe((data) => {
      this.task = data

      this.task = this.task.filter((element: any) => localStorage.getItem("user_id") == element.user)
      this.task = this.task.map((element: any, index: any) => {
        element.index = index
        return element
      })

      // console.log('task', this.task)
    })
  }

  deletetask(task_id: any, id: any) {
    this.taskData.deleteTask(task_id).subscribe((res) => {
      this.getData()
    });
  }
  viewData(element: any) {
    this.viewPopup = true
    this.element = element
  }
  updateData(element: any) {
    this.updatePopup = true
    this.element = element
  }
  popupData() {
    return this.element;
  }
  async popupFun() {
    // console.log("Clossed")
    await this.getData()
    this.viewPopup = false
    this.updatePopup = false


  }

}
