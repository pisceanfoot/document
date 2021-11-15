## install redis commands

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install redis bitnami/redis
```

### install

```
helm install redis bitnami/redis --set auth.password=
```

alternative

```
helm install redis -f values.yaml bitnami/redis
```

```
default timeotu 300s
helm upgrade --install --wait --timeout 20 ***
```

### upgrade

```
helm install redis -f values.yaml bitnami/redis
```

### version history

```
helm history redis
```

### rollback

```
helm rollback --wait --timeout 20 redis 1
```

### view status

```
helm status redis
```
