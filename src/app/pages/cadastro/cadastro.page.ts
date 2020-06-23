import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("Router: ", this.router.snapshot.params);
  }

}
