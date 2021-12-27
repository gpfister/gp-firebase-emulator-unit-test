// gp-firebase-emulator-unit-test
//
// Greg PFISTER
// (C) 2021, Greg PFISTER. MIT License
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * The test app option to initialise the unit test app
 *
 * @since 0.1.0
 */
export type GPFirebaseEmulatorTestAppOption = {
  /**
   * The Firebase project Id
   */
  projectId: string
  /**
   * The Firebase region Id (required when using Functions)
   */
  region?: string
  /**
   * The Firebase storage bucket (required with using Cloud Storage)
   */
  storageBucket?: string

  /**
   * The hub hostname (if not specified, localhost will be used)
   */
  hubHostname?: string

  /**
   * The hub port (if not specified, the port 4500 is used)
   */
  hubPort?: number
}
