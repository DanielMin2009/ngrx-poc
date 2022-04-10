import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Material
import { MatIconModule } from '@angular/material/icon';

// Components
import { CardComponent } from './card.component';

@NgModule({
  imports: [BrowserModule, MatIconModule],
  providers: [],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
