import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import mapboxgl from 'mapbox-gl';

import { Profissional } from 'src/app/models/profissional.model';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private map: mapboxgl.Map;
  private markers: any[] = [];
  private profissionais: Profissional[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.startMap();
    this.profissionais = this.route.snapshot.data.profissionais;
  }

  ionViewDidEnter() {
    this.map.resize();
    this.markProPositions();
  }

  private startMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/andreluiss/ck9rg74ju0r8q1iphdq72vjgc',
      center: [-49.342471, -16.648095],
      zoom: 11
    });
  }

  public backPage() {
    this.router.navigateByUrl('agenda');
  }

  private markProPositions() {
    this.profissionais.forEach(profissional => {
      const { longitude, latitude } = profissional.local;
      const popup = new mapboxgl.Popup({ offset: 25,  closeButton: false})
      .setHTML(`
        <ion-grid>
          <ion-row>
            <ion-col class="ion-align-self-end" style="display: flex">
              <img src="${profissional.img_perfil}">
            </ion-col>
            <ion-col>
              <ion-row>
                <ion-col class="ion-text-center">
                  <h4>${profissional.nome}</h4>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-around">
                <ion-col size="1">
                  <ion-icon src="assets/star.svg"></ion-icon>
                </ion-col>
                <ion-col size="1">
                  <ion-icon src="assets/star.svg"></ion-icon>
                </ion-col>
                <ion-col size="1">
                  <ion-icon src="assets/star.svg"></ion-icon>
                </ion-col>
                <ion-col size="1">
                  <ion-icon src="assets/star.svg"></ion-icon>
                </ion-col>
                <ion-col size="1">
                  <ion-icon src="assets/star.svg"></ion-icon>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-col size="8" class="ion-align-self-center">
                  <p>${profissional.diasTrabalho.horario_inicio} - ${profissional.diasTrabalho.horario_fim}</p>
                </ion-col>
                <ion-col size="1" class="ion-align-self-center" style="display: flex">
                  <ion-icon src="assets/clock.svg"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-grid>`
      );

      fromEvent(popup._content, 'click').subscribe(() => {
        this.openSalon(profissional.id);
      })

      this.markers.push(new mapboxgl.Marker({ color: '#BF4365' }).setLngLat([longitude, latitude]).setPopup(popup).addTo(this.map));
    });
  }

  private removeAllMarkers() {
    this.markers.forEach(marker => {
      marker.remove();
    })
  }

  private openSalon(id: number) {
    this.router.navigateByUrl(`/salon/${id}`);
  }
}
