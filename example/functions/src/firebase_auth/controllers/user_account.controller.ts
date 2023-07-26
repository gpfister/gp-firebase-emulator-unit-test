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
import { UserRecord } from 'firebase-admin/auth';
import { Timestamp } from 'firebase-admin/firestore';

import { GPUserDocument } from '../../firebase_firestore/models/user_document.model';
import { GPUserStatusDocument } from '../../firebase_firestore/models/user_status_document.model';
// import { OSKUserDocument } from "../models/user_document.model";

export class GPUserAccountController {
    async onUserAccountCreated(userAccount: UserRecord) {
        const db = firestore();
        const ts = Timestamp.now();

        // Send welcome email
        // TODO: Send welcome email

        // Create user record in data
        const displayName = userAccount.displayName || userAccount.email?.split('@')[0] || 'Anonymous';
        const user: GPUserDocument = {
            userId: userAccount.uid,
            email: userAccount.email ?? '', // There should always be an email
            publicProfile: { displayName: displayName },
            privateProfile: { fullName: displayName },
            creationDate: ts,
        };

        if (userAccount.displayName) {
            user.publicProfile = { displayName: userAccount.displayName };
            user.privateProfile = { fullName: userAccount.displayName };
        } else {
            const tempName = userAccount.email?.split('@')[0] || 'No name';
            user.publicProfile = { displayName: tempName };
            user.privateProfile = { fullName: tempName };
        }

        const userStatus: GPUserStatusDocument = {
            isProfileComplete: false,
            creationDate: ts,
        };

        await db.collection('/users/').doc(userAccount.uid).create(user);

        await db.collection(`/users/${userAccount.uid}/status`).doc(userAccount.uid).create(userStatus);
    }

    async onUserAccountDeleted(user: UserRecord) {
        const db = firestore();

        // Remove all user record
        const userAccount = await db.doc(`/users/${user.uid}`).get();

        if (userAccount.exists) {
            // Delete status
            await db.collection(`/users/${user.uid}/status`).doc(user.uid).delete();

            // At the end, delete the user record
            await db.collection('/users').doc(user.uid).delete();
        }
    }
}
