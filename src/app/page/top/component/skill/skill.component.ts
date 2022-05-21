import { Component } from '@angular/core';
import { SkillListItem } from '../../../../common/model/ListItem';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  languageList: SkillListItem[] = [
    {
      skill: 'JavaScript',
      experience: 5,
      icon: 'assets/language/typescript.svg'
    },
    {
      skill: 'TypeScript',
      experience: 5,
      icon: 'assets/language/javascript.svg'
    },
    {
      skill: 'Rust',
      experience: 1,
      icon: 'assets/language/rust-logo.svg'
    },
    {
      skill: 'Java',
      experience: 3,
      icon: 'assets/language/java.svg'
    }
  ];
  frontendFrameworkList: SkillListItem[] = [
    {
      skill: 'Angular',
      experience: 4,
      icon: 'assets/framework/angular.svg'
    },
    {
      skill: 'react',
      experience: 4,
      icon: 'assets/framework/react.svg'
    }
  ];
  backendFrameworkList: SkillListItem[] = [
    {
      skill: 'express',
      experience: 5,
      icon: 'assets/framework/express-icon.png'
    },
    {
      skill: 'node.js',
      experience: 5,
      icon: 'assets/framework/nodejs.png'
    },
    {
      skill: 'SpringBoot',
      experience: 3,
      icon: 'assets/framework/spring-boot.jpg'
    }
  ];

  constructor() {
  }

}
