import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { LandingPageService } from '../services/landing-page/landing-page.service';

@Component({
  selector: 'app-thank-you',
  imports: [CommonModule],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent implements OnInit {

	public landingPageData$!: Observable<any>;

	public constructor(private landingPageService: LandingPageService){}
	public ngOnInit(){
		this.getLandingPageData01();
	}
	public getLandingPageData01(){
		this.landingPageData$ = this.landingPageService.getLandingPageData();
	}
}
