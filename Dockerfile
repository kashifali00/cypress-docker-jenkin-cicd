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
COPY cypress-jenkin-cicd /root/
ADD entrypoint /root/entrypoint
RUN sed -i -e 's/\r$//' /root/entrypoint
RUN chmod a+x /root/entrypoint

CMD ["/root/entrypoint"]
#Label
MAINTAINER KashifAli <kashif@aurorasolutions.io>
LABEL Version="0.1.0" \
      Description="Cypress test automation"
