import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  private timeoutInstance;

  constructor(
    public route: Router,
    public reservaService: ReservasService
  ) {

  }

  ngOnInit() {
    
  }

  public onMonthChange(event) {
    clearTimeout(this.timeoutInstance);
    this.timeoutInstance = setTimeout(() => {
      this.reservaService.getAllOfMonth(event.mesSelecionado, event.anoSelecionado).subscribe((response: any) => {
      }, (error) => {
        console.log("Reservas error: ", error);
      });
    }, 500);
  }

  public openMap() {
    this.route.navigateByUrl('map');
  }

}
