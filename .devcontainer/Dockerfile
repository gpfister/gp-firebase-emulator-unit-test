FROM gpfister/firebase-devenv:1.0.0

# Switch back to root
USER root

# Setup Mosquitto
COPY ./mosquitto.conf /etc/mosquitto/mosquitto.conf
RUN apt-get update && \
    apt-get install -y -o DPkg::Options::=--force-confdef software-properties-common \
                                                          mosquitto && \
    apt-get autoremove -y && \
    apt-get autoclean && \
    if [ ! -d /var/lib/mosquitto ]; then mkdir -p /var/lib/mosquitto; fi && \
    if [ ! -d /var/log/mosquitto ]; then mkdir -p /var/log/mosquitto; fi && \
    chown -R vscode: /var/lib/mosquitto && \
    chown -R vscode: /var/log/mosquitto

# Switch back to vscode user
USER vscode

# Set worksapce
WORKDIR /workspace

# Trust workspace
RUN git config --global --add safe.directory /workspace

# Expose ports
EXPOSE 1883
EXPOSE 17000
EXPOSE 17001
EXPOSE 17002
EXPOSE 17003
EXPOSE 17005
EXPOSE 17006

CMD ["mosquitto", "-c", "/etc/mosquitto/mosquitto.conf"]