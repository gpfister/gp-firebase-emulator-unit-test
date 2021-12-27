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

[firebase_emulator_test_app.ts:48](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L48)

## Properties

### authEmulatorHostConfig

• `Optional` **authEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:41](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L41)

___

### firestoreEmulatorHostConfig

• `Optional` **firestoreEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:42](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L42)

___

### functionsEmulatorHostConfig

• `Optional` **functionsEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:43](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L43)

___

### hubHostname

• **hubHostname**: `string`

#### Defined in

[firebase_emulator_test_app.ts:38](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L38)

___

### hubPort

• **hubPort**: `number`

#### Defined in

[firebase_emulator_test_app.ts:39](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L39)

___

### projectId

• **projectId**: `string`

#### Defined in

[firebase_emulator_test_app.ts:35](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L35)

___

### region

• `Optional` **region**: `string`

#### Defined in

[firebase_emulator_test_app.ts:36](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L36)

___

### storageBucket

• `Optional` **storageBucket**: `string`

#### Defined in

[firebase_emulator_test_app.ts:37](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L37)

___

### storageEmulatorHostConfig

• `Optional` **storageEmulatorHostConfig**: [`GPFirebaseEmulatorHostConfig`](../README.md#gpfirebaseemulatorhostconfig)

#### Defined in

[firebase_emulator_test_app.ts:44](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L44)

## Accessors

### auth

• `get` **auth**(): `Auth`

#### Returns

`Auth`

#### Defined in

[firebase_emulator_test_app.ts:95](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L95)

___

### firestore

• `get` **firestore**(): `Firestore`

#### Returns

`Firestore`

#### Defined in

[firebase_emulator_test_app.ts:100](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L100)

___

### functions

• `get` **functions**(): `Functions`

#### Returns

`Functions`

#### Defined in

[firebase_emulator_test_app.ts:105](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L105)

___

### storage

• `get` **storage**(): `FirebaseStorage`

#### Returns

`FirebaseStorage`

#### Defined in

[firebase_emulator_test_app.ts:110](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L110)

## Methods

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_test_app.ts:56](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L56)

___

### runAuthenticated

▸ **runAuthenticated**(`email`, `password`, `pr`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `password` | `string` |
| `pr` | [`GPRunAuthenticatedPromise`](../README.md#gprunauthenticatedpromise) |

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_test_app.ts:115](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/4f94699/src/firebase_emulator_test_app.ts#L115)
