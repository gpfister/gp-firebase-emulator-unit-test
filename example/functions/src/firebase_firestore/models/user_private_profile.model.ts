/**
 * gp-firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER
 */

import { firestore } from 'firebase-admin';

export type GPUserPrivateProfileModel = {
  fullName: string;
  dateOfBirth?: firestore.Timestamp;
}
