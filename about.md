---
title: About
---
**Upsilon is a distributed, flexible and extensible system monitoring application.**

Distributed: Architectually, you run Upsilon nodes in your network where it makes sense. Either on every server, on a management network, inside or outside the firewall. You can run checks on secure, hard to reach networks and push those results to a central server.

Flexible: If you can script it, you can monitor it. It is as simple as that. Unlike most monitoring systems, the monitoring scripts are EXTERNAL to the main server - this means you can use Upsilon to execute your monitoring scripts in an extremely robust way. Upsilon ships with 20 monitoring scripts and is totally API compatible with all nagios monitoring scripts. The API is extremely simple - any novice programmer can intigrate their monitoring with Upsilon in minutes.

Extensible: You can add monitoring checks to Upsilon at runtime - without needing to restart the server. A list of services that Upsilon has been used to monitor are below:

Upsilon has been used to...
check ping times ([check_ping](checks/ping))
check for new IP devices on a local network (check_local_network))
check for valid dns records (check_dns)
check hard drives for SMART status (check_ide_smart)
check cpu load (nagios:check_load)
check if http server is running (check_http)
check unread messages in imap email accounts
check RSS reader for unread items (check_ttrss and check_greader)
check json output of varios web services (check_json_empty)
check for domains that are about to expire (check_domain_expiry)
See the checks category on this wiki for a more comprehensive list.

Architecture
It can monitor absolutely anything and send those results to a central server. Like this:
