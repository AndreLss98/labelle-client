import { Component, OnInit } from '@angular/core';

import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(public reservaService: ReservasService) { }

  ngOnInit() {
    
  }

}
