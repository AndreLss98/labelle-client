import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() url: string = '/agenda';

  constructor(
    private route: Router
  ) {

  }

  ngOnInit() {

  }

  public back() {
    this.route.navigateByUrl(this.url);
  }

}
