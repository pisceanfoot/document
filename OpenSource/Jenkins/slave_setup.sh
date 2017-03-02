#!/bin/sh


apt-get update && apt-get upgrade -y
apt-get install git -y
apt-get install build-essential libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip -y


groupadd jenkins
useradd jenkins -g jenkins -d /home/jenkins -m

cd /home/jenkins/

mkdir .ssh

cat > .ssh/authorized_keys << END
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCi5o8geaU8PnfstFWq9SEhdW7lsRs/Hc56R99PaqxKiSdUKXfIre93Ra5PdBMNsaRC5uT/po/VQMEN/eGHVxl9Sxd4ZXlAAdUPV6OK8TzBGFP41Rg4YBJ2Q0JRlW82VmtdVv1tK8cfvTviMpdYIbLpLGcKBcjq3FKENJ1c1x5rQkKpZe4my9wsFJhV7o6WPq5UKZ3AHvG5YGQBQ8aX49rfB6W1QMAVlZTJJ3bhB9RFNsMu1aeIe/BK0P8aS5tUIp/5F7M1sOirMcBlTXV1cjI8BNIhSB0qQ4M7cAy4a/0es1xNtGZs4fMWWeItZNTAe5LCHYbwxGeEpaN8fQh56X9P jenkins_slaver
END

chown -R jenkins:jenkins ./
chmod 700 ./.ssh
chmod 600 ./.ssh/authorized_keys

mkdir -p /var/lib/jenkins_remote
mkdir -p /var/lib/jenkins_tool

chown -R jenkins:jenkins /var/lib/jenkins_remote
chown -R jenkins:jenkins /var/lib/jenkins_tool

cat > /home/jenkins/.ssh/config << END
Host *
	StrictHostKeyChecking no
END

