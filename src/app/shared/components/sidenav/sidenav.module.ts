import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavModule {}
