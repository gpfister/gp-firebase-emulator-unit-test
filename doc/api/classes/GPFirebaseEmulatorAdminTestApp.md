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

[firebase_emulator_admin_test_app.ts:42](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L42)

## Properties

### authEmulatorHostConfig

• `Optional` **authEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:36](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L36)

___

### firestoreEmulatorHostConfig

• `Optional` **firestoreEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:37](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L37)

___

### hubHostname

• **hubHostname**: `string`

#### Defined in

[firebase_emulator_admin_test_app.ts:33](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L33)

___

### hubPort

• **hubPort**: `number`

#### Defined in

[firebase_emulator_admin_test_app.ts:34](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L34)

___

### projectId

• **projectId**: `string`

#### Defined in

[firebase_emulator_admin_test_app.ts:31](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L31)

___

### storageBucket

• `Optional` **storageBucket**: `string`

#### Defined in

[firebase_emulator_admin_test_app.ts:32](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L32)

___

### storageEmulatorHostConfig

• `Optional` **storageEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:38](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L38)

## Accessors

### auth

• `get` **auth**(): `Auth`

#### Returns

`Auth`

#### Defined in

[firebase_emulator_admin_test_app.ts:80](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L80)

___

### firestore

• `get` **firestore**(): `Firestore`

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_admin_test_app.ts:85](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L85)

___

### storage

• `get` **storage**(): `Storage`

#### Returns

`Storage`

#### Defined in

[firebase_emulator_admin_test_app.ts:90](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L90)

## Methods

### cleanAllData

▸ **cleanAllData**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:95](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L95)

___

### cleanAllUsers

▸ **cleanAllUsers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:101](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L101)

___

### disableBackgroundTriggers

▸ **disableBackgroundTriggers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:113](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L113)

___

### enableBackgroundTriggers

▸ **enableBackgroundTriggers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:109](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L109)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:49](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_admin_test_app.ts#L49)
