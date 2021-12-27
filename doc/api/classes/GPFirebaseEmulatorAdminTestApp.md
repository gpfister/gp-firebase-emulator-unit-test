[gp-firebase-emulator-unit-test](../README.md) / GPFirebaseEmulatorAdminTestApp

# Class: GPFirebaseEmulatorAdminTestApp

Represents an Emulator test app.

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](../README.md#gpfirebaseemulatortestappoption) |

#### Defined in

[firebase_emulator_admin_test_app.ts:36](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L36)

## Accessors

### auth

• `get` **auth**(): `Auth`

#### Returns

`Auth`

#### Defined in

[firebase_emulator_admin_test_app.ts:70](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L70)

___

### authEmulatorHostConfig

• `get` **authEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:107](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L107)

___

### firestore

• `get` **firestore**(): `Firestore`

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_admin_test_app.ts:75](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L75)

___

### firestoreEmulatorHostConfig

• `get` **firestoreEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:108](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L108)

___

### storage

• `get` **storage**(): `Storage`

#### Returns

`Storage`

#### Defined in

[firebase_emulator_admin_test_app.ts:80](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L80)

___

### storageEmulatorHostConfig

• `get` **storageEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_admin_test_app.ts:109](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L109)

## Methods

### cleanAllData

▸ **cleanAllData**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:85](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L85)

___

### cleanAllUsers

▸ **cleanAllUsers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:91](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L91)

___

### disableBackgroundTriggers

▸ **disableBackgroundTriggers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:103](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L103)

___

### enableBackgroundTriggers

▸ **enableBackgroundTriggers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:99](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L99)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_admin_test_app.ts:43](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/e95425b/src/firebase_emulator_admin_test_app.ts#L43)
