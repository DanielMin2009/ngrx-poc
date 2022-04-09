import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Shell Components
import { HeaderComponent } from './header.component';

// Shared
import { LogoModule } from '../../shared/components/logo/logo.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [BrowserModule, LogoModule, NavbarModule],
  providers: [],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
