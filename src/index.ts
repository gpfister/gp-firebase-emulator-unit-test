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

/**
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER
 * @module
 */

export type { GPFirebaseEmulatorTestAppOption, GPFirebaseEmulatorHostConfig } from './types/';
export { GPFirebaseEmulatorTestApp } from './firebase_emulator_test_app';
export { GPFirebaseEmulatorAdminTestApp } from './firebase_emulator_admin_test_app';
export {
  initAdminTestApp,
  initTestApp,
  assertFails,
  assertSucceeds,
  sleep
} from './firebase_emulator_unit_test';

// This should be imported on each project
// export * as firebaseAuth from 'firebase/auth';
// export * as firebaseFirestore from 'firebase/firestore';
// export * as firebaseFunctions from 'firebase/functions';
// export * as firebaseStorage from 'firebase/storage';
// export * as adminFirebaseAuth from 'firebase-admin/lib/auth';
// export * as adminFirebaseFirestore from 'firebase-admin/lib/firestore';
// export * as adminFirebaseStorage from 'firebase-admin/lib/storage';
