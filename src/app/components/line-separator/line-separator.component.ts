import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'line-separator',
  templateUrl: './line-separator.component.html',
  styleUrls: ['./line-separator.component.scss'],
})
export class LineSeparatorComponent implements OnInit {

  @Input() text: string;
  @Input() textSize: number;
  @Input() lineSize: number;

  constructor() {

  }

  ngOnInit() {

  }

}
