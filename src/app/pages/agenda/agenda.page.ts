import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from 'src/app/models/reserva.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  private timeoutInstance;
  public filteredReservas: Reserva[] = [];

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
        console.log("Reservas: ", response.data);
        this.reservaService.reservas = response.data.reservas;
        this.filterByDay(event.diaSelecionado);
      }, (error) => {
        console.log("Reservas error: ", error);
      });
    }, 500);
  }

  public openMap() {
    this.route.navigateByUrl('map');
  }


  private filterByDay(dia: number) {
    this.filteredReservas = this.reservaService.reservas.filter(reserva => reserva.dia === dia);
  }

}
