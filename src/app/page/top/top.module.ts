import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './component/top.component';
import { ProfileComponent } from './component/profile/profile.component';
import { OrderedListModule } from '../../common/component/ordered-list/ordered-list.module';
import { UnorderedListModule } from '../../common/component/unordered-list/unordered-list.module';
import { SkillComponent } from './component/skill/skill.component';

@NgModule({
  declarations: [TopComponent, ProfileComponent, SkillComponent],
  imports: [
    CommonModule,
    OrderedListModule,
    UnorderedListModule
  ],
  exports: [TopComponent]
})
export class TopModule {
}