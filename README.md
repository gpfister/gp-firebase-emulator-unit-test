[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![npm](https://img.shields.io/badge/npm-ready-cb3837)](./LICENSE)
[![yarn](https://img.shields.io/badge/yarn-not%20ready-117cad)](./LICENSE)

# gp-firebase-emulator-unit-test

A unit test lib to use with the Firebase emulator

## About

This projects aims at providing a set of tools to unit test a 
[Firebase](https://firebase.google.com) project using the 
[emulator suite](https://firebase.google.com/docs/emulator-suite). 

It currently supports:
- Authentication
- Firebase
- Functions
- Storage

While there are a few alternative provided, this one used the Emulator Hub to 
gather Emulators config (which one are activated, and its hostname and port 
number). This allow to run the unit test separately from running the emulator,
though it also works as running it as part of the emulator.

## Installation

At the moment, only NPM install is supported. To add this package to your
project, simply run:

```sh
npm install --save-dev gp-firebase-emulator-unit-test
```

To add to your project using Javascript, you can can do something like:

```javascript
const gpFirebaseEmulUT = require('gp-firebase-emulator-unit-test');
```

If you are using Typescript, you can get the whole package with something like:

```typescript
import * as gpFirebaseEmulUT from 'gp-firebase-emulator-unit-test';
```

## Example (Typescript)

Here's a simple example which would create a user, post document and 
check the document.

```typescript
import { 
  initAdminTestApp, 
  initTestApp, 
  assertSucceeds, 
  sleep, 
  firebaseAuth, 
  firebaseFirestore 
  } from 'gp-firebase-emulator-unit-test';

// Initialize the firebase test app, ssuming the Emulator Hub runs locally on 
// the standard port
const firebaseTestApp = await initTestApp({ projectId: projectId, region: region });

// Get the Auth and Firebase
const auth = firebaseTestApp.auth;
const db = firebaseTestApp.firestore;

// Step 1: Create a user and immediatly sign out
const userCredential = await assertSucceeds(firebaseAuth.createUserWithEmailAndPassword(auth!, 'test_1@example.com', 'Test+1234'));
await assertSucceeds(firebaseAuth.signOut(auth!));

// Step 2: Post the document
await firebaseTestApp.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
  const doc = { hello: "world !" };
  await assertSucceeds(firebaseFirestore.setDoc(firebaseFirestore.doc(db!, `/doc/${userCredential.user.uid}`), doc)));
}

// Give it a second (If using mocha, retrying the test is better)
sleep(1000);

// Step 3: Check the document posted (a framework like Mocha/Chai is recommended
// typically creating a function that run the control on the ducment, and using
// a call like:
// await assertSucceeds(checkDocument(postedDoc)));
await firebaseTestApp.runAuthenticated('test_1@example.com', 'Test+1234', async (userCredential) => {
  const postedDoc = await assertSucceeds(firebaseFirestore.getDoc(firebaseFirestore.doc(db!, `/doc/${userCredential.user.uid}`)));
  if (postedDoc.exists) {
    if (postedDoc.data().hello !== 'world!') {
      // Handle the error
    } 
  } else {
    // Handle the error
  }
}
```

A more detail example (in Typescript, using Mocha/Chai will be provided later).

## Documentation

The documentation to the api can be found [here](./doc/api)

## Build and unit test

If you wish to build the source code and embed it in your app, or build and test
a changes you would like to submit, please read the build instructions 
[here](./doc/build).

## Change log

For a full hostory of the changes, have a look at the [change log](./CHANGELOG.md).

## Known issues

Please check the [known issue list](./KNOWN_ISSUES.md), which would provide also
workarounds.

## Acknowledgement

This is strongly inspired by the npm package [@firebase/rules-unit-testing](https://www.npmjs.com/package/@firebase/rules-unit-testing) part of the [firebase/firebase-js-sdk](https://github.com/firebase/firebase-js-sdk) repository.


## Contributions

See instructions [here](./CONTRIBUTING.md).

## License

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

See license [here](./LICENSE).
