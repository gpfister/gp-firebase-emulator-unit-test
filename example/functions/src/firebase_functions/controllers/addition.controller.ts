//
// gp-firebase-emulator-unit-test
// Copyright (C) 2021-2023, Greg PFISTER. MIT License
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

import * as functions from 'firebase-functions';

import { GPAdditionRequest } from '../models/addtion_request.model';
import { GPAddtionResponse } from '../models/addtion_response.model';

export class GPAdditionController {
    async add(data: GPAdditionRequest, context: functions.https.CallableContext): Promise<GPAddtionResponse> {
        const userId = context.auth?.uid;

        if (userId) {
            const result: GPAddtionResponse = {
                result: data.a + data.b,
            };

            return result;
        } else {
            throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to use this function');
        }
    }
}
