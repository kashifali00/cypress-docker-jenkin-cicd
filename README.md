# ReactJs-Cypress-framework-CI
Cypress is end-to-end testing tool for testing of Javascript application especially ReactJs.
In that project we automated few scenarios of Uber application just for sake of demo using
cypress. At the end of test an HTML report is generated inside report folder. That HTML report
is being generated through Mochawesome library. Also, for CI a dockerfile and pipleline implementation 
is available.

# Pre-Install
* Node >= v7.7.3 ([https://nodejs.org/](https://nodejs.org/))
* NPM >= 3.0
* git clone https://gitlab.com/Kashifali007/reactjs-cypress-framework-ci.git
* cd reactjs-cypress-framework-ci
* npm install

# To build docker image

* install docker (window or linux)
* cd to reactjs-cypress-framework-ci/docker
* run command on terminal: docker build --tag "imageName" . (make sure Dockerfile is available inside docker folder)

# To Run docker image

* docker run --privileged --name cypress -it {imageName}:latest

# How to Run

* npm run test ( it will run the test in headless browser, snapshots and video will be uploaded onto Cypress' Dashboard service)
* npm cypress:open ( it will run the test in Cypress' TestRunner along with Chrome browser)