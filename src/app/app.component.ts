import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DonationService } from './shared/services/donation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
