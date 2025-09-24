import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

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

	public constructor(private landingPageService: LandingPageService, private fb: FormBuilder){}
	public ngOnInit(){
		this.getLandingPageData01();
		this.emailForm = this.fb.group({email: ['', [Validators.required, Validators.email]]});
	}	
	public getLandingPageData01(){
		this.landingPageData$ = this.landingPageService.getLandingPageData();
	}
	public onEmailSubmit(){
		if(this.emailForm.valid){
			console.log('Form data: ', this.emailForm.value)
		}else{
			console.log('Form is invalid');
			this.emailForm.markAllAsTouched();
		}
	}
}
