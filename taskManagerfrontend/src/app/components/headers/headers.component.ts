import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  
  height = '0px'
  istoggle = true
  constructor(private route: ActivatedRoute,
    private router: Router) { }
  
  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/user'], { relativeTo: this.route });
  }
  onToggle(istoggle: any) {
    if (istoggle) {
      this.height = "auto"
      this.istoggle = false
    } else {
      this.height = "0px"
      this.istoggle = true
    }
  }

  // isactive = false
  // clicked() {
  //   this.isactive = true;
  // }
}
