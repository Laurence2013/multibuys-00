import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { LandingPageService } from '../services/landing-page/landing-page.service';

@Component({
  selector: 'app-home',
	standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public landingPageData$!: Observable<any>;
	public emailForm!: FormGroup;

	public constructor(private landingPageService: LandingPageService, private fb: FormBuilder, private router: Router){}
	public ngOnInit(){
		this.getLandingPageData01();
		this.emailForm = this.fb.group({email: ['', [Validators.required, Validators.email]]});
	}	
	public getLandingPageData01(){
		this.landingPageData$ = this.landingPageService.getLandingPageData();
	}
	public onEmailSubmit(){
		if(this.emailForm.valid){
			this.landingPageService.getEmailAddress(this.emailForm.value).subscribe();
			this.router.navigate(['/thank-you']);
		}else{
			console.error('Form is invalid');
			this.emailForm.markAllAsTouched();
		}
	}
}
