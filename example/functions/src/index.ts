//
// gp-firebase-emulator-unit-test
// Copyright (C) 2021-2023, Greg PFISTER. MIT License
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { GPFirebaseAuthModule } from './firebase_auth';
import { GPFirebaseFirestoreModule } from './firebase_firestore';
import { GPFirebaseFunctionsModule } from './firebase_functions';

admin.initializeApp();

// The addition function
export const add = functions.region('europe-west1').https.onCall((data, context) => GPFirebaseFunctionsModule.additionController.add(data, context));

// On user creation
export const onUserAccountCreated = functions
    .region('europe-west1')
    .auth.user()
    .onCreate((user) => GPFirebaseAuthModule.userAccountController.onUserAccountCreated(user));

// On user deletion
export const onUserAccountDeleted = functions
    .region('europe-west1')
    .auth.user()
    .onDelete((user) => GPFirebaseAuthModule.userAccountController.onUserAccountDeleted(user));

// On user updated
export const onUserUpdated = functions
    .region('europe-west1')
    .firestore.document('/users/{userId}')
    .onUpdate((snapshot, context) => GPFirebaseFirestoreModule.userController.onUpdate(snapshot, context));
