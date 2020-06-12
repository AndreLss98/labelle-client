import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

import { UserService } from 'src/app/services/user.service';
import { USER_STORAGE_KEY } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loader: HTMLIonLoadingElement;

  public email: string = '';
  public senha: string = '';

  constructor(
    private route: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private userService: UserService,
  ) {

  }

  ngOnInit() {
    this.createLoading();
  }

  public async login(email: string, senha: string) {
    await this.loader.present();
    this.userService.sigin(email, senha).subscribe(async (response: any) => {
      await this.loader.dismiss();
      this.userService.user = response;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.userService.user));
      this.route.navigateByUrl('/agenda');
    }, async (err) => {
      await this.loader.dismiss();
      this.createAlert(err.error);
      console.log("Login error: ", err)
    });
  }

  private async createLoading() {
    this.loader = await this.loadingCtrl.create({
      mode: 'ios'
    });
  }

  private createAlert(message: string) {
    this.alertCtrl.create({
      message,
      mode: 'ios',
      buttons: [
        {
          text: "Ok"
        }
      ]
    }).then((alert) => {
      alert.present();
    })
  }

}
