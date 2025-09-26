export const environment = {
	production: process.env['PRODUCTION'],
	useEmulators: process.env['USE_EMULATORS'],
	firebaseConfig: {
		apiKey: process.env['API_KEY'],
		authDomain: process.env['AUTH_DOMAIN'],
		projectId: process.env['PROJECT_ID'],
		storageBucket: process.env['STORAGE_BUCKET'],
		messagingSenderId: process.env['MESSAGING_SENDER_ID'],
		appId: process.env['APP_ID'],
		measurementId: process.env['MEASUREMENT_ID'],
	}
}
