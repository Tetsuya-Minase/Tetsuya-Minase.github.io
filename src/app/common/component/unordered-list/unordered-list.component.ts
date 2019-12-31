import { Component, Input } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'ul-component',
  template: `
    <ul>
      <li *ngFor="let item of itemList" class="ul-component">
        <a [href]="item.linkUrl" target="_blank" class="ul-component__link">
          <img [src]="item.icon" [alt]="item.linkText" width="101" height="101" class="ul-component__link__icon">
        </a>
      </li>
    </ul>
  `,
  styles: ['.ul-component { display: inline; margin: 0 0 0 10px }']
})
export class UnorderedListComponent {
  @Input() itemList: LinkListItem[];
}