[gp-firebase-emulator-unit-test](../README.md) / GPFirebaseEmulatorTestApp

# Class: GPFirebaseEmulatorTestApp

Represents an Emulator test app.

**`property`** {string} projectId The Firebase Project Id

**`property`** {string} storageBucket The Firebase Storage Bucket

**`property`** {string} hubHostname The Firebase Emulator hub hostname

**`property`** {string} hubPort The Firebase Emulator hub port number

## Table of contents

### Constructors

- [constructor](GPFirebaseEmulatorTestApp.md#constructor)

### Properties

- [authEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#authemulatorhostconfig)
- [firestoreEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#firestoreemulatorhostconfig)
- [functionsEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#functionsemulatorhostconfig)
- [hubHostname](GPFirebaseEmulatorTestApp.md#hubhostname)
- [hubPort](GPFirebaseEmulatorTestApp.md#hubport)
- [projectId](GPFirebaseEmulatorTestApp.md#projectid)
- [region](GPFirebaseEmulatorTestApp.md#region)
- [storageBucket](GPFirebaseEmulatorTestApp.md#storagebucket)
- [storageEmulatorHostConfig](GPFirebaseEmulatorTestApp.md#storageemulatorhostconfig)

### Accessors

- [auth](GPFirebaseEmulatorTestApp.md#auth)
- [firestore](GPFirebaseEmulatorTestApp.md#firestore)
- [functions](GPFirebaseEmulatorTestApp.md#functions)
- [storage](GPFirebaseEmulatorTestApp.md#storage)

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

[firebase_emulator_test_app.ts:47](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L47)

## Properties

### authEmulatorHostConfig

• `Optional` **authEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:40](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L40)

___

### firestoreEmulatorHostConfig

• `Optional` **firestoreEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:41](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L41)

___

### functionsEmulatorHostConfig

• `Optional` **functionsEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:42](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L42)

___

### hubHostname

• **hubHostname**: `string`

#### Defined in

[firebase_emulator_test_app.ts:37](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L37)

___

### hubPort

• **hubPort**: `number`

#### Defined in

[firebase_emulator_test_app.ts:38](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L38)

___

### projectId

• **projectId**: `string`

#### Defined in

[firebase_emulator_test_app.ts:34](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L34)

___

### region

• `Optional` **region**: `string`

#### Defined in

[firebase_emulator_test_app.ts:35](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L35)

___

### storageBucket

• `Optional` **storageBucket**: `string`

#### Defined in

[firebase_emulator_test_app.ts:36](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L36)

___

### storageEmulatorHostConfig

• `Optional` **storageEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:43](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L43)

## Accessors

### auth

• `get` **auth**(): `Auth`

#### Returns

`Auth`

#### Defined in

[firebase_emulator_test_app.ts:94](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L94)

___

### firestore

• `get` **firestore**(): `Firestore`

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_test_app.ts:99](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L99)

___

### functions

• `get` **functions**(): `Functions`

#### Returns

`Functions`

#### Defined in

[firebase_emulator_test_app.ts:104](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L104)

___

### storage

• `get` **storage**(): `FirebaseStorage`

#### Returns

`FirebaseStorage`

#### Defined in

[firebase_emulator_test_app.ts:109](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L109)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_test_app.ts:55](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L55)

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

[firebase_emulator_test_app.ts:114](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/50fa7cb/src/firebase_emulator_test_app.ts#L114)
