/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import * as admin from 'firebase-admin';

import { GPUserDocument } from '../../firebase_firestore/models/user_document.model';
import { GPUserStatusDocument } from '../../firebase_firestore/models/user_status_document.model';
// import { OSKUserDocument } from "../models/user_document.model";

export class GPUserAccountController {
  async onUserAccountCreated(userAccount: admin.auth.UserRecord) {
    const db = admin.firestore();
    const ts = admin.firestore.Timestamp.now();

    // Send welcome email
    // TODO: Send welcome email

    // Create user record in data
    const displayName = userAccount.displayName || userAccount.email?.split('@')[0] || 'Anonymous';
    const user: GPUserDocument = {
      userId: userAccount.uid,
      email: userAccount.email!, // There should always be an email
      publicProfile: { displayName: displayName },
      privateProfile: { fullName: displayName },
      creationDate: ts
    };

    if (userAccount.displayName) {
      user.publicProfile = { displayName: userAccount.displayName };
      user.privateProfile = { fullName: userAccount.displayName };
    } else {
      const tempName = userAccount.email?.split('@')[0] || 'No name';
      user.publicProfile = { displayName: tempName };
      user.privateProfile = { fullName: tempName };
    }

    const userStatus: GPUserStatusDocument = {
      isProfileComplete: false,
      creationDate: ts
    };

    await db.collection('/users/').doc(userAccount.uid).create(user);

    await db.collection(`/users/${userAccount.uid}/status`).doc(userAccount.uid).create(userStatus);
  }

  async onUserAccountDeleted(user: admin.auth.UserRecord) {
    const db = admin.firestore();

    // Remove all user record
    const userAccount = await db.doc(`/users/${user.uid}`).get();

    if (userAccount.exists) {
      // Delete status
      await db.collection(`/users/${user.uid}/status`).doc(user.uid).delete();

      // At the end, delete the user record
      await db.collection('/users').doc(user.uid).delete();
    }
  }
}
