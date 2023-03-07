import { Donation } from './../../shared/models/donation';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Subject, takeUntil } from 'rxjs';
import { DonationService } from 'src/app/shared/services/donation.service';
import { LeaderBoard } from './models/leader-board';

@Component({
  selector: 'app-leader-board',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent {
  donations: Donation[] = [];
  destroyed$ = new Subject();

  constructor(private donationService: DonationService) {}

  get totalDonations(): LeaderBoard[] {
    const totalDonations: LeaderBoard[] = [];
    this.donations.forEach((donation) => {
      const index = totalDonations.findIndex(
        (totalDonation) => totalDonation.author === donation.author
      );
      if (index === -1) {
        totalDonations.push({
          author: donation.author,
          amount: donation.amount,
        });
      } else {
        totalDonations[index].amount += donation.amount;
      }
    });
    return totalDonations.sort((a, b) => b.amount - a.amount);
  }

  ngOnInit(): void {
    this.donationService.donations$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((donation) => {
        this.donations = [donation, ...this.donations];
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(undefined);
    this.destroyed$.complete();
  }
}
