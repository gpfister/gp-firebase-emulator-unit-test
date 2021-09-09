/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import * as admin from 'firebase-admin';

import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
import { Change, EventContext } from 'firebase-functions';
import { GPUserDocument } from '../../../firebase_firestore/models/user_document.model';
import { GPUserStatusDocument } from '../../../firebase_firestore/models/user_status_document.model';

export class GPUserController {
  async onUpdate(snapshot: Change<DocumentSnapshot>, context: EventContext) {
    const db = admin.firestore();
    const bucket = admin.storage().bucket();

    const { userId } = context.params;

    const originalUser = snapshot.before.data() as GPUserDocument;
    const updatedUser = snapshot.after.data() as GPUserDocument;

    const userStatus = (await db.collection(`/users/${userId}/status`).doc(userId).get()).data() as GPUserStatusDocument;

    // There should be data
    if (originalUser && updatedUser) {
      const originalProfileImage = originalUser.publicProfile?.profileImage;
      const updatedProfileImage = updatedUser.publicProfile?.profileImage;

      // Check the profile image has been updated
      if (originalProfileImage) {
        const originalFilename = originalProfileImage.filename;
        const updatedFielname = updatedProfileImage
          ? updatedProfileImage.filename
          : originalFilename;
        if (originalFilename !== updatedFielname) {
          await bucket
            .file(`users/${userId}/profileImages/${originalFilename}`)
            .delete();
        }
      }

      // Check user profile is completed
      if (!userStatus.isProfileComplete) {
        if (updatedUser) {
          const displayName = updatedUser.publicProfile?.displayName;
          const fullName = updatedUser.privateProfile?.fullName;
          const dateOfBirth = updatedUser.privateProfile?.dateOfBirth;
          if (displayName && fullName && dateOfBirth) {
            await db
              .collection(`/users/${userId}/status`)
              .doc(userId)
              .set({ isProfileComplete: true }, { merge: true });
          }
        }
      }
    }
  }
}
