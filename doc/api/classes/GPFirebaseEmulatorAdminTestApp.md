[gp-firebase-emulator-unit-test](../README.md) / GPFirebaseEmulatorAdminTestApp

# Class: GPFirebaseEmulatorAdminTestApp

Represents an Emulator test app.

**`property`** {string} projectId The Firebase Project Id

**`property`** {string} storageBucket The Firebase Storage Bucket

**`property`** {string} hubHostname The Firebase Emulator hub hostname

**`property`** {string} hubPort The Firebase Emulator hub port number

## Table of contents

### Constructors

- [constructor](GPFirebaseEmulatorAdminTestApp.md#constructor)

### Properties

- [authEmulatorHostConfig](GPFirebaseEmulatorAdminTestApp.md#authemulatorhostconfig)
- [firestoreEmulatorHostConfig](GPFirebaseEmulatorAdminTestApp.md#firestoreemulatorhostconfig)
- [hubHostname](GPFirebaseEmulatorAdminTestApp.md#hubhostname)
- [hubPort](GPFirebaseEmulatorAdminTestApp.md#hubport)
- [projectId](GPFirebaseEmulatorAdminTestApp.md#projectid)
- [storageBucket](GPFirebaseEmulatorAdminTestApp.md#storagebucket)
- [storageEmulatorHostConfig](GPFirebaseEmulatorAdminTestApp.md#storageemulatorhostconfig)

### Accessors

- [auth](GPFirebaseEmulatorAdminTestApp.md#auth)
- [firestore](GPFirebaseEmulatorAdminTestApp.md#firestore)
- [storage](GPFirebaseEmulatorAdminTestApp.md#storage)

### Methods

- [cleanAllData](GPFirebaseEmulatorAdminTestApp.md#cleanalldata)
- [cleanAllUsers](GPFirebaseEmulatorAdminTestApp.md#cleanallusers)
- [disableBackgroundTriggers](GPFirebaseEmulatorAdminTestApp.md#disablebackgroundtriggers)
- [enableBackgroundTriggers](GPFirebaseEmulatorAdminTestApp.md#enablebackgroundtriggers)
- [init](GPFirebaseEmulatorAdminTestApp.md#init)

## Constructors

### constructor

• **new GPFirebaseEmulatorAdminTestApp**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](../README.md#gpfirebaseemulatortestappoption) |

#### Defined in

[firebase_emulator_admin_test_app.ts:41](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L41)

## Properties

### authEmulatorHostConfig

• `Optional` **authEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:35](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L35)

___

### firestoreEmulatorHostConfig

• `Optional` **firestoreEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:36](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L36)

___

### hubHostname

• **hubHostname**: `string`

#### Defined in

[firebase_emulator_admin_test_app.ts:32](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L32)

___

### hubPort

• **hubPort**: `number`

#### Defined in

[firebase_emulator_admin_test_app.ts:33](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L33)

___

### projectId

• **projectId**: `string`

#### Defined in

[firebase_emulator_admin_test_app.ts:30](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L30)

___

### storageBucket

• `Optional` **storageBucket**: `string`

#### Defined in

[firebase_emulator_admin_test_app.ts:31](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L31)

___

### storageEmulatorHostConfig

• `Optional` **storageEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:37](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L37)

## Accessors

### auth

• `get` **auth**(): `Auth`

#### Returns

`Auth`

#### Defined in

[firebase_emulator_admin_test_app.ts:79](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L79)

___

### firestore

• `get` **firestore**(): `Firestore`

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_admin_test_app.ts:84](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L84)

___

### storage

• `get` **storage**(): `Storage`

#### Returns

`Storage`

#### Defined in

[firebase_emulator_admin_test_app.ts:89](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L89)

## Methods

### cleanAllData

▸ **cleanAllData**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:94](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L94)

___

### cleanAllUsers

▸ **cleanAllUsers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:100](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L100)

___

### disableBackgroundTriggers

▸ **disableBackgroundTriggers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:112](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L112)

___

### enableBackgroundTriggers

▸ **enableBackgroundTriggers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:108](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L108)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:48](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_admin_test_app.ts#L48)
