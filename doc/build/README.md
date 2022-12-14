# Build and unit test

## Requirements

- Any Node LTS, starting from Node 14.x to 18.x``
- A Google account and a Firebase test app (if you are testing the function call, you would need a Blaze subscription)

## Build

First, you would need to get all the dependencies:

```sh
npm ci
```

Then, you can build the code:

```sh
npm run build
```

If everything run fine, the compiled code can be found in the `./dist` folder.

## Unit test

### Start an emulator

To unit test, you first need to start the example emulator. It is located in the
`./example` folder.

Follow the instructions [here](../../example/README.md).

### Run the test script

Once the emulator is running, simply run the test script:

```sh
npm test
```

## Documentation

To generate the documentation:

```sh
npm run build:doc
```
