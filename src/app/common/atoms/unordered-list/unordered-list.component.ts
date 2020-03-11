import { Component, Input, OnInit } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'ul-component',
  template: `
    <ul>
      <li *ngFor="let item of itemList" class="list">
        <a [href]="item.linkUrl" target="_blank">
          <img [src]="item.icon" [alt]="item.linkText" [ngClass]="listClasses">
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./unordered-list.component.scss']
})
export class UnorderedListComponent implements OnInit {
  @Input() itemList: LinkListItem[];
  @Input() size: 'small' | 'large';

  listClasses: string[] = [];

  ngOnInit(): void {
    switch (this.size) {
      case 'small':
        this.listClasses.push('list__small-icon');
        break;
      case 'large':
        this.listClasses.push('list__large-icon');
        break;
      default:
        throw new Error('size is invalid.');
    }
  }
}
