//
// gp-firebase-emulator-unit-test
// Copyright (c) 2021-2023, Greg PFISTER. MIT License
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import * as firebaseAuth from 'firebase/auth';
import * as firebaseFirestore from 'firebase/firestore';
import * as firebaseFunctions from 'firebase/functions';
import { describe, it, run } from 'mocha';
import { expect } from 'chai';
import { readFile } from 'fs/promises';

import { initAdminTestApp, initTestApp, assertFails, assertSucceeds, sleep, GPFirebaseEmulatorHostConfig, GPFirebaseEmulatorTestApp, GPFirebaseEmulatorAdminTestApp } from '../src';

import { GPAdditionRequest } from '../example/functions/src/firebase_functions/models/addtion_request.model';
import { GPAddtionResponse } from '../example/functions/src/firebase_functions/models/addtion_response.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OSKTUnitTestApps = { firebaseTestApp: GPFirebaseEmulatorTestApp; firebaseAdminTestApp: GPFirebaseEmulatorAdminTestApp; testParameters: any };

async function init(): Promise<OSKTUnitTestApps> {
    const testParameters = JSON.parse((await readFile('./test.json')).toString());
    const firebaseTestApp = await initTestApp({ projectId: testParameters.projectId, region: testParameters.region, storageBucket: testParameters.storageBucket, hubHostname: testParameters.hub.hostname, hubPort: testParameters.hub.port });
    const firebaseAdminTestApp = await initAdminTestApp({ projectId: testParameters.projectId, storageBucket: testParameters.storageBucket, hubHostname: testParameters.hub.hostname, hubPort: testParameters.hub.port });

    return { firebaseTestApp: firebaseTestApp, firebaseAdminTestApp: firebaseAdminTestApp, testParameters: testParameters };
}

async function loadTest(unitTestApps: OSKTUnitTestApps) {
    describe('FirebaseEmulatorUnitTest', async () => {
        describe('Initalization', async () => {
            it('Initialization of the test app', async () => {
                expect(unitTestApps.testParameters.projectId, 'Missing projectId in test.json').to.not.be.undefined;
                expect(unitTestApps.testParameters.region, 'Missing projectId in test.json').to.not.be.undefined;
                expect(unitTestApps.testParameters.storageBucket, 'Missing storageBucket in test.json').to.not.be.undefined;
                expect(unitTestApps.testParameters.firebaseEmulatorConfigFilePath, 'Missing path to the expected emulator config file in test.json').to.not.be.undefined;

                if (unitTestApps.testParameters.firebaseEmulatorConfigFilePath && unitTestApps.testParameters.projectId && unitTestApps.testParameters.region) {
                    const expectedEmulatorConfig = JSON.parse((await readFile(unitTestApps.testParameters.firebaseEmulatorConfigFilePath)).toString()).emulators;

                    expect(expectedEmulatorConfig, 'Either the expected emulator configuration file is missing, or no emulator are set').to.not.be.undefined;

                    if (expectedEmulatorConfig) {
                        // Authentification emulator
                        if (unitTestApps.firebaseTestApp.authEmulatorHostConfig && expectedEmulatorConfig.auth) {
                            const expectedAuthEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.auth.host || '127.0.0.1',
                                port: expectedEmulatorConfig.auth.port || 9099,
                            };
                            expect(unitTestApps.firebaseTestApp.authEmulatorHostConfig.port, 'Wrong Auth emulator port').to.equal(expectedAuthEmulatorHostConfig.port);
                        }

                        // Firestore emulator
                        if (unitTestApps.firebaseTestApp.firestoreEmulatorHostConfig && expectedEmulatorConfig.firestore) {
                            const expectedFirestoreEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.firestore.host || '127.0.0.1',
                                port: expectedEmulatorConfig.firestore.port || 8080,
                            };
                            expect(unitTestApps.firebaseTestApp.firestoreEmulatorHostConfig.port, 'Wrong Firestore emulator port').to.equal(expectedFirestoreEmulatorHostConfig.port);
                        }

                        // Functions emulator
                        if (unitTestApps.firebaseTestApp.functionsEmulatorHostConfig && expectedEmulatorConfig.functions) {
                            const expectedFunctionsEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.functions.host || '127.0.0.1',
                                port: expectedEmulatorConfig.functions.port || 5001,
                            };
                            expect(unitTestApps.firebaseTestApp.functionsEmulatorHostConfig.port, 'Wrong Functions emulator port').to.equal(expectedFunctionsEmulatorHostConfig.port);
                        }

                        // Storage emulator
                        if (unitTestApps.firebaseTestApp.storageEmulatorHostConfig && expectedEmulatorConfig.storage) {
                            const expectedStorageEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.storage.host || '127.0.0.1',
                                port: expectedEmulatorConfig.storage.port || 9199,
                            };
                            expect(unitTestApps.firebaseTestApp.storageEmulatorHostConfig.port, 'Wrong Storage emulator port').to.equal(expectedStorageEmulatorHostConfig.port);
                        }
                    }
                }
            });
            it('Initialization of the test admin app', async () => {
                expect(unitTestApps.testParameters.projectId, 'Missing projectId in test.json').to.not.be.undefined;
                expect(unitTestApps.testParameters.storageBucket, 'Missing storageBucket in test.json').to.not.be.undefined;
                expect(unitTestApps.testParameters.firebaseEmulatorConfigFilePath, 'Missing path to the expected emulator config file in test.json').to.not.be.undefined;

                if (unitTestApps.testParameters.firebaseEmulatorConfigFilePath && unitTestApps.testParameters.projectId) {
                    const expectedEmulatorConfig = JSON.parse((await readFile(unitTestApps.testParameters.firebaseEmulatorConfigFilePath)).toString()).emulators;

                    expect(expectedEmulatorConfig, 'Either the expected emulator configuration file is missing, or no emulator are set').to.not.be.undefined;

                    if (expectedEmulatorConfig) {
                        // Authentification emulator
                        if (unitTestApps.firebaseAdminTestApp.authEmulatorHostConfig && expectedEmulatorConfig.auth) {
                            const expectedAuthEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.auth.host || '127.0.0.1',
                                port: expectedEmulatorConfig.auth.port || 9099,
                            };
                            expect(unitTestApps.firebaseAdminTestApp.authEmulatorHostConfig.port, 'Wrong Auth emulator port').to.equal(expectedAuthEmulatorHostConfig.port);
                        }

                        // Firestore emulator
                        if (unitTestApps.firebaseAdminTestApp.firestoreEmulatorHostConfig && expectedEmulatorConfig.firestore) {
                            const expectedFirestoreEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.firestore.host || '127.0.0.1',
                                port: expectedEmulatorConfig.firestore.port || 8080,
                            };
                            expect(unitTestApps.firebaseAdminTestApp.firestoreEmulatorHostConfig.port, 'Wrong Firestore emulator port').to.equal(expectedFirestoreEmulatorHostConfig.port);
                        }

                        // Storage emulator
                        if (unitTestApps.firebaseAdminTestApp.storageEmulatorHostConfig && expectedEmulatorConfig.storage) {
                            const expectedStorageEmulatorHostConfig: GPFirebaseEmulatorHostConfig = {
                                hostname: expectedEmulatorConfig.storage.host || '127.0.0.1',
                                port: expectedEmulatorConfig.storage.port || 9199,
                            };
                            expect(unitTestApps.firebaseAdminTestApp.storageEmulatorHostConfig.port, 'Wrong Storage emulator port').to.equal(expectedStorageEmulatorHostConfig.port);
                        }
                    }
                }
            });
        });
    });
    describe('Tests admin actions', async () => {
        describe('Perform task with admin access', async () => {
            it('Create a user', async () => {
                if (unitTestApps.firebaseAdminTestApp) {
                    const auth = unitTestApps.firebaseAdminTestApp.auth;
                    assertSucceeds(auth.createUser({ email: 'test_1@example.com', password: 'Test+1234', uid: 'test_1' }));
                }
            });
            it('Check user document has been created', async () => {
                await sleep(250);
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                const userDoc = await assertSucceeds(db.collection('/users').doc('test_1').get());
                expect(userDoc.exists, 'Missing document "/users/test_1"').to.be.true;

                const userData = userDoc.data();
                expect(userData, 'Document "/users/test_1" should not be empty').to.exist;

                if (userData) {
                    expect(userData.email, 'Document "/users/test_1" / Field "email" should not be undefined').to.exist;
                    expect(userData.email, 'Document "/users/test_1" / Field "email" is not a string').to.be.a('string');
                    expect(userData.email, 'Document "/users/test_1" / Field "email" value mismatched').to.equal('test_1@example.com');
                }
            }).retries(20);
            it('Check user status document has been created', async () => {
                await sleep(250);
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                const userDoc = await assertSucceeds(db.collection('/users/test_1/status').doc('test_1').get());
                expect(userDoc.exists, 'Missing document "/users/test_1/status/test_1"').to.be.true;

                const userData = userDoc.data();
                expect(userData, 'Document "/users/test_1" should not be empty').to.exist;

                if (userData) {
                    expect(userData.isProfileComplete, 'Document "/users/test_1/status/test_1" / Field "isProfileComplete" should not be undefined').to.exist;
                    expect(userData.isProfileComplete, 'Document "/users/test_1/status/test_1" / Field "isProfileComplete" is not a string').to.be.a('boolean');
                    expect(userData.isProfileComplete, 'Document "/users/test_1/status/test_1" / Field "isProfileComplete" value mismatched').to.false;
                }
            }).retries(20);
            it('Delete user', async () => {
                const auth = unitTestApps.firebaseAdminTestApp.auth;
                assertSucceeds(auth.deleteUser('test_1'));
            });
            it('Check user document has been deleted', async () => {
                await sleep(250);
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                const userDoc = await assertSucceeds(db.collection('/users').doc('test_1').get());
                expect(userDoc.exists, 'Document "/users/test_1" exists though it shouldn"t').to.be.false;
            }).retries(20);
            it('Check user document has been deleted', async () => {
                await sleep(250);
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                const userDoc = await assertSucceeds(db.collection('/users/test_1/status').doc('test_1').get());
                expect(userDoc.exists, 'Document "/users/test_1/status/test_1" exists though it shouldn"t').to.be.false;
            }).retries(20);
        });
        describe('Perform cleanup', async () => {
            it('Fill up DB with documents', async () => {
                const db = unitTestApps.firebaseAdminTestApp.firestore;
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
                const auth = unitTestApps.firebaseAdminTestApp.auth;
                for (let i = 1; i <= 10; i++) {
                    await assertSucceeds(auth.createUser({ email: `test_${i}@example.com`, password: 'Test+1234', uid: `test_${i}` }));
                }
                await sleep(5000);
            });
            it('Fill the storage with document', async () => {
                const bucket = unitTestApps.firebaseAdminTestApp.storage.bucket();
                for (let i = 1; i <= 10; i++) {
                    for (let j = 1; j <= 10; j++) {
                        const stream = await bucket.file(`folder_${i}/test_${j}.txt`).createWriteStream();
                        stream.write(
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            async (error) => {
                                throw error;
                            }
                        );
                        stream.end();
                    }
                }
            });
            it('Delete all users', async () => {
                const auth = unitTestApps.firebaseAdminTestApp.auth;
                await assertSucceeds(unitTestApps.firebaseAdminTestApp.clearAllAuthData());
                await sleep(1000);
                const userList = (await assertSucceeds(auth.listUsers())).users;
                expect(userList.length, `There are still ${userList.length} user(s)`).to.equal(0);
            });
            it('Delete all data', async () => {
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                await assertSucceeds(unitTestApps.firebaseAdminTestApp.clearAllFirestoreData());
                await sleep(1000);
                const collectionList = await db.listCollections();
                await expect(collectionList.length, `There are still ${collectionList.length} collection(s)`).to.equal(0);
            });
            it('Delete all files', async () => {
                const bucket = unitTestApps.firebaseAdminTestApp.storage.bucket();
                await assertSucceeds(unitTestApps.firebaseAdminTestApp.deleteAllFiles());
                await sleep(1000);
                for (let i = 1; i <= 10; i++) {
                    for (let j = 1; j <= 10; j++) {
                        const fileExists = await bucket.file(`folder_${i}/test_${j}`).exists();
                        expect(fileExists[0], `File test_${i}.txt still exists`).to.be.false;
                    }
                }
            });
        });
    });
    describe('Tests regular actions', async () => {
        describe('User creation', async () => {
            it('Create user', async () => {
                const auth = unitTestApps.firebaseTestApp.auth;
                await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth, 'test_1@example.com', 'Test+1234'));
                await assertSucceeds(firebaseAuth.signOut(auth));
            });
            it('Check user document has been created', async () => {
                await sleep(250);
                await unitTestApps.firebaseTestApp.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
                    const db = unitTestApps.firebaseTestApp.firestore;
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
            }).retries(20);
            it('Check user status document has been created', async () => {
                await sleep(250);
                await unitTestApps.firebaseTestApp.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
                    const db = unitTestApps.firebaseTestApp.firestore;
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
            }).retries(20);
            it('Call the add function', async () => {
                await unitTestApps.firebaseTestApp.runAuthenticated('test_1@example.com', 'Test+1234', async () => {
                    const functions = unitTestApps.firebaseTestApp.functions;
                    const addFunction = firebaseFunctions.httpsCallable<GPAdditionRequest, GPAddtionResponse>(functions, 'add');
                    const response = await assertSucceeds(addFunction({ a: 10, b: 20 }));
                    const data = response.data;
                    expect(data.result, '').to.equal(10 + 20);
                });
            });
            it('Create anoter user', async () => {
                const auth = unitTestApps.firebaseTestApp.auth;
                await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth, 'test_2@example.com', 'Test+1234'));
                await assertSucceeds(firebaseAuth.signOut(auth));
            }).retries(20);
            it('Check a user cannot access some other user"s documents (with permission-denied code expected)', async () => {
                await unitTestApps.firebaseTestApp.runAuthenticated('test_2@example.com', 'Test+1234', async () => {
                    const db = unitTestApps.firebaseTestApp.firestore;
                    const otherUserUid = (await unitTestApps.firebaseAdminTestApp.auth.getUserByEmail('test_1@example.com')).uid;
                    await assertFails(firebaseFirestore.getDoc(firebaseFirestore.doc(db, `/users/${otherUserUid}`)), 'permission-denied');
                });
            });
        });
        describe('User deletion', async () => {
            it('Delete user', async () => {
                await unitTestApps.firebaseTestApp.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
                    assertSucceeds(userCredential.user.delete());
                });
            });
            it('Check user document has been deleted', async () => {
                await sleep(250);
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                const docs = await assertSucceeds(db.collection('/users').where('email', '==', 'test_1@example.com').get());
                expect(docs.docs.length, 'More than one document found in /users with email "test_1@example.com"').to.equal(0);
            }).retries(20);
            it('Check user document has been deleted', async () => {
                await sleep(250);
                const db = unitTestApps.firebaseAdminTestApp.firestore;
                const docs = await assertSucceeds(db.collection('/users').where('email', '==', 'test_1@example.com').get());
                expect(docs.docs.length, 'More than one document found in /users with email "test_1@example.com"').to.equal(0);
            }).retries(20);
            it('Delete another user', async () => {
                await unitTestApps.firebaseTestApp.runAuthenticated('test_2@example.com', 'Test+1234', async (userCredential) => {
                    assertSucceeds(userCredential.user.delete());
                });
            });
        });
    });
}

/**
 * This is the main loop. Trigger the initialization, then run the test
 */
init()
    .then(loadTest)
    .then(() => run());
