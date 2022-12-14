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

- [cleanAllStorage](GPFirebaseEmulatorAdminTestApp.md#cleanallstorage)
- [clearAllAuthData](GPFirebaseEmulatorAdminTestApp.md#clearallauthdata)
- [clearAllFirestoreData](GPFirebaseEmulatorAdminTestApp.md#clearallfirestoredata)
- [deleteAllFiles](GPFirebaseEmulatorAdminTestApp.md#deleteallfiles)
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

[firebase_emulator_admin_test_app.ts:40](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L40)

## Accessors

### auth

• `get` **auth**(): `Auth`

Return the Auth client API module of the test app, if setup

**`Throws`**

An error if the Auth emulator is not ready

#### Returns

`Auth`

#### Defined in

[firebase_emulator_admin_test_app.ts:82](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L82)

___

### authEmulatorHostConfig

• `get` **authEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Auth emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:160](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L160)

___

### firestore

• `get` **firestore**(): `Firestore`

Return the Cloud Firestore client API module of the test app, if setup

**`Throws`**

An error if the Cloud Firestore emulator is not ready

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_admin_test_app.ts:91](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L91)

___

### firestoreEmulatorHostConfig

• `get` **firestoreEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Firestore emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:165](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L165)

___

### storage

• `get` **storage**(): `Storage`

Return the Cloud Storage client API module of the test app, if setup

**`Throws`**

An error if the Cloud Storage emulator is not ready

#### Returns

`Storage`

#### Defined in

[firebase_emulator_admin_test_app.ts:100](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L100)

___

### storageEmulatorHostConfig

• `get` **storageEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

Return the Cloud Storage emulator host config (hostname and port)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:170](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L170)

## Methods

### cleanAllStorage

▸ **cleanAllStorage**(): `Promise`<`void`\>

Clean all storage

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:136](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L136)

___

### clearAllAuthData

▸ **clearAllAuthData**(): `Promise`<`void`\>

Clean all users

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:117](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L117)

___

### clearAllFirestoreData

▸ **clearAllFirestoreData**(): `Promise`<`void`\>

Clean all data in the database

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:108](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L108)

___

### deleteAllFiles

▸ **deleteAllFiles**(`bucket?`): `Promise`<`void`\>

Delete all files

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:126](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L126)

___

### disableBackgroundTriggers

▸ **disableBackgroundTriggers**(): `Promise`<`void`\>

Disable Functions background triggers (on Firestore create/update/delete, on user creation/deletion, ...)

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:153](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L153)

___

### enableBackgroundTriggers

▸ **enableBackgroundTriggers**(): `Promise`<`void`\>

Enable Functions background triggers (on Firestore create/update/delete, on user creation/deletion, ...)

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:146](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L146)

___

### init

▸ **init**(): `Promise`<`void`\>

Init the app

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:50](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_admin_test_app.ts#L50)
