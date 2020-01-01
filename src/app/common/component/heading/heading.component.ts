import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() text: string;
  @Input() level = 1;

  constructor() {
  }

  ngOnInit() {
    switch (this.level) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
    }
  }

}
