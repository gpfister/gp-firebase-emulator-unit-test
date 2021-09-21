/**
 * firebase-emulator-unit-test
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

export type { GPFirebaseEmulatorTestAppOption } from './types/firebase_emulator_test_app_options';
export { GPFirebaseEmulatorTestApp } from './firebase_emulator_test_app';
export { GPFirebaseEmulatorAdminTestApp } from './firebase_emulator_admin_test_app';
export {
  initAdminTestApp,
  initTestApp,
  assertFails,
  assertSucceeds,
  sleep
} from './firebase_emulator_unit_test';

export * as firebaseAuth from 'firebase/auth';
export * as firebaseFirestore from 'firebase/firestore';
export * as firebaseFunctions from 'firebase/functions';
export * as firebaseStorage from 'firebase/storage';
export * as adminFirebaseAuth from 'firebase-admin/lib/auth';
export * as adminFirebaseFirestore from 'firebase-admin/lib/firestore';
export * as adminFirebaseStorage from 'firebase-admin/lib/storage';
