/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import { firestore } from 'firebase-admin';

export type GPUserStatusDocument = {
  isProfileComplete: boolean;
  creationDate: firestore.Timestamp;
}