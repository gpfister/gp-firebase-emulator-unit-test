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

import * as axios from 'axios';
import { GPFirebaseEmulatorHostConfig } from '../types/';

/**
 * Internal object which holds the configuration of the Firebase Emulator,
 * queried from the hub.
 *
 * @since 0.1.0
 * @internal
 */
export class GPFirebaseEmulatorConfig {
  _authEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  _firestoreEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  _functionsEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  _storageEmulatorHostConfig?: GPFirebaseEmulatorHostConfig

  private constructor(authEmulator?: GPFirebaseEmulatorHostConfig,
    firestoreEmulator?: GPFirebaseEmulatorHostConfig,
    functionsEmulator?: GPFirebaseEmulatorHostConfig,
    storageEmulator?: GPFirebaseEmulatorHostConfig
  ) {
    this._authEmulatorHostConfig = authEmulator;
    this._firestoreEmulatorHostConfig = firestoreEmulator;
    this._functionsEmulatorHostConfig = functionsEmulator;
    this._storageEmulatorHostConfig = storageEmulator;
  }

  public static async fromHubApi(hubHostname?: string, hubPort?: number) {
    const intHubHostname = hubHostname || 'localhost';
    const intHubPort = hubPort || 4400;

    const hubResponse = await axios.default.get(`http://${intHubHostname}:${intHubPort}/emulators`);
    const emulatorConfig = hubResponse.data;

    return new GPFirebaseEmulatorConfig(
      emulatorConfig.auth ? { hostname: emulatorConfig.auth.host || 'localhost', port: emulatorConfig.auth.port || 9099 } : undefined,
      emulatorConfig.firestore ? { hostname: emulatorConfig.firestore.host || 'localhost', port: emulatorConfig.firestore.port || 8080 } : undefined,
      emulatorConfig.functions ? { hostname: emulatorConfig.functions.host || 'localhost', port: emulatorConfig.functions.port || 5001 } : undefined,
      emulatorConfig.storage ? { hostname: emulatorConfig.storage.host || 'localhost', port: emulatorConfig.storage.port || 9199 } : undefined
    );
  }

  public get authEmulatorHostConfig() { return this._authEmulatorHostConfig; }
  public get firestoreEmulatorHostConfig() { return this._firestoreEmulatorHostConfig; }
  public get functionsEmulatorHostConfig() { return this._functionsEmulatorHostConfig; }
  public get storageEmulatorHostConfig() { return this._storageEmulatorHostConfig; }
}
