/**
 * firebase-emulator-unit-test
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, UserCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { GPFirebaseEmulatorConfig } from './types/firebase_emulator_config';

import { GPFirebaseEmulatorHostConfig } from './types/firebase_emulator_host_config';
import { GPFirebaseEmulatorTestAppOption } from './types/firebase_emulator_test_app_options';

export type GPRunAuthenticatedPromise = (userCredential: UserCredential) => Promise<void>;

/**
 * Represents an Emulator test app.
 *
 * @property {string} projectId The Firebase Project Id
 * @property {string} storageBucket The Firebase Storage Bucket
 * @property {string} hubHostname The Firebase Emulator hub hostname
 * @property {string} hubPort The Firebase Emulator hub port number
 */
export class GPFirebaseEmulatorTestApp {
  projectId: string
  storageBucket?: string
  hubHostname: string
  hubPort: number

  authEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  firestoreEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  functionsEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  storageEmulatorHostConfig?: GPFirebaseEmulatorHostConfig

  private firebaseApp?: FirebaseApp

  constructor(options: GPFirebaseEmulatorTestAppOption) {
    this.projectId = options.projectId;
    this.storageBucket = options.storageBucket;
    this.hubHostname = options.hubHostname || 'localhost';
    this.hubPort = options.hubPort || 4400;
  }

  async init() {
    if (!this.firebaseApp) {
      const emulatorConfig = await GPFirebaseEmulatorConfig.fromHubApi(this.hubHostname, this.hubPort);

      this.authEmulatorHostConfig = emulatorConfig.authEmulatorHostConfig;
      this.firestoreEmulatorHostConfig = emulatorConfig.firestoreEmulatorHostConfig;
      this.functionsEmulatorHostConfig = emulatorConfig.functionsEmulatorHostConfig;
      this.storageEmulatorHostConfig = emulatorConfig.storageEmulatorHostConfig;

      if (this.authEmulatorHostConfig || this.firestoreEmulatorHostConfig || this.functionsEmulatorHostConfig || this.storageEmulatorHostConfig) {
        this.firebaseApp = initializeApp({
          apiKey: 'dummy', // This is only working for emulators...
          projectId: this.projectId,
          storageBucket: this.storageBucket
        }, 'app-' + new Date().getTime() + '-' + Math.random());

        if (this.authEmulatorHostConfig) {
          const auth = getAuth(this.firebaseApp);
          connectAuthEmulator(auth, `http://${this.authEmulatorHostConfig.hostname}:${this.authEmulatorHostConfig.port}`, { disableWarnings: true });
        }

        if (this.firestoreEmulatorHostConfig) {
          const firestore = getFirestore(this.firebaseApp);
          connectFirestoreEmulator(firestore, this.firestoreEmulatorHostConfig.hostname, this.firestoreEmulatorHostConfig.port);
        }

        if (this.functionsEmulatorHostConfig) {
          const functions = getFunctions(this.firebaseApp);
          connectFunctionsEmulator(functions, this.functionsEmulatorHostConfig.hostname, this.functionsEmulatorHostConfig.port);
        }

        if (this.storageEmulatorHostConfig) {
          const storage = getStorage(this.firebaseApp);
          connectStorageEmulator(storage, this.storageEmulatorHostConfig.hostname, this.storageEmulatorHostConfig.port);
        }
      }
    }
  }

  public get auth() {
    if (this.firebaseApp && this.authEmulatorHostConfig) return getAuth(this.firebaseApp);
    else throw Error('Auth emulator is not set');
  }

  public get firestore() {
    if (this.firebaseApp && this.firestoreEmulatorHostConfig) return getFirestore(this.firebaseApp);
    else throw Error('Firestore emulator is not set');
  }

  public get functions() {
    if (this.firebaseApp && this.functionsEmulatorHostConfig) return getFunctions(this.firebaseApp);
    else throw Error('Functions emulator is not set');
  }

  public get storage() {
    if (this.firebaseApp && this.storageEmulatorHostConfig) return getStorage(this.firebaseApp);
    else throw Error('Storage emulator is not set');
  }

  public runAuthenticated(email: string, password: string, pr: GPRunAuthenticatedPromise): Promise<void> {
    const auth = this.auth;

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return pr(userCredential)
          .then(async () => {
            await signOut(auth);
          });
      });
  }
}
