import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  constructor(private readonly meta: Meta) {
    this.meta.addTag({ name: 'author', content: 'page author' });
  }


}
