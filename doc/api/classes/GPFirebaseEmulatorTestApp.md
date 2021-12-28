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

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](../README.md#gpfirebaseemulatortestappoption) |

#### Defined in

[firebase_emulator_test_app.ts:41](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L41)

## Accessors

### auth

• `get` **auth**(): `Auth`

#### Returns

`Auth`

#### Defined in

[firebase_emulator_test_app.ts:88](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L88)

___

### authEmulatorHostConfig

• `get` **authEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:120](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L120)

___

### firestore

• `get` **firestore**(): `Firestore`

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_test_app.ts:93](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L93)

___

### firestoreEmulatorHostConfig

• `get` **firestoreEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:121](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L121)

___

### functions

• `get` **functions**(): `Functions`

#### Returns

`Functions`

#### Defined in

[firebase_emulator_test_app.ts:98](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L98)

___

### functionsEmulatorHostConfig

• `get` **functionsEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:122](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L122)

___

### storage

• `get` **storage**(): `FirebaseStorage`

#### Returns

`FirebaseStorage`

#### Defined in

[firebase_emulator_test_app.ts:103](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L103)

___

### storageEmulatorHostConfig

• `get` **storageEmulatorHostConfig**(): `undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Returns

`undefined` \| [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:123](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L123)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_test_app.ts:49](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L49)

___

### runAuthenticated

▸ **runAuthenticated**(`email`, `password`, `pr`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `password` | `string` |
| `pr` | (`userCredential`: `UserCredential`) => `Promise`<`void`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_test_app.ts:108](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/edb8010/src/firebase_emulator_test_app.ts#L108)
