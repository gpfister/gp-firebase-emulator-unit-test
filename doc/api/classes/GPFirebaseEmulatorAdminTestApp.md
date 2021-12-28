[gp-firebase-emulator-unit-test](../README.md) / GPFirebaseEmulatorAdminTestApp

# Class: GPFirebaseEmulatorAdminTestApp

Represents an Emulator test app with admin priviledge

## Table of contents

### Constructors

- [constructor](GPFirebaseEmulatorAdminTestApp.md#constructor)

### Accessors

- [auth](GPFirebaseEmulatorAdminTestApp.md#auth)
- [authEmulatorHostConfig](GPFirebaseEmulatorAdminTestApp.md#authemulatorhostconfig)
- [firestore](GPFirebaseEmulatorAdminTestApp.md#firestore)
- [firestoreEmulatorHostConfig](GPFirebaseEmulatorAdminTestApp.md#firestoreemulatorhostconfig)
- [storage](GPFirebaseEmulatorAdminTestApp.md#storage)
- [storageEmulatorHostConfig](GPFirebaseEmulatorAdminTestApp.md#storageemulatorhostconfig)

### Methods

- [cleanAllData](GPFirebaseEmulatorAdminTestApp.md#cleanalldata)
- [cleanAllUsers](GPFirebaseEmulatorAdminTestApp.md#cleanallusers)
- [disableBackgroundTriggers](GPFirebaseEmulatorAdminTestApp.md#disablebackgroundtriggers)
- [enableBackgroundTriggers](GPFirebaseEmulatorAdminTestApp.md#enablebackgroundtriggers)
- [init](GPFirebaseEmulatorAdminTestApp.md#init)

## Constructors

### constructor

• **new GPFirebaseEmulatorAdminTestApp**(`options`)

Class constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](../README.md#gpfirebaseemulatortestappoption) | The options to setup the test app |

#### Defined in

[firebase_emulator_admin_test_app.ts:40](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L40)

## Accessors

### auth

• `get` **auth**(): `Auth`

Return the Auth client API module of the test app, if setup

**`throws`** An error if the Auth emulator is not ready

#### Returns

`Auth`

#### Defined in

[firebase_emulator_admin_test_app.ts:81](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L81)

___

### authEmulatorHostConfig

• `get` **authEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Auth emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:141](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L141)

___

### firestore

• `get` **firestore**(): `Firestore`

Return the Cloud Firestore client API module of the test app, if setup

**`throws`** An error if the Cloud Firestore emulator is not ready

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_admin_test_app.ts:90](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L90)

___

### firestoreEmulatorHostConfig

• `get` **firestoreEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Firestore emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:146](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L146)

___

### storage

• `get` **storage**(): `Storage`

Return the Cloud Storage client API module of the test app, if setup

**`throws`** An error if the Cloud Storage emulator is not ready

#### Returns

`Storage`

#### Defined in

[firebase_emulator_admin_test_app.ts:99](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L99)

___

### storageEmulatorHostConfig

• `get` **storageEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Storage emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:151](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L151)

## Methods

### cleanAllData

▸ **cleanAllData**(): `Promise`<`void`\>

Clean all data in the database

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:107](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L107)

___

### cleanAllUsers

▸ **cleanAllUsers**(): `Promise`<`void`\>

Clean all users

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:116](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L116)

___

### disableBackgroundTriggers

▸ **disableBackgroundTriggers**(): `Promise`<`void`\>

Disable Functions background triggers (on Firestore create/update/delete, on user creation/deletion, ...)

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:134](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L134)

___

### enableBackgroundTriggers

▸ **enableBackgroundTriggers**(): `Promise`<`void`\>

Enable Functions background triggers (on Firestore create/update/delete, on user creation/deletion, ...)

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:127](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L127)

___

### init

▸ **init**(): `Promise`<`void`\>

Init the app

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:50](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/921c823/src/firebase_emulator_admin_test_app.ts#L50)
