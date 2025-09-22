import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFunctions, provideFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { getAuth, provideAuth, connectAuthEmulator } from '@angular/fire/auth';

import { routes } from './app.routes';
import { environment } from '../../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideZoneChangeDetection({ eventCoalescing: true }), 
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideFirestore(() => {
			const firestore = getFirestore();
			if(environment.useEmulators){
				connectFirestoreEmulator(firestore, "localhost", 8080);
			}
			return firestore;
		}),
		provideFunctions(() => {
			const functions = getFunctions();
			if(environment.useEmulators){
				connectFunctionsEmulator(functions, "localhost", 5001);
			}
			return functions;
		}),
	]
};
