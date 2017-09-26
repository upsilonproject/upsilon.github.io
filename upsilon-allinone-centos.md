---
title: All in One on a CentOS 7 Virtual Machine
---

Upsilon can quite happily exist all in a single virtual machine for most
deployments. You can scale out and change fairly easily after that too, but
this sort of configuration is normally best for playing around, testing, kicing
the tyres and similar. 

This article assumes you know how to install CentOS 7 in a virtual machine on
your favourite hypervisor, or cloud. Upsilon doens't really care where it runs.

## Virtual Machine requirements

* **RAM:** 4096 Gb   
* **CPU:** 2x virtual CPUs
* **NIC:** 1x public network interface 
* **OS:**: CentOS 7, http://centos.org 
* **Firewall:** 

| Port | Reason |
|------|------- |
| TCP Port 22 | SSH inbound traffic - to connect to the VM for administration |
| TCP Port 80 | HTTP inbound traffic - to access the web interface |
| TCP Port 4000 | upsilon-drone REST API port |

## Once you've setup and logged into the VM

Become root on your virtual machine, lets begin :) 

	<code>
	{% include shellRoot.htm %} 
	</code>

Add the upsilon yum repository, and the EPEL repository for CentOS (Extra
Packages for Enterprise Linux); 

	<code>
	{% include shellRoot.htm %} cd /etc/yum.repos.d/ 
	{% include shellRoot.htm %} curl -O http://repos.upsilonproject.io/upsilon-rpm-el7/upsilon-rpm-el7.repo
	{% include shellRoot.htm %} rpm -U https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
	</code>

Lets install everything! Dependencies will be installed automatically. 

	<code>
	{% include shellRoot.htm %} yum install upsilon-drone upsilon-web rabbitmq-server mariadb-server
	</code>

Lets start the webserver (httpd), the database server (mariadb), the message
server (rabbitmq) and make sure they restart on reboot (using `enable`); 

	<code>
	{% include shellRoot.htm %} service httpd enable
	{% include shellRoot.htm %} service httpd start
	{% include shellRoot.htm %} service mariadb-server enable
	{% include shellRoot.htm %} service mariadb-server start
	{% include shellRoot.htm %} service rabbitmq-server enable
	{% include shellRoot.htm %} service rabbitmq-server start
	</code>

Should be no problems so far. Lets open up the port for the web interface if
it's not already open;

	<code>
	{% include shellRoot.htm %} firewall-cmd --add-service http --permanent
	</code>


