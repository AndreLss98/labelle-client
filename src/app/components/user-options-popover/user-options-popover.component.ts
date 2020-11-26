import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-options-popover',
  templateUrl: './user-options-popover.component.html',
  styleUrls: ['./user-options-popover.component.scss'],
})
export class UserOptionsPopoverComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() {}

  logout() {
    this.userService.logout();
    this.popoverCtrl.dismiss().then(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    });
  }

}
