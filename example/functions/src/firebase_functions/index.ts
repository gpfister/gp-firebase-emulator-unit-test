/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import { GPAdditionController } from './controllers/addition.controller';

export class GPFirebaseFunctionsModule {
  static additionController = new GPAdditionController();
}
