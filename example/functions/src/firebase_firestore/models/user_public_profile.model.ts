/**
 * firebase-emulator-unit-test/example/functions
 *
 * @author Greg PFISTER
 * @license MIT
 * @copyright (C) 2021, Greg PFISTER. MIT License
 */

export interface GPUserPublicProfileModel {
  displayName: string;
  profileImage?: {
    url: string;
    filename: string;
  };
}
