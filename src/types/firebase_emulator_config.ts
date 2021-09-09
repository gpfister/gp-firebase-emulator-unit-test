import * as axios from 'axios';
import { GPFirebaseEmulatorHostConfig } from './firebase_emulator_host_config';

export class GPFirebaseEmulatorConfig {
  authEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  firestoreEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  functionsEmulatorHostConfig?: GPFirebaseEmulatorHostConfig
  storageEmulatorHostConfig?: GPFirebaseEmulatorHostConfig

  private constructor(authEmulator?: GPFirebaseEmulatorHostConfig,
    firestoreEmulator?: GPFirebaseEmulatorHostConfig,
    functionsEmulator?: GPFirebaseEmulatorHostConfig,
    storageEmulator?: GPFirebaseEmulatorHostConfig
  ) {
    this.authEmulatorHostConfig = authEmulator;
    this.firestoreEmulatorHostConfig = firestoreEmulator;
    this.functionsEmulatorHostConfig = functionsEmulator;
    this.storageEmulatorHostConfig = storageEmulator;
  }

  public static async fromHubApi(hubHostname?: string, hubPort?: number) {
    const intHubHostname = hubHostname || 'localhost';
    const intHubPort = hubPort || 4400;

    const hubResponse = await axios.default.get(`http://${intHubHostname}:${intHubPort}/emulators`);
    const emulatorConfig = hubResponse.data;

    return new GPFirebaseEmulatorConfig(
      emulatorConfig.auth ? { hostname: emulatorConfig.auth.host || 'localhost', port: emulatorConfig.auth.port || 9099 } : undefined,
      emulatorConfig.firestore ? { hostname: emulatorConfig.firestore.host || 'localhost', port: emulatorConfig.firestore.port || 8080 } : undefined,
      emulatorConfig.functions ? { hostname: emulatorConfig.functions.host || 'localhost', port: emulatorConfig.functions.port || 5001 } : undefined,
      emulatorConfig.storage ? { hostname: emulatorConfig.storage.host || 'localhost', port: emulatorConfig.storage.port || 9199 } : undefined
    );
  }
}
