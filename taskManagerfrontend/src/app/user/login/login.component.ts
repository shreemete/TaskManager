import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  users: any;
  constructor(private userData: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  userRegister() {
    this.userData.users().subscribe((data) => {
      this.users = data
      this.users.forEach((element: any) => {
        if (this.user.value.email == element.email && this.user.value.password == element.password) {
          localStorage.setItem("token", "login")
          localStorage.setItem("user_id", element.user_id)
          this.router.navigate(['/task'], { relativeTo: this.route });
        }
      });
    })

  }
}
