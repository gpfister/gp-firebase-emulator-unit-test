/**
 * gp-firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER
 */

import { firestore } from 'firebase-admin';

import { GPUserPublicProfileModel } from './user_public_profile.model';
import { GPUserPrivateProfileModel } from './user_private_profile.model';

export type GPUserDocument = {
  userId: string;
  email: string;
  publicProfile: GPUserPublicProfileModel;
  privateProfile: GPUserPrivateProfileModel;
  creationDate: firestore.Timestamp;
}
