import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private route: ActivatedRoute,
    private router: Router) {
    if (localStorage.getItem("token") != "login") {
      this.router.navigate(['/user'], { relativeTo: this.route });
    }
  }
}
