/**
 * gp-firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER
 */

import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { GPFirebaseAuthModule } from './firebase_auth';
import { GPFirebaseFirestoreModule } from './firebase_firestore';
import { GPFirebaseFunctionsModule } from './firebase_functions';

admin.initializeApp();

// The addition function
export const add = functions
    .region('europe-west1')
    .https
    .onCall((data, context) => GPFirebaseFunctionsModule.additionController.add(data, context));

// On user creation
export const onUserAccountCreated = functions
    .region('europe-west1')
    .auth.user()
    .onCreate((user) => GPFirebaseAuthModule.userAccountController.onUserAccountCreated(user));

// On user deletion
export const onUserAccountDeleted = functions
    .region('europe-west1')
    .auth.user()
    .onDelete((user) => GPFirebaseAuthModule.userAccountController.onUserAccountDeleted(user));

// On user updated
export const onUserUpdated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}')
    .onUpdate((snapshot, context) => GPFirebaseFirestoreModule.userController.onUpdate(snapshot, context));
