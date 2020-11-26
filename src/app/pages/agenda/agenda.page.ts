import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from 'src/app/models/reserva.model';
import { PopoverController } from '@ionic/angular';
import { UserOptionsPopoverComponent } from 'src/app/components/user-options-popover/user-options-popover.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  private timeoutInstance;

  public filteredReservas: Reserva[] = [];

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public reservaService: ReservasService,
    public popoverController: PopoverController,
  ) {

  }

  ngOnInit() {
    console.log("Route: ", this.route.snapshot.data.reservas.data.reservas);
  }

  ionViewDidEnter() {
    this.updateScreen(this.route.snapshot.data.reservas.data.reservas);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserOptionsPopoverComponent,
      event: ev,
      translucent: true,
      mode: 'ios',
      keyboardClose: true
    });
    return await popover.present();
  }

  public onMonthChange(event) {
    clearTimeout(this.timeoutInstance);
    this.timeoutInstance = setTimeout(() => {
      this.reservaService.getAllOfMonth(event.mesSelecionado, event.anoSelecionado).subscribe((response: any) => {
        this.updateScreen(response.data.reservas, event.diaSelecionado);
      }, (error) => {
        console.log("Reservas error: ", error);
      });
    }, 500);
  }

  public openMap() {
    this.router.navigateByUrl('map');
  }

  private filterByDay(dia: number) {
    this.filteredReservas = this.reservaService.reservas.filter(reserva => reserva.dia === dia);
  }

  private updateScreen(reservas, dia?: number) {
    if (!dia) dia = new Date().getDate();
    this.reservaService.reservas = reservas;
    this.reservaService.daysWithReservas.next(reservas.map(reserva => reserva.dia));
    this.filterByDay(dia);
  }

}
