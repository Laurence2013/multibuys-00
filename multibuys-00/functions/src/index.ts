import { setGlobalOptions } from 'firebase-functions';
import { onRequest, onCall, HttpsError } from 'firebase-functions/https';
import * as logger from 'firebase-functions/logger';
import * as admin from 'firebase-admin';
// import axios from 'axios';

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({ maxInstances: 10 });

export const helloWorld = onRequest((request, response) => {
	logger.info('Hello logs!', { structuredData: true });
	response.send('Hello from Firebase! - this is from DESKTOP multibuys-00');
});
export const title00 = onCall(async (data, context) => {
	try {
		const docRef = db.collection('landing-page').doc('6oxpewaCNbvdzcDy2T7F');
		const doc = await docRef.get();

		logger.info(doc.data());
	} catch (err) {
		console.error('Error fetching email: ', err);
		throw new HttpsError(
			'unknown',
			'Unable to getch title'
		);
	}
});
export const title01 = onRequest(async (request, response) => {
	try {
		const docRef = db.collection('landing-page').doc('6oxpewaCNbvdzcDy2T7F');
		const doc = await docRef.get();

		response.send(doc.data());
	} catch (err) {
		console.error('Error fetching email: ', err);
		throw new HttpsError(
			'unknown',
			'Unable to getch title'
		);
	}
});
