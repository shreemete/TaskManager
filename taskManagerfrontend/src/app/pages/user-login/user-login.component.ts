import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  active1 = 'primary'
  active2 = ''
  display = "none"
  istoggle = true
  toggleActive1 = true
  toggleActive2 = false
  activated(id: any) {
    if (id == 1) {
      this.active1 = "primary"
      this.active2 = ""
    } else {
      this.active2 = "primary"
      this.active1 = ""
    }

  }
  toggle(istoggle: boolean) {
    if (istoggle) {
      this.display = "flex"
      this.istoggle = false
    } else {
      this.display = "none"
      this.istoggle = true
    }
  }
  toggleActive(id: any) {
    if (id == 1) {
      this.toggleActive1 = true
      this.toggleActive2 = false
    } else {
      this.toggleActive1 = false
      this.toggleActive2 = true
    }
  }
}
