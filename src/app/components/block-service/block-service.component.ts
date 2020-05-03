import { Component, OnInit, Input } from '@angular/core';
import { ServicoPago } from 'src/app/models/servico.model';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'block-service',
  templateUrl: './block-service.component.html',
  styleUrls: ['./block-service.component.scss'],
})
export class BlockServiceComponent implements OnInit {

  @Input() servico: ServicoPago;
  public icone: string = '';
  public nome: string = '';

  constructor(
    private servicosService: ServicosService
  ) {

  }

  ngOnInit() {
    this.configComponent();
  }

  public configComponent() {
    const tempService = this.servicosService.servicos.find(servico => servico.id === this.servico.servico_id);
    this.icone = tempService.icone_path;

    this.nome = tempService.nome;
  }

}
