import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { LogoComponent } from './logo.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})
export class LogoModule {}
