#! /bin/bash

# redis single node
helm install redis -f redis/values.yaml bitnami/redis

helm install rabbitmq bitnami/rabbitmq --set ulimitNofiles=1024 --set auth.password=**** --set auth.user=*** --set auth.erlangCookie=****


# https://github.com/elastic/helm-charts/blob/main/elasticsearch/README.md
helm install elasticsearch-dev elastic/elasticsearch -f elastic/values.yaml