---
title: Getting upsilon-drone running in docker
---

This page will describe how to get upsilon-drone up and running in docker. If this is a new environment, you should install the web interface first.

Installer docker on a Linux machine, then start off by pulling the image.

<code>
	{% include shellRoot.htm %} docker pull upsilonproject/drone
</code>

Create a new container;

<code>
{% include shellRoot.htm %} docker create upsilonproject/drone
a73536869670...
</code>

This should give you a new new container to play with, and will print it's ID
when created.

Start the container using the new ID;

<code>
{% include shellRoot.htm %} docker start a73536869670...
</code>

We should see the drone start up; 

<code>
{% include shellRoot.htm %} docker ps

CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                                                                                                                   NAMES
a73536869670        upsilonproject/drone     "/bin/sh -c /usr/shar"   13 seconds ago      Up 3 seconds
</code>


Looks good. Lets check the logs;

<code>
{% include shellRoot.htm %} : docker logs a73536869670
DEBUG Logging override configuration exists, parsing: /etc/upsilon-drone/logging.xml
INFO  Upsilon 2.2.0-0-1505432429
INFO  ----------
INFO  Identifier: 6e3a122c-ed23-4a92-886d-3ae571531af1
INFO  Configuration file does not exist, configuration will only be possible via AMQP. 
INFO  Before dns setup; networkaddress.cache[.negative].ttl = null / 10
INFO  After dns setup; networkaddress.cache[.negative].ttl = 60 / 60
INFO  Starting daemon: DaemonRest
INFO  Starting the AMQP listener, connecting to host: upsilon
DEBUG Server started at: http://0.0.0.0:4000/
</code>

This looks like upsilon-drone starting up no problems at all. It will look for
a AMQP server using the DNS name "upsilon".  
