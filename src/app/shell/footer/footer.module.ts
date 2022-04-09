import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
