import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { ShellComponent } from './shell.component';

// Modules
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // Modules
    FooterModule,
    HeaderModule,
    NavbarModule,
    SidenavModule,
  ],
  providers: [],
  declarations: [ShellComponent],
  exports: [
    ShellComponent,
    FooterModule,
    HeaderModule,
    NavbarModule,
    SidenavModule,
  ],
})
export class ShellModule {}
