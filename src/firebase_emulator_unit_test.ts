/**
 * firebase-emulator-unit-test
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

// import { hostname } from 'os';
import { GPFirebaseEmulatorTestApp } from './firebase_emulator_test_app';
import { GPFirebaseEmulatorAdminTestApp } from './firebase_emulator_admin_test_app';
import { GPFirebaseEmulatorTestAppOption } from './types/firebase_emulator_test_app_options';

// private static _app?: GPFirebaseEmulatorTestApp;

/**
 * Initialise an instance for the Firebase Emulator test app, which allow to
 * test as regular application (using the firebase-js-sdk package)
 *
 * @param {GPFirebaseEmulatorTestAppOption} options The options for setting up
 *                                                  the app
 * @returns {Promise<GPFirebaseEmulatorTestApp>} A promise which would resolve
 *                                               as a Firebase Emulator test app
 *
 * @public
 * @example
 * ```javascript
 * const firebaseTestApp = await GPFirebaseEmulatorUnitTest.initTestApp({projectId: "some-project-id"});
 * ```
 */
export async function initTestApp(options: GPFirebaseEmulatorTestAppOption): Promise<GPFirebaseEmulatorTestApp> {
  const firebaseTestApp = new GPFirebaseEmulatorTestApp(options);
  await firebaseTestApp.init();
  return firebaseTestApp;
}

/**
 * Initialise an instance for the Firebase Emulator admin test app, which allow to
 * test as regular application (using the firebase-admin package)
 *
 * @param {GPFirebaseEmulatorTestAppOption} options The options for setting up
 *                                                  the Firebase Emulator admin
 *                                                  test app
 * @returns {Promise<GPFirebaseEmulatorAdminTestApp>} A promise which would
 *                                                    resolve as a Firebase
 *                                                    Emulator admin test app
 *
 * @public
 * @example
 * ```javascript
 * const firebaseTestApp = await GPFirebaseEmulatorUnitTest.initAdminTestApp({projectId: "some-project-id"});
 * ```
 */
export async function initAdminTestApp(options: GPFirebaseEmulatorTestAppOption): Promise<GPFirebaseEmulatorAdminTestApp> {
  const firebaseAdminTestAdminApp = new GPFirebaseEmulatorAdminTestApp(options);
  await firebaseAdminTestAdminApp.init();
  return firebaseAdminTestAdminApp;
}

/**
 * Assert the promise to succeed.
 *
 * This is a no-op function returning the passed promise as-is, but can be used
 * for documentational purposes in test code to emphasize that a certain request
 * should succeed (e.g. allowed by rules).
 *
 * @param {Promise<T>} pr the promise to be asserted
 * @return {Promise<T>} the promise itself, not changed
 *
 * @public
 * @example
 * ```javascript
 * const firebaseTestApp = initTestApp({projectId: 'some-project-id'})
 * const doc = await assertSucceeds(get(doc(firebaseTestApp.firestore, '/some_collection/some_doc'));
 * ```
 */
export async function assertSucceeds<T>(pr: Promise<T>): Promise<T> {
  return pr;
}

/**
 * Assert the promise to fail.
 *
 * Useful to assert a certain request to be denied by Security Rules. See
 * example below. This function can be used to only consider a specific error
 * code as a valid result.
 *
 * @param {Promise<T>}pr The promise to be asserted
 * @param {string} expectedErrorCode Specifiy an error code expected. If not
 *                                   specified, it assumes that any error code
 *                                   statisfies the expected faillure.
 * @return {Promise<T>} A promise that is fulfilled if pr is rejected with a
 *                      specific error code if requested, otherwise with any
 *                      other error code
 * @public
 * @example
 * ```javascript
 * const firebaseTestApp = initTestApp({projectId: 'some-project-id'})
 * const userCredential = await assertSucceed(signInWithEmailAndPassword(firebaseTestApp.auth, 'someone@email.com', 'some_password'))
 * const doc = await assertFails(get(doc(firebaseTestApp.firestore, '/users/someone_else_uid'));
 * ```
 */
export async function assertFails(pr: Promise<any>, expectedErrorCode?: string): Promise<any> {
  return pr.then(
    () => {
      return Promise.reject(
        new Error('Expected request to fail, but it succeeded.')
      );
    },
    (error: any) => {
      if (expectedErrorCode) {
        if (error.code) {
          const errorCode = error.code.toLowerCase() || '';

          if (errorCode !== expectedErrorCode.toLowerCase()) {
            return Promise.reject(
              new Error(
                `Expected '${expectedErrorCode.toUpperCase()}' but got unexpected error: '${errorCode.toUpperCase()}'`
              )
            );
          }
        } else {
          return Promise.reject(
            new Error(
              `Expected '${expectedErrorCode.toUpperCase()}' however the Error returned doesn't have an 'code' field`
            )
          );
        }
      }
      return error;
    }
  );
}

/**
 * This function allow to sleep for several milliseconds. This is useful if you
 * need to wait for several trigger in the DB to take place.
 *
 * Notes:
 * - if you are using mocha to test, please set a timeout accordingly using
 * `--timeout`, also expressed in milliseconds
 * - depending on the hardware, the sleep time may have to be increased.
 *
 * @param ms The number of milliseconds of sleep
 * @returns
 *
 * @public
 * @example
 * ```javascript
 * await sleep(10000); // Sleep for 10 seconds
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
