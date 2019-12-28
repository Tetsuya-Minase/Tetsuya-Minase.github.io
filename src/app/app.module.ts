import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeoService } from './common/service/seo/seo.service';
import { FooterModule } from './common/component/footer/footer.module';
import { TopModule } from './page/top/top.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
    TopModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
