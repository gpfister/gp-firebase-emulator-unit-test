#
# gp-firebase-emulator-unit-test
# Copyright (c) 2021-2023, Greg PFISTER. MIT License
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
# COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
# IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
# CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#

FROM ghcr.io/gp-devenv/gp-node-devenv:22.04-18-1

# Switch back to root
USER root

# Set firebase-cli
COPY ./firebase-cli /usr/bin
RUN chmod ogu+x /usr/bin/firebase-cli

# Install Java
RUN apt-get update && \
    apt-get install -y -o DPkg::Options::=--force-confdef openjdk-19-jre-headless imagemagick && \
    apt-get autoclean -y && \
    apt-get autoremove -y

# Switch back to vscode user
USER vscode

# Set worksapce
WORKDIR /workspace

# Trust workspace
RUN git config --global --add safe.directory /workspace

# Expose ports
EXPOSE 80
EXPOSE 17000
EXPOSE 17001
EXPOSE 17002
EXPOSE 17003
EXPOSE 17004
EXPOSE 17005
EXPOSE 17006

ENTRYPOINT ["sudo", "/entrypoint.sh"]

# End