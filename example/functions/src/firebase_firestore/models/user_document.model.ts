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

import { firestore } from 'firebase-admin';

import { GPUserPublicProfileModel } from './user_public_profile.model';
import { GPUserPrivateProfileModel } from './user_private_profile.model';

export type GPUserDocument = {
    userId: string;
    email: string;
    publicProfile: GPUserPublicProfileModel;
    privateProfile: GPUserPrivateProfileModel;
    creationDate: firestore.Timestamp;
};
