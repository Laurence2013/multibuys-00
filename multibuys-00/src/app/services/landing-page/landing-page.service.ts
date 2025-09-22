import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LandingPageService {

	private apiUrl:string = 'http://127.0.0.1:5001/multibuys-00/us-central1/title01';

	public constructor(private http: HttpClient){}
	public getLandingPageData(): Observable<any> {
		return this.http.get<any>(this.apiUrl);
	}
}
