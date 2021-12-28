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

import axios from 'axios';
import * as admin from 'firebase-admin';

import { GPFirebaseEmulatorConfig } from './models/firebase_emulator_config.model';
import { GPFirebaseEmulatorHostConfig } from './types/firebase_emulator_host_config.type';
import { GPFirebaseEmulatorTestAppOption } from './types/firebase_emulator_test_app_options.type';

/**
 * Represents an Emulator test app with admin priviledge
 */
export class GPFirebaseEmulatorAdminTestApp {
  private _projectId: string
  private _storageBucket?: string
  private _hubHostname: string
  private _hubPort: number

  private _authEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  private _firestoreEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  private _storageEmulatorHostConfig?: GPFirebaseEmulatorHostConfig

  private firebaseApp?: admin.app.App

  /**
   * Class constructor
   * @param options The options to setup the test app
   */
  constructor(options: GPFirebaseEmulatorTestAppOption) {
    this._projectId = options.projectId;
    this._storageBucket = options.storageBucket;
    this._hubHostname = options.hubHostname || 'localhost';
    this._hubPort = options.hubPort || 4400;
  }

  /**
   * Init the app
   */
  async init() {
    if (!this.firebaseApp) {
      const emulatorConfig = await GPFirebaseEmulatorConfig.fromHubApi(this._hubHostname, this._hubPort);

      this._authEmulatorHostConfig = emulatorConfig.authEmulatorHostConfig;
      this._firestoreEmulatorHostConfig = emulatorConfig.firestoreEmulatorHostConfig;
      // this.functionsEmulatorHostConfig = emulatorConfig.functionsEmulatorHostConfig;
      this._storageEmulatorHostConfig = emulatorConfig.storageEmulatorHostConfig;

      if (this._authEmulatorHostConfig || this._firestoreEmulatorHostConfig || this._storageEmulatorHostConfig) {
        if (this._authEmulatorHostConfig) {
          process.env.FIREBASE_AUTH_EMULATOR_HOST = `${this._authEmulatorHostConfig.hostname}:${this._authEmulatorHostConfig.port}`;
        }

        if (this._firestoreEmulatorHostConfig) {
          process.env.FIRESTORE_EMULATOR_HOST = `${this._firestoreEmulatorHostConfig.hostname}:${this._firestoreEmulatorHostConfig.port}`;
        }

        if (this._storageEmulatorHostConfig) {
          process.env.FIREBASE_STORAGE_EMULATOR_HOST = `${this._storageEmulatorHostConfig.hostname}:${this._storageEmulatorHostConfig.port}`;
        }

        this.firebaseApp = admin.initializeApp({ projectId: this._projectId, storageBucket: this._storageBucket }, 'app-' + new Date().getTime() + '-' + Math.random());
      }
    }
  }

  /**
   * Return the Auth client API module of the test app, if setup
   * @throws An error if the Auth emulator is not ready
   */
  public get auth() {
    if (this.firebaseApp && this._authEmulatorHostConfig) return this.firebaseApp.auth();
    else throw Error('Auth emulator is not set');
  }

  /**
   * Return the Cloud Firestore client API module of the test app, if setup
   * @throws An error if the Cloud Firestore emulator is not ready
   */
  public get firestore() {
    if (this.firebaseApp && this._firestoreEmulatorHostConfig) return this.firebaseApp.firestore();
    else throw Error('Firestore emulator is not set');
  }

  /**
   * Return the Cloud Storage client API module of the test app, if setup
   * @throws An error if the Cloud Storage emulator is not ready
   */
  public get storage() {
    if (this.firebaseApp && this._storageEmulatorHostConfig) return this.firebaseApp.storage();
    else throw Error('Storage emulator is not set');
  }

  /**
   * Clean all data in the database
   */
  public async cleanAllData() {
    if (this._firestoreEmulatorHostConfig) {
      await axios.delete(`http://${this._firestoreEmulatorHostConfig.hostname}:${this._firestoreEmulatorHostConfig.port}/emulator/v1/projects/${this._projectId}/databases/(default)/documents`);
    }
  }

  /**
   * Clean all users
   */
  public async cleanAllUsers() {
    if (this._authEmulatorHostConfig && this.firebaseApp) {
      const auth = this.auth;
      const userList = (await auth.listUsers()).users;
      await auth.deleteUsers(userList.map((user) => user.uid));
    }
  }

  /**
   * Enable Functions background triggers (on Firestore create/update/delete, on user creation/deletion, ...)
   */
  public async enableBackgroundTriggers() {
    await axios.put(`http://${this._hubHostname}:${this._hubPort}/functions/enableBackgroundTriggers`);
  }

  /**
   * Disable Functions background triggers (on Firestore create/update/delete, on user creation/deletion, ...)
   */
  public async disableBackgroundTriggers() {
    await axios.put(`http://${this._hubHostname}:${this._hubPort}/functions/disableBackgroundTriggers`);
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
   * Return the Cloud Storage emulator host config (hostname and port)
   */
  public get storageEmulatorHostConfig() { return this._storageEmulatorHostConfig; }
}
