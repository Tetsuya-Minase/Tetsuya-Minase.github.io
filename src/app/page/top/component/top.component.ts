import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeScript } from '@angular/platform-browser';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  sanitizedScript: SafeScript = this.sanitizer.bypassSecurityTrustHtml('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');

  constructor(private readonly sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
