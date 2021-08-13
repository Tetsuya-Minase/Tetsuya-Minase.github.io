import { AfterViewInit, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, AfterViewInit {
  public isMenuOpened = false;

  ngOnChanges() {
    console.log('changes');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

}
