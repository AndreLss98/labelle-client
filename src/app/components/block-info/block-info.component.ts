import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss'],
})
export class BlockInfoComponent implements OnInit {

  @Input() info: string;
  @Input() desc: string;

  constructor() {

  }

  ngOnInit() {

  }

}
