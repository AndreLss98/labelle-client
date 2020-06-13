import { Component, OnInit, Input } from '@angular/core';

import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'block-service',
  templateUrl: './block-service.component.html',
  styleUrls: ['./block-service.component.scss'],
})
export class BlockServiceComponent implements OnInit {

  @Input() servico;

  constructor() {

  }

  ngOnInit() {

  }

}
