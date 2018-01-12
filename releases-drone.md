---
title: Upsilon Drone Releases
---

<ul class = "tabmenu">
	<li><a href = "#dockerHub">{% include iconDocker.htm %}Docker hub</a></li>
	<li><a href = "#dockerCentos">{% include iconDocker.htm %}Docker + {% include iconCentos.htm %}CentOS</a></li>
	<li><a href = "#fedora">{% include iconFedora.htm %} Fedora</a></li>
	<li><a href = "#el6">{% include iconRhel.htm %} RHEL, {% include iconCentos.htm %} CentOS (6.x)</a></li>
	<li><a href = "#el7">{% include iconRhel.htm %} RHEL, {% include iconCentos.htm %} CentOS (7.x)</a></li>
	<li><a href = "#debianUbuntu">{% include iconDebian.htm %} Debian, {%include iconUbuntu.htm %} Ubuntu</a></li>
	<li><a href = "#rpi">{% include iconRpi.htm %} RPI (Rasbian OS)</a></li>
	<li><a href = "#win">{% include iconWin.htm %} Windows</a></li>
	<li><a href = "#mac">{% include iconMac.htm %} Mac OS</a></li>
	<li><a href = "#archivesZip">{% include iconArchive.htm %} ZIP archives</a></li>
	<li><a href = "#archivesTar">{% include iconArchive.htm %} TAR archives</a></li>
</ul>

<div id = "dockerHub" class = "tab">
On your Linux host, where Docker is already installed;
	<code>
	{% include shellRoot.htm %} docker pull upsilonproject/drone
	</code>

<a href = "quickstart-drone-docker">upsilon-drone on Docker quickstart</a>
</div>

<div id = "dockerCentos" class = "tab">
On your Linux host, where Docker is already installed;
	<code>
	{% include shellRoot.htm %} docker run -it centos
	</code>

Then, inside the container;

	<code>
	{% include shellContainer.htm %} yum install vim wget -y<br />
	{% include shellContainer.htm %} cd /etc/yum.repos.d<br />
	{% include shellContainer.htm %} wget http://repos.upsilonproject.io/upsilon-rpm-el7/upsilon-rpm-el7.repo<br />
	{% include shellContainer.htm %} yum install upsilon-node
	</code>

<a href = "quickstart-drone-docker">upsilon-drone on Docker quickstart</a>
</div>

<div id = "fedora" class = "tab">
	<code>
	{% include shellRoot.htm %}cd /etc/yum.repos.d/<br />
	{% include shellRoot.htm %}curl -O http://repos.upsilonproject.io/upsilon-rpm-fc24/upsilon-rpm-fc24.repo<br />
	{% include shellRoot.htm %}yum install upsilon-node
	</code>
</div>

<div id = "el6" class = "tab">
	<code>
	{% include shellRoot.htm %}cd /etc/yum.repos.d/<br />
	{% include shellRoot.htm %}curl -O http://repos.upsilonproject.io/upsilon-rpm-el6/upsilon-rpm-el6.repo<br />
	{% include shellRoot.htm %}yum install upsilon-node
	</code>
</div>

<div id = "el7" class = "tab">
	<code>
	{% include shellRoot.htm %}cd /etc/yum.repos.d/<br />
	{% include shellRoot.htm %}curl -O http://repos.upsilonproject.io/upsilon-rpm-el7/upsilon-rpm-el7.repo<br />
	{% include shellRoot.htm %}yum install upsilon-node
	</code>
</div>

<div id = "debianUbuntu" class = "tab">
Debian builds are offline at the moment. 

Use the bindist version; http://repos.upsilonproject.io/upsilon-bindist/ 

Recommend you install like this; 
	<code>
	{% include shellRoot.htm %}dpkg -i upsilon*.deb && apt-get -fy install
	</code>
</div>

<div id = "rpi" class = "tab" markdown = "1">
See the [rpi](rpi) specific instructions.
</div>

<div id = "win" class = "tab">
Windows support is quite primitive at the moment. You can download the <a href = "#archivesZip">ZIP archives</a> and go from there.
</div>

<div id = "mac" class = "tab" markdown = "1">
![](resources/images/HowAboutNo.jpg)
</div>

<div id = "archivesZip" class = "tab">
<a href = "http://repos.upsilonproject.io/upsilon-zips/">http://repos.upsilonproject.io/upsilon-zips/</a>
</div>

<div id = "archivesTar" class = "tab">
<a href = "http://repos.upsilonproject.io/upsilon-tars/">http://repos.upsilonproject.io/upsilon-tars/</a>
</div>


<script>
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll("ul.tabmenu li").forEach(function(el) {
		el.addEventListener("click", function(evt) {
			document.querySelectorAll("ul.tabmenu li a").forEach(function (tabControl) {
				tabControl.classList.remove("selected");
			});

			evt.target.classList.add("selected");
		});
	});
})
</script>
