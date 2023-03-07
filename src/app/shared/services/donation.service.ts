import { Donation } from './../models/donation';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DonationService implements OnDestroy {
  donations$ = new Subject<Donation>();

  constructor() {
    // listen parent event from iframe
    window.onmessage = (e) => this.handleDonation(e);
  }

  ngOnDestroy(): void {
    window.onmessage = null;
  }

  handleDonation(message: MessageEvent<any>) {
    this.donations$.next(message.data);
  }
}
