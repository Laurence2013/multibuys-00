import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { LandingPageService } from '../services/landing-page/landing-page.service';

@Component({
  selector: 'app-home',
	standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public landingPageData$!: Observable<any>;

	public constructor(private landingPageService: LandingPageService){}
	public ngOnInit(): void {
		this.getLandingPageData01();
	}	
	public getLandingPageData01(): void {
		this.landingPageData$ = this.landingPageService.getLandingPageData();
	}
}
