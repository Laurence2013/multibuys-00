import { setGlobalOptions } from 'firebase-functions';
import { onRequest, onCall, HttpsError } from 'firebase-functions/https';
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
			'Unable to getch title'
		);
	}
});
export const addEmailAddress = onCall(async (data, context) => {
	const { id, email_address } = data;
	const emailRef = db.collection('newsletter').doc(id.toString());

	await emailRef.set({ email: email_address, timestamp: admin.firestore.FieldValue });

	return {result: `Email ${email_address} added with ID: ${id}`};
});
