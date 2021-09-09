/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

import * as functions from 'firebase-functions';

import { GPAdditionRequest } from '../models/addtion_request.model';
import { GPAddtionResponse } from '../models/addtion_response.model';

export class GPAdditionController {
  async add(data: GPAdditionRequest, context: functions.https.CallableContext): Promise<GPAddtionResponse> {
    const userId = context.auth?.uid;

    if (userId) {
      const result: GPAddtionResponse = {
        result: data.a + data.b
      };

      return result;
    } else {
      throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function');
    }
  }
}
