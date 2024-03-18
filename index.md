---
layout: homepage
hideTitle: true
title: Homepage
---
## Use cases
Easily orchestrate and run processes (scripts or shell commands) in an identical way, across several machines.

### Easy to use as a replacement for traditional services
* eg: **cron** - Backup Scripts that run at a specific time of day
* eg: **cron** - Monitoring Scripts that run every 30 minutes
* eg: Trigger a complex command to run when an admin starts it
* eg: Trigger a download, picking the first available server to use
* eg: **automation** Apply the standard build scripts after a new server has been deployed, and keep them up to date.

### Build up complex systems, workflows and pipelines that are way more than the sum of their parts
* eg: **CI/CD** systems, replace horribly overcomplicated tools like Jenkins, Tekton, etc
* eg: Data Science workflows - replacing Apache Airflow, etc.
* eg: Infrastructure application data monitoring processes

## Design principles

### Easy to understand, to use, to maintain
Upsilon has been improved over the years to make it easier to adopt, and ongoing development continues to focus on making it even easier, as so many other orchestrators take hours, days and weeks to understand, use and maintain.

Containers are a great technology, but Upsilon is designed to do process orechstration without containers, which really do have a massive overhead to get started. Containers require you to setup your own secure registry, a build process for containers, and Kubernetes can be easy to start with, but has a huge maintenance overhead. While Containers and Kubernetes are awesome technologies, sometimes it's nice not to have to worry about all that overhead.

### Start very small, scale to very large, without headaches.
Happily runs on a raspberry Pi, a little laptop, homelab servers, or theoretically thousands of machines.

The architecture of upsilon means you don't have to worry about making databases highly available, configuring networking virtual IPs, or all the other hassle that comes with scaling up distributed systems most of the time.

### The control plane is fault tolerant
The control plane is made up of 3 components - a message queue (rabbitmq), a database (MySQL), and a microservice (upsilon-custodian) that saves things from the message queue to the database). If any of those components go down, the other services will gracefully buffer anything in progress, and resume when the services come back.

### Use with scripts and commands you already have
Scripts, shell commands - execute whatever you need with no changed need to work with Upsilon.

### Autoconfiguration
The services that make up upsilon all try to rely on autodiscovery whenever possible, meaning that most services don't need any manual configuration, or very little.

### Built for a Configuration as Code approach
Use Modern YAML configuration syntax, with built-in support for pulling updates from Git.

### Easy to backup
All persistent configuration is just a YAML text file, and Upsilon has builtin support for pulling this from a standard Git repository.

All persistent data is stored in a MySQL database, and there are about 7 trillion standard tools available to backup a MySQL database already well tested and well used.

[![](https://www.ohloh.net/p/upsilonproject/widgets/project_thin_badge.gif)](https://ohloh.net/p/upsilonproject/)

[](https://travis-ci.org/upsilonproject/upsilon-node https://travis-ci.org/upsilonproject/upsilon-node.png)
