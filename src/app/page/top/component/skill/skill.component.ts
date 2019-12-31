import { Component, OnInit } from '@angular/core';
import { LinkListItem } from '../../../../common/model/ListItem';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  languageList: LinkListItem[] = [
    {
      linkText: 'JavaScript',
      linkUrl: '',
      description: '',
      icon: 'assets/language/typescript.svg'
    },
    {
      linkText: 'TypeScript',
      linkUrl: '',
      description: '',
      icon: 'assets/language/javascript.svg'
    },
    {
      linkText: 'Java',
      linkUrl: '',
      description: '',
      icon: 'assets/language/java.svg'
    }
  ];
  frontendFrameworkList: LinkListItem[] = [
    {
      linkText: 'Angular',
      linkUrl: '',
      description: '',
      icon: 'assets/framework/angular.svg'
    },
    {
      linkText: 'react',
      linkUrl: '',
      description: '',
      icon: 'assets/framework/react.svg'
    }
  ];
  backendFrameworkList: LinkListItem[] = [
    {
      linkText: 'express',
      linkUrl: '',
      description: '',
      icon: 'assets/framework/express-icon.png'
    },
    {
      linkText: 'SpringBoot',
      linkUrl: '',
      description: '',
      icon: 'assets/framework/spring-boot.jpg'
    },
    {
      linkText: 'node.js',
      linkUrl: '',
      description: '',
      icon: 'assets/framework/nodejs.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
