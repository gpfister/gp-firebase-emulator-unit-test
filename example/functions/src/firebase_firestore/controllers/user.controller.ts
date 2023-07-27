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

import { firestore, storage } from 'firebase-admin';
import { DocumentSnapshot } from 'firebase-admin/firestore';

import { Change, EventContext } from 'firebase-functions';
import { GPUserDocument } from '../models/user_document.model';
import { GPUserStatusDocument } from '../models/user_status_document.model';

export class GPUserController {
    async onUpdate(snapshot: Change<DocumentSnapshot>, context: EventContext) {
        const db = firestore();
        const bucket = storage().bucket();

        const { userId } = context.params;

        const originalUser = snapshot.before.data() as GPUserDocument;
        const updatedUser = snapshot.after.data() as GPUserDocument;

        const userStatus = (await db.collection(`/users/${userId}/status`).doc(userId).get()).data() as GPUserStatusDocument;

        // There should be data
        if (originalUser && updatedUser) {
            const originalProfileImage = originalUser.publicProfile?.profileImage;
            const updatedProfileImage = updatedUser.publicProfile?.profileImage;

            // Check the profile image has been updated
            if (originalProfileImage) {
                const originalFilename = originalProfileImage.filename;
                const updatedFielname = updatedProfileImage ? updatedProfileImage.filename : originalFilename;
                if (originalFilename !== updatedFielname) {
                    await bucket.file(`users/${userId}/profileImages/${originalFilename}`).delete();
                }
            }

            // Check user profile is completed
            if (!userStatus.isProfileComplete) {
                if (updatedUser) {
                    const displayName = updatedUser.publicProfile?.displayName;
                    const fullName = updatedUser.privateProfile?.fullName;
                    const dateOfBirth = updatedUser.privateProfile?.dateOfBirth;
                    if (displayName && fullName && dateOfBirth) {
                        await db.collection(`/users/${userId}/status`).doc(userId).set({ isProfileComplete: true }, { merge: true });
                    }
                }
            }
        }
    }
}
