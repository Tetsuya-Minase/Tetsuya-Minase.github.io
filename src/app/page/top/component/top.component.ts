import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LinkListItem } from '../../../common/model/ListItem';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  readonly sanitizedScript: SafeHtml
    = this.sanitizer.bypassSecurityTrustHtml('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');

  linkList: LinkListItem[] = [
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: '記事１', description: 'こんな記事です' },
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: '記事２', description: 'こんな記事です' },
    { linkUrl: 'https://minase-program.hatenablog.com/', linkText: '記事３', description: 'こんな記事です' },
  ];

  constructor(private readonly sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.addTwitterScript();
  }

  private addTwitterScript() {
    // TODO: あまり上手い方法だと思わないので要検討
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    const targetDom = document.getElementsByClassName('top-component__sidebar');
    targetDom.item(0).appendChild(script);
  }
}
