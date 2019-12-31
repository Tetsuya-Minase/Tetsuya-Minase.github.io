import { Component, OnInit } from '@angular/core';
import { LinkListItem } from '../../../../common/model/ListItem';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  linkList: LinkListItem[] = [
    {
      linkText: 'Github',
      linkUrl: 'https://github.com/Tetsuya-Minase',
      description: 'Githubだよー',
      icon: 'assets/github/GitHub-Mark.png'
    },
    {
      linkText: 'Twitter',
      linkUrl: 'https://twitter.com/minase_tetsuya',
      description: 'Twitterだよー',
      icon: 'assets/twitter/Twitter_Social_Icon_Circle_Color.svg'
    },
    {
      linkText: 'ブログ',
      linkUrl: 'https://minase-program.hatenablog.com/',
      description: 'ブログだよー',
      icon: 'assets/hatena-blog/hatenablog-logo.svg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
