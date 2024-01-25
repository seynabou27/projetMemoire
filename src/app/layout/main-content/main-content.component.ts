import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  //import { AuthService } from 'src/app/authentication/services/auth.service';

})
export class MainContentComponent {

  //constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    //this.auth.logout();
  }

}
