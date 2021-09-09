/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import { GPUserController } from './controllers/user.controller';

export class GPFirebaseFirestoreModule {
  static userController = new GPUserController();
}
