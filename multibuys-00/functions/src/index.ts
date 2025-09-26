import { setGlobalOptions } from 'firebase-functions';
import { onRequest, HttpsError } from 'firebase-functions/https';
import * as logger from 'firebase-functions/logger';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({ maxInstances: 10 });

export const helloWorld = onRequest((request, response) => {
	logger.info('Hello logs!', { structuredData: true });
	response.send('Hello from Firebase! - this is from DESKTOP multibuys-00');
});
export const title01 = onRequest(async (request, response) => {
	try {
		const docRef = db.collection('landing-page').doc('hNoBO8OvJXKnAAzHscJG');
		const doc = await docRef.get();

		response.send(doc.data());
	} catch (err) {
		console.error('Error fetching email: ', err);
		throw new HttpsError(
			'unknown',
			'Unable to fetch title'
		);
	}
});
export const addEmailAddress = onRequest(async (request, response) => {
	if (request.method !== 'POST') response.status(405).send('Method Not Allowed');
	const email = request.body;
	if (!email) response.status(400).send('Email address is required');

	const emailAdd = { id: 1, email_address: email };

	try {
		const docRef = await db.collection('newsletter').add(emailAdd);
		logger.info('Successfully saved email address');
		response.status(200).send({ message: 'Email saved successfully', docId: docRef.id });
	} catch (error) {
		console.error('Error saving email to Firestore:', error);
		response.status(500).send({ error: 'Failed to save email to database.' });
	}
});
