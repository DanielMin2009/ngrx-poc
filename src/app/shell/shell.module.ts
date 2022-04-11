import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from 'src/app/app-routing.module';

// Components
import { FooterShellComponent } from './footer/footer.component';
import { SidenavShellComponent } from './sidenav/sidenav.component';
import { ShellComponent } from './shell.component';

// Shared
import { LogoModule } from '../shared/components/logo/logo.module';
import { SidenavModule } from '../shared/components/sidenav/sidenav.module';

// Material conf
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Shared
    LogoModule,
    SidenavModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  declarations: [ShellComponent, FooterShellComponent, SidenavShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
