import { Component, OnInit } from '@angular/core';
import { LinkListItem } from '../../../common/model/ListItem';

@Component({
  selector: 'app-component',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  linkList: LinkListItem[] = [
    { linkUrl: 'https://github.com/Tetsuya-Minase', linkText: 'Github' },
    { linkUrl: 'https://twitter.com/minase_tetsuya', linkText: 'Twitter' },
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: 'はてなブログ' },
    { linkUrl: 'https://qiita.com/minase_tetsuya', linkText: 'Qiita' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
