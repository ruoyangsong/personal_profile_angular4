## Overview

personal_profile_angular4 is a Angular 4 template to build your personal profile. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.
A sample link of this themplate is: [Ho Yeung Lai's Profile](http://hoyeunglai.com/)

## Install Dependencies:
`npm install`
## Local Project Development
`ng serve`
## Local Project Build
`ng build --prod --build-optimizer=true`

## For Deploying the project to Google Cloud:

### Set Up a VM
In the Google Cloud Compute Engine, create a new instance. <b>Remember to allow HTTP request!</b>

1. Use SSH to connect to VM.
2. Install Apache2: 
`sudo apt-get update && sudo apt-get install apache2 -y`<br>
3. Transfer files:
`gcloud compute scp --recurse /Users/ruoyang/works/personal_profile_angular4/dist/*  instance-rsongblog:~`<br>
4. Move to /var/www/html: `mv /home/ruoyang/* /var/www/html`

### Config DNS
1. <b>Easy approach:</b><br>
Set up domain forward to your server IP

2. <b>Complicated approach:</b><br>
For the example.com domain name, create an A record with your DNS provider. For the www.example.com sub-domain, create a CNAME record for www to point it to the example.com domain. The A record maps a host name to an IP address. The CNAME record creates an alias for the A record. This lesson assumes you want example.com and www.example.com to map to the same IP address.<br>
Get your external IP address for your instance. You can look up the IP address from the VM instances page in the Cloud Platform Console.
Sign in to your provider's DNS management interface and find the domain that you want to manage. Refer to your DNS provider's documentation for specific steps.
Create an A record and set the value to your external IP address. The name or host field can be set to @, which represents the naked domain. For more information, the Google Apps support page provides help for completing various DNS tasks.
Create a CNAME record, set the name to www, and set the value to @ or to your hostname followed by a period: example.com.. Read the Google Apps support for help creating the A record with various providers.
If appropriate for your provider, increment the serial number in your SOA record to reflect that changes have been made so that your records will propagate.


