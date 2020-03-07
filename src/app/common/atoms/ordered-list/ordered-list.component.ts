import { Component, Input } from '@angular/core';
import { LinkListItem } from '../../model/ListItem';

@Component({
  selector: 'ol-component',
  template: `
    <ol>
      <li *ngFor="let item of itemList">
        <article>
          <h1><a [href]="item.linkUrl" target="_blank">{{item.linkText}}</a></h1>
          <p>{{item.description}}</p>
        </article>
      </li>
    </ol>
  `
})
export class OrderedListComponent {
  @Input() itemList: LinkListItem[];

}
