import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './component/top.component';
import { ProfileComponent } from './component/profile/profile.component';
import { OrderedListModule } from '../../common/component/ordered-list/ordered-list.module';

@NgModule({
  declarations: [TopComponent, ProfileComponent],
  imports: [
    CommonModule,
    OrderedListModule
  ],
  exports: [TopComponent]
})
export class TopModule {
}
