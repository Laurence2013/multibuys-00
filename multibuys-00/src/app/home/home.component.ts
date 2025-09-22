import { Component, OnInit } from '@angular/core';

import { LandingPageService } from '../services/landing-page/landing-page.service';

@Component({
  selector: 'app-home',
	standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public title_00?:string;
	public title_01 = 'We offer different ranges of multibuys and multibuy offers';

	public constructor(private landingPageService: LandingPageService){}
	public ngOnInit(): void {
		this.getLandingPageData();
	}
	public getLandingPageData(): void {
		this.landingPageService.getLandingPageData().subscribe(data => this.title_00 = data.title00.toLowerCase());
	}
}
