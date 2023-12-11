import { Component } from '@angular/core';
import { LinkListItem } from '../../../../common/model/ListItem';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  linkList: LinkListItem[] = [
    {
      linkText: 'Github',
      linkUrl: 'https://github.com/Tetsuya-Minase',
      icon: 'assets/link/github-mark.svg',
    },
    {
      linkText: 'X',
      linkUrl: 'https://twitter.com/tminasen',
      icon: 'assets/link/x-logo.svg',
    },
    {
      linkText: 'zenn',
      linkUrl: 'https://zenn.dev/tminasen',
      icon: 'assets/link/zenn-logo-icon.png'
    }
  ];

  constructor() {
  }

}
