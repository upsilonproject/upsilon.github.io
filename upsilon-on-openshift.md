---
title: Upsilon on a OpenShift 3 environment
---

Upsilon can be deployed quite easily on top of OpenShift 3 - all it's services 
dockerized/containerized. You can scale-out of the OpenShift environment and deploy
upsilon-drone and other services outside too. 

This article assumes you have a OpenShift 3 environment up and running, and
have a fairly reasonable quota. 

### Create a OpenShift project for Upsilon

Call it anything you like!

![create project](resources/images/articles/upsilon-on-openshift-create-project.png)

### Upload the Upsilon application template to OpenShift

There is a pre-built Upsilon application template for OpenShift, stored in a
GitHub repository called [upsilon-on-openshift](https://github.com/upsilonproject/upsilon-on-openshift). 

<div>
On your local workstation, clone this repository:

	<code>
	{% include shellUser.htm %} <strong>mkdir upsilon-sandbox && cd upsilon-sandbox</strong><br />
	{% include shellUser.htm %} <strong>git clone https://github.com/upsilonproject/upsilon-on-openshift.git</strong><br />
	{% include shellUser.htm %} <strong>cd upsilon-on-openshift</strong>
	</code>

Login to OpenShift using the command line tool and upload the application
template. 

	<code>
	{% include shellUser.htm %} <strong>oc status</strong><br />
	In project Upsilon on OpenShift (upsilon-on-openshift) on server https://openshift.example.com:8443<br /><br />

	You have no services, deployment configs, or build configs.<br />
	Run 'oc new-app' to create an application.<br />

	{% include shellUser.htm %} <strong>oc create -f upsilon-on-openshift.yaml</strong><br />
	....
	</code>
</div>

The application template should complete successfully, and you should be able
to browse and find Upsilon in the OpenShift catalog;

![add to project](resources/images/articles/upsilon-on-openshift-add-to-project.png)

![deploy from catalog](resources/images/articles/upsilon-on-openshift-deploy-from-catalog.png)

You can change some of the deployment options before starting the deployment,
but the defaults are fine.

![deployment starting](resources/images/articles/upsilon-on-openshift-deploymentStarting.png)

### Import the schema and the initial database

From this overview screen, you'll want to wait for the upsilon-web pod to come up
sucessfully. This may take a couple of minutes. 

Create the initial database using the create-database script.
<div>
    <code>
	{% include shellUser.htm %} <strong>cd /usr/share/upsilon-database/mysql/</strong><br />
	{% include shellUser.htm %} <strong>./create-database</strong><br />
    </code>
</div>

### Go to the web application

Click on the upsilon-web route to start the installer.
