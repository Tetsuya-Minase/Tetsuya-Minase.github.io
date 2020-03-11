import { Component, OnInit } from '@angular/core';
import { LinkListItem } from '../../../common/model/ListItem';

@Component({
  selector: 'app-component',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  linkList: LinkListItem[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
