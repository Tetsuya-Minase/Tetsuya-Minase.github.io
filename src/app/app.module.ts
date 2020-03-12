import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeoService } from './common/service/seo/seo.service';
import { FooterModule } from './common/component/footer/footer.module';
import { TopModule } from './page/top/top.module';
import { HeaderComponent } from './common/component/header/header.component';
import { HeadingModule } from './common/atoms/heading/heading.module';
import { LinksModule } from './page/links/links.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
    TopModule,
    LinksModule,
    HeadingModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
