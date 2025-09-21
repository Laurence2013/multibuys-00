import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize the Firebase Admin SDK if it hasn't been already.
// The SDK will automatically detect the emulator environment.
if (admin.apps.length === 0) {
    admin.initializeApp();
}

const db = admin.firestore();

export const title00 = functions.https.onCall(async (data, context) => {
    // Check if the user is authenticated (optional, but good practice)
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
    }

    const { collectionPath, docId } = data;

    if (!collectionPath || !docId) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing collectionPath or docId.');
    }

    try {
        const docRef = db.collection(collectionPath).doc(docId);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            return { message: 'Document not found.' };
        } else {
            return docSnap.data();
        }
    } catch (error) {
        console.error('Error fetching document:', error);
        throw new functions.https.HttpsError('internal', 'Unable to fetch document data.');
    }
});
