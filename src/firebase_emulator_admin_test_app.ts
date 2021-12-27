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
 * Represents an Emulator test app.
 *
 * @property {string} projectId The Firebase Project Id
 * @property {string} storageBucket The Firebase Storage Bucket
 * @property {string} hubHostname The Firebase Emulator hub hostname
 * @property {string} hubPort The Firebase Emulator hub port number
 */
export class GPFirebaseEmulatorAdminTestApp {
  projectId: string
  storageBucket?: string
  hubHostname: string
  hubPort: number

  authEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  firestoreEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  storageEmulatorHostConfig?: GPFirebaseEmulatorHostConfig

  private firebaseApp?: admin.app.App

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
      // this.functionsEmulatorHostConfig = emulatorConfig.functionsEmulatorHostConfig;
      this.storageEmulatorHostConfig = emulatorConfig.storageEmulatorHostConfig;

      if (this.authEmulatorHostConfig || this.firestoreEmulatorHostConfig || this.storageEmulatorHostConfig) {
        if (this.authEmulatorHostConfig) {
          process.env.FIREBASE_AUTH_EMULATOR_HOST = `${this.authEmulatorHostConfig.hostname}:${this.authEmulatorHostConfig.port}`;
        }

        if (this.firestoreEmulatorHostConfig) {
          // const firestore = getFirestore(this.firebaseApp);
          // connectFirestoreEmulator(firestore, this.firestoreEmulatorHostConfig.hostname, this.firestoreEmulatorHostConfig.port);
          process.env.FIRESTORE_EMULATOR_HOST = `${this.firestoreEmulatorHostConfig.hostname}:${this.firestoreEmulatorHostConfig.port}`;
        }

        if (this.storageEmulatorHostConfig) {
          // const storage = getStorage(this.firebaseApp);
          // connectStorageEmulator(storage, this.storageEmulatorHostConfig.hostname, this.storageEmulatorHostConfig.port);
          process.env.FIREBASE_STORAGE_EMULATOR_HOST = `${this.storageEmulatorHostConfig.hostname}:${this.storageEmulatorHostConfig.port}`;
        }

        this.firebaseApp = admin.initializeApp({ projectId: this.projectId }, 'app-' + new Date().getTime() + '-' + Math.random());
      }
    }
  }

  public get auth() {
    if (this.firebaseApp && this.authEmulatorHostConfig) return this.firebaseApp.auth();
    else throw Error('Auth emulator is not set');
  }

  public get firestore() {
    if (this.firebaseApp && this.firestoreEmulatorHostConfig) return this.firebaseApp.firestore();
    else throw Error('Firestore emulator is not set');
  }

  public get storage() {
    if (this.firebaseApp && this.storageEmulatorHostConfig) return this.firebaseApp.storage();
    else throw Error('Storage emulator is not set');
  }

  public async cleanAllData() {
    if (this.firestoreEmulatorHostConfig) {
      await axios.delete(`http://${this.firestoreEmulatorHostConfig.hostname}:${this.firestoreEmulatorHostConfig.port}/emulator/v1/projects/${this.projectId}/databases/(default)/documents`);
    }
  }

  public async cleanAllUsers() {
    if (this.authEmulatorHostConfig && this.firebaseApp) {
      const auth = this.auth;
      const userList = (await auth.listUsers()).users;
      await auth.deleteUsers(userList.map((user) => user.uid));
    }
  }

  public async enableBackgroundTriggers() {
    await axios.put(`http://${this.hubHostname}:${this.hubPort}/functions/enableBackgroundTriggers`);
  }

  public async disableBackgroundTriggers() {
    await axios.put(`http://${this.hubHostname}:${this.hubPort}/functions/disableBackgroundTriggers`);
  }
}
