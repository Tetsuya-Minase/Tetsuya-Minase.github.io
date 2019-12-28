import { Component, Input } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'ul-component',
  template: `
    <ul>
      <li *ngFor="let item of itemList"><a [href]="item.linkUrl" target="_blank"><img [src]="item.icon" [alt]="item.linkText"></a></li>
    </ul>
  `,
})
export class UnorderedListComponent {
  @Input() itemList: LinkListItem[];
}
