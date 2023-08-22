import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });
  users: any;
  constructor(private userData: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) {
    // userData.users().subscribe((data) => console.log(data))

  }
  userRegister() {
    console.log(this.user.value.name);
    this.userData.saveUser(this.user.value).subscribe((result) => console.log(result));
    this.user.reset()
    this.router.navigate(['/user'], { relativeTo: this.route });
  }

}
