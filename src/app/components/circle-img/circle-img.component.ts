import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'circle-img',
  templateUrl: './circle-img.component.html',
  styleUrls: ['./circle-img.component.scss'],
})
export class CircleImgComponent implements OnInit {

  @Input() img_path: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
    
  }

}
