---
title: All in One on a CentOS 7 Virtual Machine
---

Upsilon can quite happily exist all in a single virtual machine for most
deployments. You can scale out and change fairly easily after that too, but
this sort of configuration is normally best for playing around, testing, kicking
the tyres and similar. 

This article assumes you know how to install CentOS 7 in a virtual machine on
your favourite hypervisor, or cloud. Upsilon doens't really care where it runs.

## Virtual Machine requirements

* **Hypervisor:** any hypervisor/virtualisation that runs CentOS 7 Linux.
* **RAM:** 4 Gb   
* **CPU:** 2x virtual CPUs
* **NIC:** 1x public network interface 
* **OS:** CentOS 7, http://centos.org 
* **Firewall:** *see below...* 

| Protocol & Port | Source | Reason |
| --------------- | ------ | ------ |
| TCP Port 22 | inbound | SSH inbound traffic - to connect to the VM for administration |
| TCP Port 80 | inbound | HTTP inbound traffic - to access the web interface (upsilon-web) |
| TCP Port 4000 | inbound | upsilon-drone inbound traffic - REST API port |
| TCP (Various port) | outbound | What do you want upsilon to connect to? |

## Once you've setup and logged into the VM

<div>
Become root on your virtual machine, lets begin :) 

	<code>
	{% include shellRoot.htm %} 
	</code>

Add the upsilon yum repository, and the EPEL repository for CentOS (Extra
Packages for Enterprise Linux); 

	<code>
	{% include shellRoot.htm %} cd /etc/yum.repos.d/ <br />
	{% include shellRoot.htm %} curl -O http://repos.upsilonproject.io/upsilon-rpm-el7/upsilon-rpm-el7.repo<br />
	{% include shellRoot.htm %} rpm -U https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm<br />
	</code>

Lets install everything! Dependencies will be installed automatically. 

	<code>
	{% include shellRoot.htm %} yum install upsilon-drone upsilon-web rabbitmq-server mariadb-server<br />
	</code>

Lets start the webserver (httpd), the database server (mariadb), the message
server (rabbitmq) and make sure they restart on reboot (using `enable`); 

	<code>
	{% include shellRoot.htm %} service httpd enable<br />
	{% include shellRoot.htm %} service httpd start<br />
	{% include shellRoot.htm %} service mariadb-server enable<br />
	{% include shellRoot.htm %} service mariadb-server start<br />
	{% include shellRoot.htm %} service rabbitmq-server enable<br />
	{% include shellRoot.htm %} service rabbitmq-server start<br />
	</code>

Should be no problems so far. Lets open up the port for the web interface if
it's not already open;

	<code>
	{% include shellRoot.htm %} firewall-cmd --add-service http --permanent
	</code>
</div>
