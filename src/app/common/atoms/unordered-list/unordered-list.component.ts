import { Component, Input, OnInit } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'ul-component',
  template: `
    <ul [ngClass]="listClass">
      <li *ngFor="let item of itemList" class="list__item">
        <a [href]="item.linkUrl" target="_blank">
          <ng-container [ngSwitch]="type">
            <img *ngSwitchCase="'icon'" [src]="item.icon" [alt]="item.linkText" [ngClass]="iconClass">
            <ng-container *ngSwitchCase="'text'">{{item.linkText}}</ng-container>
          </ng-container>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./unordered-list.component.scss']
})
export class UnorderedListComponent implements OnInit {
  @Input() itemList: LinkListItem[];
  @Input() type: 'text' | 'icon';
  @Input() size: 'small' | 'large' | 'none';
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  listClass: string[] = ['list'];
  iconClass: string[] = [];

  ngOnInit(): void {
    switch (this.size) {
      case 'small':
        this.iconClass.push('list__small-icon');
        break;
      case 'large':
        this.iconClass.push('list__large-icon');
        break;
      case 'none':
        break;
      default:
        const invalidSize: never = this.size;
        console.error(`${invalidSize} is invalid`);
    }
    switch (this.direction) {
      case 'horizontal':
        this.listClass.push('list--horizontal');
        break;
      case 'vertical':
        this.listClass.push('list--vertical');
        break;
      default:
        const invalidDirection: never = this.direction;
        console.error(`${invalidDirection} is invalid`);
    }
  }
}
