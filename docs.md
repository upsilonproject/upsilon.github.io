---
title: Documentation
---

Upsilon is built from a microservices architecture, composed of several services that connect together. This makes Upsilon easy to build, scale and extend. The documentation below lists each microservice separately.

## Environments 

* [Upsilon all in one CentOS virtual machine](upsilon-allinone-centos) (~20 minutes)
* [Upsilon on OpenShift 3](upsilon-on-openshift) (~5 minutes)
* [Upsilon your way](upsilon-your-way)

## Services

### [Drone](upsilon-drone)

The drone is the main worker, it run service checks and collects results. 

* [Documentation](upsilon-drone)
* [Quickstart](quickstart-drone)
* [Releases](releases-drone)
* [Service Checks](service-checks)

### [Web](upsilon-web)

The web interface provides a graphical dashboards, and administrator command and control.

* [Documentation](upsilon-web)
* [Quickstart](quickstart-web)
* [Releases](releases-web)

### [MobileWeb](upsilon-mobile)

A native Android application with shortcuts for the web application, as as the ability to recieve notifications from reactors.

* [Documentation](upsilon-mobileWeb)
* [Releases](releases-mobileWeb)

### [Custodian](upsilon-custodian)

Provides an API on top of the database.

### [Reactor](upsilon-reactor)

Alerting and notifications.

### Other Services

Checkout [GitHub](http://github.com/upsilonproject) to see what is being worked on.

