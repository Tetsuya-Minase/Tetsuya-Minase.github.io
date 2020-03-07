import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() text: string;
  @Input() level: '1' | '2' | '3' | '4' = '1';
  @Input() isHidden = false;

  headingClass: string[] = [];

  ngOnInit() {
    if (Boolean(this.isHidden)) {
      this.headingClass.push('hidden');
    }

    switch (this.level) {
      case '1':
        this.headingClass.push('heading-1');
        break;
      case '2':
        this.headingClass.push('heading-2');
        break;
      case '3':
        this.headingClass.push('heading-3');
        break;
      case '4':
        this.headingClass.push('heading-4');
        break;
      default:
        const invalidValue: never = this.level;
        console.error(`${invalidValue} is invalid level.`);
    }
  }

}
