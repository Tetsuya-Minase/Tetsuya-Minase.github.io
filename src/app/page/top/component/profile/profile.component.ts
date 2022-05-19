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
      icon: 'assets/link/github-mark.svg'
    },
    {
      linkText: 'Twitter',
      linkUrl: 'https://twitter.com/minase_tetsuya',
      icon: 'assets/link/Twitter_Social_Icon_Circle_Color.svg'
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
