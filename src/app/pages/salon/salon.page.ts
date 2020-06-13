import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservasService } from 'src/app/services/reservas.service';
import { Servico, Profissional } from 'src/app/models/profissional.model';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.page.html',
  styleUrls: ['./salon.page.scss'],
})
export class SalonPage implements OnInit {

  private loader: HTMLIonLoadingElement;

  public profissional: Profissional;
  public servicosDisponiveis: Servico[] = [];

  private total = 0;
  public totalFormated = '0,00';

  private selectedDate = {
    diaSelecionado: new Date().getDate(),
    mesSelecionado: new Date().getMonth(),
    anoSelecionado: new Date().getFullYear()
  };

  private servicosSelecionados: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private reservaService: ReservasService,
  ) {

  }

  ngOnInit() {
    this.createLoading();
    this.profissional = this.route.snapshot.data.profissional.data.profissional;
    this.servicosDisponiveis = this.profissional.servicos.filter(servico => servico.disponivel);
  }

  public onChangeSelections(event) {
    const { id, valor, selecionado } = event;
    if (selecionado) {
      this.calculateTotalPrice(valor);
      this.servicosSelecionados.push({ pro_servico_id: id, valor_pago: valor });
    } else {
      this.calculateTotalPrice(-valor);
      this.servicosSelecionados = this.servicosSelecionados.filter(servico => servico.pro_servico_id !== id);
    }
  }

  private calculateTotalPrice(value: number) {
    this.total += value;
    this.formatPrice();
  }

  private formatPrice() {
    this.totalFormated = this.total.toFixed(2).replace(/\./, ',');
  }

  public onSelectDate(event) {
    this.selectedDate = event;
  }

  public async makeReserve() {
    if (this.servicosSelecionados.length === 0) return this.createAlert("Escolha ao menos um serviço");

    await this.loader.present();
    this.reservaService.createReserve(this.selectedDate, this.profissional.id, this.servicosSelecionados).subscribe(async (response: any) => {
      await this.loader.dismiss();
      this.router.navigateByUrl('/agenda');
    }, async (error) => {
      await this.loader.dismiss();
      console.log("Make reserve error: ", error);
      this.createAlert("Falha ao registrar reserva!");
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
        { text: 'Fechar' }
      ]
    }).then((alert => {
      alert.present();
    }));
  }
}
