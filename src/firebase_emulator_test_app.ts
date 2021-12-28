// gp-firebase-emulator-unit-test
//
// Greg PFISTER
// (C) 2021, Greg PFISTER. MIT License
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { FirebaseApp, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { GPFirebaseEmulatorConfig } from './models/firebase_emulator_config.model';

import { GPFirebaseEmulatorHostConfig } from './types/firebase_emulator_host_config.type';
import { GPFirebaseEmulatorTestAppOption } from './types/firebase_emulator_test_app_options.type';

/**
 * Represents an Emulator test app.
 */
export class GPFirebaseEmulatorTestApp {
  private _projectId: string
  private _region?: string
  private _storageBucket?: string
  private _hubHostname: string
  private _hubPort: number

  private _authEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  private _firestoreEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  private _functionsEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  private _storageEmulatorHostConfig?: GPFirebaseEmulatorHostConfig

  private firebaseApp?: FirebaseApp

  /**
   * Class constructor
   * @param options The options to setup the test app
   */
  constructor(options: GPFirebaseEmulatorTestAppOption) {
    this._projectId = options.projectId;
    this._region = options.region;
    this._storageBucket = options.storageBucket;
    this._hubHostname = options.hubHostname || 'localhost';
    this._hubPort = options.hubPort || 4400;
  }

  /**
   * Init the app
   * 
   * @example
   * ```javascrip
   * const app = new GPFirebaseEmulatorTestAppOption({projectId: 'project', region: 'europe-west3', storageBucket: 'default'});
   * app.init().then(() => {
   *   // Run your code here
   * });
   * ```
   */
  async init() {
    if (!this.firebaseApp) {
      const emulatorConfig = await GPFirebaseEmulatorConfig.fromHubApi(this._hubHostname, this._hubPort);

      this._authEmulatorHostConfig = emulatorConfig.authEmulatorHostConfig;
      this._firestoreEmulatorHostConfig = emulatorConfig.firestoreEmulatorHostConfig;
      this._functionsEmulatorHostConfig = emulatorConfig.functionsEmulatorHostConfig;
      this._storageEmulatorHostConfig = emulatorConfig.storageEmulatorHostConfig;

      if (this._authEmulatorHostConfig || this._firestoreEmulatorHostConfig || this._functionsEmulatorHostConfig || this._storageEmulatorHostConfig) {
        this.firebaseApp = initializeApp({
          apiKey: 'dummy', // This is only working for emulators...
          projectId: this._projectId,
          storageBucket: this._storageBucket
        }, 'app-' + new Date().getTime() + '-' + Math.random());

        if (this._authEmulatorHostConfig) {
          const auth = getAuth(this.firebaseApp);
          connectAuthEmulator(auth, `http://${this._authEmulatorHostConfig.hostname}:${this._authEmulatorHostConfig.port}`, { disableWarnings: true });
        }

        if (this._firestoreEmulatorHostConfig) {
          const firestore = getFirestore(this.firebaseApp);
          connectFirestoreEmulator(firestore, this._firestoreEmulatorHostConfig.hostname, this._firestoreEmulatorHostConfig.port);
        }

        if (this._functionsEmulatorHostConfig) {
          const functions = getFunctions(this.firebaseApp, this._region);
          connectFunctionsEmulator(functions, this._functionsEmulatorHostConfig.hostname, this._functionsEmulatorHostConfig.port);
        }

        if (this._storageEmulatorHostConfig) {
          const storage = getStorage(this.firebaseApp);
          connectStorageEmulator(storage, this._storageEmulatorHostConfig.hostname, this._storageEmulatorHostConfig.port);
        }
      }
    }
  }

  /**
   * Return the Auth client API module of the test app, if setup
   * @throws An error if the Auth emulator is not ready
   */
  public get auth() {
    if (this.firebaseApp && this._authEmulatorHostConfig) return getAuth(this.firebaseApp);
    else throw Error('Auth emulator is not set');
  }

  /**
   * Return the Cloud Firestore client API module of the test app, if setup
   * @throws An error if the Cloud Firestore emulator is not ready
   */
  public get firestore() {
    if (this.firebaseApp && this._firestoreEmulatorHostConfig) return getFirestore(this.firebaseApp);
    else throw Error('Firestore emulator is not set');
  }

  /**
   * Return the Cloud Functions client API module of the test app, if setup
   * @throws An error if the Cloud Functions emulator is not ready
   */
  public get functions() {
    if (this.firebaseApp && this._functionsEmulatorHostConfig) return getFunctions(this.firebaseApp, this._region);
    else throw Error('Functions emulator is not set');
  }

  /**
   * Return the Cloud Storage client API module of the test app, if setup
   * @throws An error if the Cloud Storage emulator is not ready
   */
  public get storage() {
    if (this.firebaseApp && this._storageEmulatorHostConfig) return getStorage(this.firebaseApp);
    else throw Error('Storage emulator is not set');
  }

  /**
   * Run in an authenticated context an async function will have the user 
   * credentials of the authenticated user
   * @param email The email of the user account which will be user to 
   *              authenticate
   * @param password The password of the user account which will be user to 
   *                 authenticate
   * @param pr The async function to run in the authenticated context
   * @returns A promise which will trigger the `pr` function once authenticated,
   *         then sign out the user
   * 
   * @example
   * ```javascrip
   * const app = new GPFirebaseEmulatorTestAppOption({projectId: 'project', region: 'europe-west3', storageBucket: 'default'});
   * app.init().then(async () => {
   *   await app.runAuthenticated('test@example.com', 'password', async (userCredentials) => {
   *     // Run your code against the user credentials
   *   });
   * });
   * ```
   */
  public runAuthenticated(email: string, password: string, pr: (userCredential: UserCredential) => Promise<void>): Promise<void> {
    const auth = this.auth;

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return pr(userCredential)
          .then(async () => {
            await signOut(auth);
          });
      });
  }

  /**
   * Return the Auth emulator host config (hostname and port)
   */
  public get authEmulatorHostConfig() { return this._authEmulatorHostConfig; }

  /**
   * Return the Cloud Firestore emulator host config (hostname and port)
   */
  public get firestoreEmulatorHostConfig() { return this._firestoreEmulatorHostConfig; }

  /**
   * Return the Cloud Functions emulator host config (hostname and port)
   */
  public get functionsEmulatorHostConfig() { return this._functionsEmulatorHostConfig; }

  /**
   * Return the Cloud Storage emulator host config (hostname and port)
   */
  public get storageEmulatorHostConfig() { return this._storageEmulatorHostConfig; }
}
