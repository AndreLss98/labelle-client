import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private map: mapboxgl.Map;

  constructor(
    private route: Router
  ) {

  }

  ngOnInit() {
    this.startMap();
  }

  ionViewDidEnter() {
    this.map.resize();
  }

  private startMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/andreluiss/ck9rg74ju0r8q1iphdq72vjgc',
      center: [-49.342471, -16.648095],
      zoom: 15
    });
  }

  public backPage() {
    this.route.navigateByUrl('agenda');
  }

}
