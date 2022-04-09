import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { FooterShellComponent } from './footer/footer.component';
import { HeaderShellComponent } from './header/header.component';
import { ShellComponent } from './shell.component';

// Shared
import { LogoModule } from '../shared/components/logo/logo.module';
import { SidenavModule } from '../shared/components/sidenav/sidenav.module';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // Shared
    LogoModule,
    SidenavModule,
  ],
  providers: [],
  declarations: [ShellComponent, FooterShellComponent, HeaderShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
