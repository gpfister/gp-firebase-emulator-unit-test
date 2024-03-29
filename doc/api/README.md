gp-firebase-emulator-unit-test

# gp-firebase-emulator-unit-test

**`Author`**

Greg PFISTER

**`License`**

MIT

**`Copyright`**

(C) 2021, Greg PFISTER

## Table of contents

### Classes

- [GPFirebaseEmulatorAdminTestApp](classes/GPFirebaseEmulatorAdminTestApp.md)
- [GPFirebaseEmulatorTestApp](classes/GPFirebaseEmulatorTestApp.md)

### Type Aliases

- [GPFirebaseEmulatorHostConfig](README.md#gpfirebaseemulatorhostconfig)
- [GPFirebaseEmulatorTestAppOption](README.md#gpfirebaseemulatortestappoption)

### Functions

- [assertFails](README.md#assertfails)
- [assertSucceeds](README.md#assertsucceeds)
- [initAdminTestApp](README.md#initadmintestapp)
- [initTestApp](README.md#inittestapp)
- [sleep](README.md#sleep)

## Type Aliases

### GPFirebaseEmulatorHostConfig

Ƭ **GPFirebaseEmulatorHostConfig**: `Object`

Simple type to store the emulator host config

**`Since`**

0.1.0

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostname` | `string` | The hostname |
| `port` | `number` | The port |

#### Defined in

[types/firebase_emulator_host_config.type.ts:19](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/types/firebase_emulator_host_config.type.ts#L19)

___

### GPFirebaseEmulatorTestAppOption

Ƭ **GPFirebaseEmulatorTestAppOption**: `Object`

The test app option to initialise the unit test app

**`Since`**

0.1.0

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hubHostname?` | `string` | The hub hostname (if not specified, localhost will be used) |
| `hubPort?` | `number` | The hub port (if not specified, the port 4400 is used) |
| `projectId` | `string` | The Firebase project Id |
| `region?` | `string` | The Firebase region Id (required when using Functions) |
| `storageBucket?` | `string` | The Firebase storage bucket (required with using Cloud Storage) |

#### Defined in

[types/firebase_emulator_test_app_options.type.ts:19](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/types/firebase_emulator_test_app_options.type.ts#L19)

## Functions

### assertFails

▸ **assertFails**<`T`\>(`pr`, `expectedErrorCode?`): `Promise`<`T` \| `undefined`\>

Assert the promise to fail.

Useful to assert a certain request to be denied by Security Rules. See
example below. This function can be used to only consider a specific error
code as a valid result.

**`Example`**

```javascript
const firebaseTestApp = initTestApp({projectId: 'some-project-id'})
const userCredential = await assertSucceed(signInWithEmailAndPassword(firebaseTestApp.auth, 'someone@email.com', 'some_password'))
const doc = await assertFails(get(doc(firebaseTestApp.firestore, '/users/someone_else_uid'));
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pr` | `Promise`<`T`\> | The promise to be asserted |
| `expectedErrorCode?` | `string` | Specifiy an error code expected. If not specified, it assumes that any error code statisfies the expected faillure. |

#### Returns

`Promise`<`T` \| `undefined`\>

A promise that is fulfilled if pr is rejected with a specific error 
        code if requested, otherwise with any other error code

#### Defined in

[firebase_emulator_unit_test.ts:103](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_unit_test.ts#L103)

___

### assertSucceeds

▸ **assertSucceeds**<`T`\>(`pr`): `Promise`<`T`\>

Assert the promise to succeed.

This is a no-op function returning the passed promise as-is, but can be used
for documentational purposes in test code to emphasize that a certain request
should succeed (e.g. allowed by rules).

**`Example`**

```javascript
const firebaseTestApp = initTestApp({projectId: 'some-project-id'})
const doc = await assertSucceeds(get(doc(firebaseTestApp.firestore, '/some_collection/some_doc'));
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pr` | `Promise`<`T`\> | the promise to be asserted |

#### Returns

`Promise`<`T`\>

the promise itself, not changed

#### Defined in

[firebase_emulator_unit_test.ts:78](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_unit_test.ts#L78)

___

### initAdminTestApp

▸ **initAdminTestApp**(`options`): `Promise`<[`GPFirebaseEmulatorAdminTestApp`](classes/GPFirebaseEmulatorAdminTestApp.md)\>

Initialise an instance for the Firebase Emulator admin test app, which allow to
test as regular application (using the firebase-admin package)

**`Example`**

```javascript
const firebaseTestApp = await GPFirebaseEmulatorUnitTest.initAdminTestApp({projectId: "some-project-id"});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](README.md#gpfirebaseemulatortestappoption) | The options for setting up the Firebase Emulator admin test app |

#### Returns

`Promise`<[`GPFirebaseEmulatorAdminTestApp`](classes/GPFirebaseEmulatorAdminTestApp.md)\>

A promise which would resolve as a Firebase Emulator admin test app

#### Defined in

[firebase_emulator_unit_test.ts:55](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_unit_test.ts#L55)

___

### initTestApp

▸ **initTestApp**(`options`): `Promise`<[`GPFirebaseEmulatorTestApp`](classes/GPFirebaseEmulatorTestApp.md)\>

Initialise an instance for the Firebase Emulator test app, which allow to
test as regular application (using the firebase-js-sdk package)

**`Example`**

```javascript
const firebaseTestApp = await GPFirebaseEmulatorUnitTest.initTestApp({projectId: "some-project-id"});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GPFirebaseEmulatorTestAppOption`](README.md#gpfirebaseemulatortestappoption) | The options for setting up the app |

#### Returns

`Promise`<[`GPFirebaseEmulatorTestApp`](classes/GPFirebaseEmulatorTestApp.md)\>

A promise which would resolve as a Firebase Emulator test app

#### Defined in

[firebase_emulator_unit_test.ts:36](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_unit_test.ts#L36)

___

### sleep

▸ **sleep**(`ms`): `Promise`<`void`\>

This function allow to sleep for several milliseconds. This is useful if you
need to wait for several trigger in the DB to take place.

Notes:
- if you are using mocha to test, please set a timeout accordingly using
`--timeout`, also expressed in milliseconds
- depending on the hardware, the sleep time may have to be increased.

**`Example`**

```javascript
await sleep(10000); // Sleep for 10 seconds
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The number of milliseconds of sleep |

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase_emulator_unit_test.ts:152](https://github.com/gpfister/gp-firebase-emulator-unit-test/blob/f1073a3/src/firebase_emulator_unit_test.ts#L152)
