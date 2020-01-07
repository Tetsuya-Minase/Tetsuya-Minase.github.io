import { Component, OnInit } from '@angular/core';
import { SkillListItem } from '../../../../common/model/ListItem';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  languageList: SkillListItem[] = [
    {
      skill: 'JavaScript',
      experience: 2,
      icon: 'assets/language/typescript.svg'
    },
    {
      skill: 'TypeScript',
      experience: 2,
      icon: 'assets/language/javascript.svg'
    },
    {
      skill: 'Java',
      experience: 1,
      icon: 'assets/language/java.svg'
    }
  ];
  frontendFrameworkList: SkillListItem[] = [
    {
      skill: 'Angular',
      experience: 2,
      icon: 'assets/framework/angular.svg'
    },
    {
      skill: 'react',
      experience: 1,
      icon: 'assets/framework/react.svg'
    }
  ];
  backendFrameworkList: SkillListItem[] = [
    {
      skill: 'express',
      experience: 2,
      icon: 'assets/framework/express-icon.png'
    },
    {
      skill: 'SpringBoot',
      experience: 1,
      icon: 'assets/framework/spring-boot.jpg'
    },
    {
      skill: 'node.js',
      experience: 2,
      icon: 'assets/framework/nodejs.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
