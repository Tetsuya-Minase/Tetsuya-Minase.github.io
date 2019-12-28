import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeScript } from '@angular/platform-browser';
import { LinkListItem } from '../../../common/model/ListItem';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  sanitizedScript: SafeScript
    = this.sanitizer.bypassSecurityTrustHtml('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
  linkList: LinkListItem[] = [
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: '記事１', description: 'こんな記事です' },
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: '記事２', description: 'こんな記事です' },
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: '記事３', description: 'こんな記事です' },
  ];

  constructor(private readonly sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
