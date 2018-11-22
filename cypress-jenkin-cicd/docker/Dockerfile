from ubuntu:18.04

WORKDIR /root

RUN apt-get update && \
  apt-get install -y \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb \
	git \
	ssh

#========================
# Install Appium & Nodejs
#========================
RUN apt-get clean && apt-get update && apt-get install -y \
    nodejs \
    npm
COPY protractor-stage/cypress-jenkin-cicd /root

