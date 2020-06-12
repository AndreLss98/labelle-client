import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import mapboxgl from 'mapbox-gl';

import { UserService } from './services/user.service';
import { environment } from 'src/environments/environment';
import { USER_STORAGE_KEY } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private userService: UserService,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.configUser();
      mapboxgl.accessToken = environment.maptoken;
    });
  }

  configUser() {
    const user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
    if (user) {
      this.userService.user = user;
    } 
  }
}
