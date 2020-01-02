import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() text: string;
  @Input() level = '1';

  constructor() {
  }

  ngOnInit() {
  }

  get headingClass() {
    switch (this.level) {
      case '1':
        return 'heading-1';
      case '2':
        return 'heading-2';
      case '3':
        return 'heading-3';
      default:
        return '';
    }
  }

}
