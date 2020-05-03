import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private route: Router
  ) { 

  }

  ngOnInit() {

  }

  public login() {
    this.route.navigateByUrl('/agenda');
  }

}
