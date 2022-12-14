[gp-firebase-emulator-unit-test](../README.md) / GPFirebaseEmulatorTestApp

# Class: GPFirebaseEmulatorTestApp

Represents an Emulator test app.

## Table of contents

### Constructors

- [constructor](GPFirebaseEmulatorTestApp.md#constructor)

### Accessors

- [auth](GPFirebaseEmulatorTestApp.md#auth)
- [authEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#authemulatorhostconfig)
- [firestore](GPFirebaseEmulatorTestApp.md#firestore)
- [firestoreEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#firestoreemulatorhostconfig)
- [functions](GPFirebaseEmulatorTestApp.md#functions)
- [functionsEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#functionsemulatorhostconfig)
- [storage](GPFirebaseEmulatorTestApp.md#storage)
- [storageEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#storageemulatorhostconfig)

### Methods

- [init](GPFirebaseEmulatorTestApp.md#init)
- [runAuthenticated](GPFirebaseEmulatorTestApp.md#runauthenticated)

## Constructors

### constructor

• **new GPFirebaseEmulatorTestApp**(`options`)

Class constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](../README.md#gpfirebaseemulatortestappoption) | The options to setup the test app |

#### Defined in

[firebase_emulator_test_app.ts:45](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L45)

## Accessors

### auth

• `get` **auth**(): `Auth`

Return the Auth client API module of the test app, if setup

**`Throws`**

An error if the Auth emulator is not ready

#### Returns

`Auth`

#### Defined in

[firebase_emulator_test_app.ts:107](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L107)

___

### authEmulatorHostConfig

• `get` **authEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Auth emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:175](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L175)

___

### firestore

• `get` **firestore**(): `Firestore`

Return the Cloud Firestore client API module of the test app, if setup

**`Throws`**

An error if the Cloud Firestore emulator is not ready

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_test_app.ts:116](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L116)

___

### firestoreEmulatorHostConfig

• `get` **firestoreEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Firestore emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:180](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L180)

___

### functions

• `get` **functions**(): `Functions`

Return the Cloud Functions client API module of the test app, if setup

**`Throws`**

An error if the Cloud Functions emulator is not ready

#### Returns

`Functions`

#### Defined in

[firebase_emulator_test_app.ts:125](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L125)

___

### functionsEmulatorHostConfig

• `get` **functionsEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Functions emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:185](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L185)

___

### storage

• `get` **storage**(): `FirebaseStorage`

Return the Cloud Storage client API module of the test app, if setup

**`Throws`**

An error if the Cloud Storage emulator is not ready

#### Returns

`FirebaseStorage`

#### Defined in

[firebase_emulator_test_app.ts:134](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L134)

___

### storageEmulatorHostConfig

• `get` **storageEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Storage emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:190](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L190)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

Init the app

**`Example`**

```javascrip
const app = new GPFirebaseEmulatorTestAppOption({projectId: 'project', region: 'europe-west3', storageBucket: 'default'});
app.init().then(() => {
  // Run your code here
});
```

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_test_app.ts:64](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L64)

___

### runAuthenticated

▸ **runAuthenticated**(`email`, `password`, `pr`): `Promise`<`void`\>

Run in an authenticated context an async function will have the user 
credentials of the authenticated user

**`Example`**

```javascrip
const app = new GPFirebaseEmulatorTestAppOption({projectId: 'project', region: 'europe-west3', storageBucket: 'default'});
app.init().then(async () => {
  await app.runAuthenticated('test@example.com', 'password', async (userCredentials) => {
    // Run your code against the user credentials
  });
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `email` | `string` | The email of the user account which will be user to authenticate |
| `password` | `string` | The password of the user account which will be user to authenticate |
| `pr` | (`userCredential`: `UserCredential`) => `Promise`<`void`\> | The async function to run in the authenticated context |

#### Returns

`Promise`<`void`\>

A promise which will trigger the `pr` function once authenticated,
        then sign out the user

#### Defined in

[firebase_emulator_test_app.ts:160](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_test_app.ts#L160)
