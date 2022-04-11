import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// Material
import { MatInputModule } from '@angular/material/input';

// Components
import { SearchbarComponent } from './searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
  ],
  providers: [],
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
