[![License](https://img.shields.io/badge/license-MIT-blue)](../LICENSE)

# Example Firebase App for testing purpose

## About

This app purpose is to allow for unit testing the package. It provides basic
feature to test:

- Authentication
- Firestore
- Functions
- Storage

## Getting started

### Setup Firebase

You'll need a Firebase app, even if you don't plan to deploy it in the end.
Check out instruction [here](https://firebase.google.com) if you need.

Once the `firebase-tools` installed and logged in, at the root of the this
example run the init command:

```bash
$ firebase use <project-id>
```

It should generate the .firebaserc file at the root.

### Build the Functions

In the folder `./functions`, run the following command to install the
dependencies:

```bash
$ npm install
```

Once installed, the functions can be build:

```
$ npm run build
```

### Run the emulator

The emulators can be started by running the command

```bash
$ npm run emul
```
