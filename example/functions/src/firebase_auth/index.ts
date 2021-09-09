/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import { GPUserAccountController } from './controllers/user_account.controller';

export class GPFirebaseAuthModule {
  static userAccountController: GPUserAccountController = new GPUserAccountController();
}
