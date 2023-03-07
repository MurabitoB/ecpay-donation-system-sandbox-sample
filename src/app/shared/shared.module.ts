import { DonationService } from './services/donation.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [DonationService],
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {}
