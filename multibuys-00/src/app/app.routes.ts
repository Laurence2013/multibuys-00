import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'thank-you', component: ThankYouComponent},
	{path: '**', redirectTo: ''}
];
