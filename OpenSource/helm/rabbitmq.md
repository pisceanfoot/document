## install

```
helm install rabbitmq bitnami/rabbitmq --set ulimitNofiles=1024 --set auth.password=*** --set auth.user=*** --set auth.erlangCookie=***
```