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

import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import * as firebaseFunctions from 'firebase/functions';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { readFile } from 'fs/promises';

import { GPFirebaseEmulatorTestApp, initAdminTestApp, initTestApp, assertFails, assertSucceeds, sleep, GPFirebaseEmulatorAdminTestApp } from '../src';
import { GPFirebaseEmulatorHostConfig } from '../src/types/';

import { GPAdditionRequest } from '../example/functions/src/firebase_functions/models/addtion_request.model';
import { GPAddtionResponse } from '../example/functions/src/firebase_functions/models/addtion_response.model';

let firebaseTestApp: GPFirebaseEmulatorTestApp | undefined;
let firebaseTestAdminApp: GPFirebaseEmulatorAdminTestApp | undefined;

describe('FirebaseEmulatorUnitTest', async () => {
  describe('Initalization', async () => {
    it('Initialization of the test app', async () => {
      const testParameters = JSON.parse((await readFile('./test.json')).toString());

      const hubHostname = testParameters.hub?.hostname as string | undefined;
      const hubPort = testParameters.hub?.port as number | undefined;

      const projectId = testParameters.projectId as string | undefined;
      const region = testParameters.region as string | undefined;
      const expectedEmulatorConfigFilePath = testParameters.firebaseEmulatorConfigFilePath as string | undefined;

      expect(projectId, 'Missing projectId in test.json').to.not.be.undefined;
      expect(region, 'Missing projectId in test.json').to.not.be.undefined;
      expect(expectedEmulatorConfigFilePath, 'Missing path to the expected emulator config file in test.json').to.not.be.undefined;

      if (expectedEmulatorConfigFilePath && projectId && region) {
        const expectedEmulatorConfig = JSON.parse((await readFile(expectedEmulatorConfigFilePath)).toString()).emulators;

        expect(expectedEmulatorConfig, 'Either the expected emulator configuration file is missing, or no emulator are set').to.not.be.undefined;

        if (expectedEmulatorConfig) {
          firebaseTestApp = await initTestApp({ projectId: projectId, region: region, hubHostname: hubHostname, hubPort: hubPort });

          // Authentification emulator
          if (firebaseTestApp.authEmulatorHostConfig && expectedEmulatorConfig.auth) {
            const expectedAuthEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.auth.host || 'localhost',
              port: expectedEmulatorConfig.auth.port || 9099
            };
            expect(firebaseTestApp.authEmulatorHostConfig.hostname, 'Wrong Auth emulator hostname').to.equal(expectedAuthEmulatorHostConfig.hostname);
            expect(firebaseTestApp.authEmulatorHostConfig.port, 'Wrong Auth emulator port').to.equal(expectedAuthEmulatorHostConfig.port);
          }

          // Firestore emulator
          if (firebaseTestApp.firestoreEmulatorHostConfig && expectedEmulatorConfig.firestore) {
            const expectedFirestoreEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.firestore.host || 'localhost',
              port: expectedEmulatorConfig.firestore.port || 8080
            };
            expect(firebaseTestApp.firestoreEmulatorHostConfig.hostname, 'Wrong Firestore emulator hostname').to.equal(expectedFirestoreEmulatorHostConfig.hostname);
            expect(firebaseTestApp.firestoreEmulatorHostConfig.port, 'Wrong Firestore emulator port').to.equal(expectedFirestoreEmulatorHostConfig.port);
          }

          // Functions emulator
          if (firebaseTestApp.functionsEmulatorHostConfig && expectedEmulatorConfig.functions) {
            const expectedFunctionsEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.functions.host || 'localhost',
              port: expectedEmulatorConfig.functions.port || 5001
            };
            expect(firebaseTestApp.functionsEmulatorHostConfig.hostname, 'Wrong Functions emulator hostname').to.equal(expectedFunctionsEmulatorHostConfig.hostname);
            expect(firebaseTestApp.functionsEmulatorHostConfig.port, 'Wrong Functions emulator port').to.equal(expectedFunctionsEmulatorHostConfig.port);
          }

          // Storage emulator
          if (firebaseTestApp.storageEmulatorHostConfig && expectedEmulatorConfig.storage) {
            const expectedStorageEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.storage.host || 'localhost',
              port: expectedEmulatorConfig.storage.port || 9199
            };
            expect(firebaseTestApp.storageEmulatorHostConfig.hostname, 'Wrong Storage emulator hostname').to.equal(expectedStorageEmulatorHostConfig.hostname);
            expect(firebaseTestApp.storageEmulatorHostConfig.port, 'Wrong Storage emulator port').to.equal(expectedStorageEmulatorHostConfig.port);
          }
        }
      }
    });
    it('Initialization of the test admin app', async () => {
      const testParameters = JSON.parse((await readFile('./test.json')).toString());

      const hubHostname = testParameters.hub?.hostname as string | undefined;
      const hubPort = testParameters.hub?.port as number | undefined;

      const projectId = testParameters.projectId as string | undefined;
      const expectedEmulatorConfigFilePath = testParameters.firebaseEmulatorConfigFilePath as string | undefined;

      expect(projectId, 'Missing projectId in test.json').to.not.be.undefined;
      expect(expectedEmulatorConfigFilePath, 'Missing path to the expected emulator config file in test.json').to.not.be.undefined;

      if (expectedEmulatorConfigFilePath && projectId) {
        const expectedEmulatorConfig = JSON.parse((await readFile(expectedEmulatorConfigFilePath)).toString()).emulators;

        expect(expectedEmulatorConfig, 'Either the expected emulator configuration file is missing, or no emulator are set').to.not.be.undefined;

        if (expectedEmulatorConfig) {
          firebaseTestAdminApp = await initAdminTestApp({ projectId: projectId, hubHostname: hubHostname, hubPort: hubPort });

          // Authentification emulator
          if (firebaseTestAdminApp.authEmulatorHostConfig && expectedEmulatorConfig.auth) {
            const expectedAuthEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.auth.host || 'localhost',
              port: expectedEmulatorConfig.auth.port || 9099
            };
            expect(firebaseTestAdminApp.authEmulatorHostConfig.hostname, 'Wrong Auth emulator hostname').to.equal(expectedAuthEmulatorHostConfig.hostname);
            expect(firebaseTestAdminApp.authEmulatorHostConfig.port, 'Wrong Auth emulator port').to.equal(expectedAuthEmulatorHostConfig.port);
          }

          // Firestore emulator
          if (firebaseTestAdminApp.firestoreEmulatorHostConfig && expectedEmulatorConfig.firestore) {
            const expectedFirestoreEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.firestore.host || 'localhost',
              port: expectedEmulatorConfig.firestore.port || 8080
            };
            expect(firebaseTestAdminApp.firestoreEmulatorHostConfig.hostname, 'Wrong Firestore emulator hostname').to.equal(expectedFirestoreEmulatorHostConfig.hostname);
            expect(firebaseTestAdminApp.firestoreEmulatorHostConfig.port, 'Wrong Firestore emulator port').to.equal(expectedFirestoreEmulatorHostConfig.port);
          }

          // Storage emulator
          if (firebaseTestAdminApp.storageEmulatorHostConfig && expectedEmulatorConfig.storage) {
            const expectedStorageEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
              hostname: expectedEmulatorConfig.storage.host || 'localhost',
              port: expectedEmulatorConfig.storage.port || 9199
            };
            expect(firebaseTestAdminApp.storageEmulatorHostConfig.hostname, 'Wrong Storage emulator hostname').to.equal(expectedStorageEmulatorHostConfig.hostname);
            expect(firebaseTestAdminApp.storageEmulatorHostConfig.port, 'Wrong Storage emulator port').to.equal(expectedStorageEmulatorHostConfig.port);
          }
        }
      }
    });
  });
});
describe('Tests admin actions', async () => {
  describe('Perform task with admin access', async () => {
    it('Create a user', async () => {
      const auth = firebaseTestAdminApp!.auth;
      assertSucceeds(auth.createUser({ email: 'test_1@example.com', password: 'Test+1234', uid: 'test_1' }));
      await sleep(1000);
    });
    it('Check user document has been created', async () => {
      const db = firebaseTestAdminApp!.firestore;
      const userDoc = await assertSucceeds(db.collection('/users').doc('test_1').get());
      expect(userDoc.exists, 'Missing document \'/users/test_1\'').to.be.true;

      const userData = userDoc.data();
      expect(userData, 'Document \'/users/test_1\' should not be empty').to.exist;

      if (userData) {
        expect(userData.email, 'Document \'/users/test_1\' / Field \'email\' should not be undefined').to.exist;
        expect(userData.email, 'Document \'/users/test_1\' / Field \'email\' is not a string').to.be.a('string');
        expect(userData.email, 'Document \'/users/test_1\' / Field \'email\' value mismatched').to.equal('test_1@example.com');
      }
    });
    it('Check user status document has been created', async () => {
      const db = firebaseTestAdminApp!.firestore;
      const userDoc = await assertSucceeds(db.collection('/users/test_1/status').doc('test_1').get());
      expect(userDoc.exists, 'Missing document \'/users/test_1/status/test_1\'').to.be.true;

      const userData = userDoc.data();
      expect(userData, 'Document \'/users/test_1\' should not be empty').to.exist;

      if (userData) {
        expect(userData.isProfileComplete, 'Document \'/users/test_1/status/test_1\' / Field \'isProfileComplete\' should not be undefined').to.exist;
        expect(userData.isProfileComplete, 'Document \'/users/test_1/status/test_1\' / Field \'isProfileComplete\' is not a string').to.be.a('boolean');
        expect(userData.isProfileComplete, 'Document \'/users/test_1/status/test_1\' / Field \'isProfileComplete\' value mismatched').to.false;
      }
    });
    it('Delete user', async () => {
      const auth = firebaseTestAdminApp!.auth;
      assertSucceeds(auth.deleteUser('test_1'));
      await sleep(1000);
    });
    it('Check user document has been deleted', async () => {
      const db = firebaseTestAdminApp!.firestore;
      const userDoc = await assertSucceeds(db.collection('/users').doc('test_1').get());
      expect(userDoc.exists, 'Document \'/users/test_1\' exists though it shouldn\'t').to.be.false;
    });
  });
  describe('Perform cleanup', async () => {
    it('Fill up DB with documents', async () => {
      const db = firebaseTestAdminApp!.firestore;
      for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= 10; j++) {
          await assertSucceeds(db.collection(`/collection_${i}`).doc(`document_${j}`).set({ test: 'This is a test document' }));
          for (let k = 1; k <= 2; k++) {
            for (let l = 1; l <= 5; l++) {
              await assertSucceeds(db.collection(`/collection_${i}/document_${j}/subcollection_${k}`).doc(`document_${k}`).set({ test: 'This is a test document' }));
            }
          }
        }
      }
    });
    it('Fill up DB with users', async () => {
      const auth = firebaseTestAdminApp!.auth;
      for (let i = 1; i <= 10; i++) {
        await assertSucceeds(auth.createUser({ email: `test_${i}@example.com`, password: 'Test+1234', uid: `test_${i}` }));
      }
      await sleep(5000);
    });
    it('Delete all users', async () => {
      const auth = firebaseTestAdminApp!.auth;
      await assertSucceeds(firebaseTestAdminApp!.cleanAllUsers());
      const userList = (await assertSucceeds(auth.listUsers())).users;
      expect(userList.length, `There are still ${userList.length} user(s)`).to.equal(0);
      await sleep(5000);
    });
    it('Delete all data', async () => {
      const db = firebaseTestAdminApp!.firestore;
      await assertSucceeds(firebaseTestAdminApp!.cleanAllData());
      const collectionList = await db.listCollections();
      await expect(collectionList.length, `There are still ${collectionList.length} collection(s)`).to.equal(0);
    });
  });
});
describe('Tests regular actions', async () => {
  describe('User creation', async () => {
    it('Create user', async () => {
      const auth = firebaseTestApp!.auth;

      await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth, 'test_1@example.com', 'Test+1234'));
      await assertSucceeds(firebaseAuth.signOut(auth));

      await sleep(1000);
    });
    it('Check user document has been created', async () => {
      await firebaseTestApp!.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
        const db = firebaseTestApp!.firestore;
        const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}`)));
        expect(userDoc.exists(), `Missing document '/users/${userCredential.user.uid}'`).to.be.true;

        const userData = userDoc.data();
        expect(userData, `Document '/users/${userCredential.user.uid}' should not be empty`).to.exist;

        if (userData) {
          expect(userData.email, `Document '/users/${userCredential.user.uid}' / Field 'email' should not be undefined`).to.exist;
          expect(userData.email, `Document '/users/${userCredential.user.uid}' / Field 'email' is not a string`).to.be.a('string');
          expect(userData.email, `Document '/users/${userCredential.user.uid}' / Field 'email' value mismatched`).to.equal(userCredential.user.email);
        }
      });
    });
    it('Check user status document has been created', async () => {
      await firebaseTestApp!.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
        const db = firebaseTestApp!.firestore;
        const userDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${userCredential.user.uid}/status/${userCredential.user.uid}`)));
        expect(userDoc.exists(), `Missing document '/users/${userCredential.user.uid}/status/${userCredential.user.uid}'`).to.be.true;

        const userData = userDoc.data();
        expect(userData, `Document '/users/${userCredential.user.uid}/status/${userCredential.user.uid}' should not be empty`).to.exist;

        if (userData) {
          expect(userData.isProfileComplete, `Document '/users/${userCredential.user.uid}/status/${userCredential.user.uid}' / Field 'isProfileComplete' should not be undefined`).to.exist;
          expect(userData.isProfileComplete, `Document '/users/${userCredential.user.uid}/status/${userCredential.user.uid}' / Field 'isProfileComplete' is not a string`).to.be.a('boolean');
          expect(userData.isProfileComplete, `Document '/users/${userCredential.user.uid}/status/${userCredential.user.uid}' / Field 'isProfileComplete' value mismatched`).to.be.false;
        }
      });
    });
    it('Call the add function', async () => {
      await firebaseTestApp!.runAuthenticated('test_1@example.com', 'Test+1234', async () => {
        const functions = firebaseTestApp!.functions;
        const addFunction = firebaseFunctions.httpsCallable<GPAdditionRequest, GPAddtionResponse>(functions, 'add');
        const response = await assertSucceeds(addFunction({ a: 10, b: 20 }));
        const data = response.data;
        expect(data.result, '').to.equal(10 + 20);
      });
    });
    it('Create anoter user', async () => {
      const auth = firebaseTestApp!.auth;

      await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth, 'test_2@example.com', 'Test+1234'));
      await assertSucceeds(firebaseAuth.signOut(auth));

      await sleep(1000);
    });
    it('Check a user cannot access some other user\'s documents (with permission-denied code expected)', async () => {
      await firebaseTestApp!.runAuthenticated('test_2@example.com', 'Test+1234', async () => {
        const db = firebaseTestApp!.firestore;
        const otherUserUid = (await firebaseTestAdminApp!.auth.getUserByEmail('test_1@example.com')).uid;
        await assertFails(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${otherUserUid}`)), 'permission-denied');
      });
    });
  });
  describe('User deletion', async () => {
    it('Delete user', async () => {
      await firebaseTestApp!.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
        assertSucceeds(userCredential.user.delete());
      });

      await sleep(1000);
    });
    it('Check user document has been deleted', async () => {
      const db = firebaseTestAdminApp!.firestore;
      const docs = await assertSucceeds(db.collection('/users').where('email', '==', 'test_1@example.com').get());
      expect(docs.docs.length, 'More than one document found in /users with email \'test_1@example.com\'').to.equal(0);
    });
    it('Delete another user', async () => {
      await firebaseTestApp!.runAuthenticated('test_2@example.com', 'Test+1234', async (userCredential) => {
        assertSucceeds(userCredential.user.delete());
      });

      await sleep(1000);
    });
  });
});
