# Helm Command

# Helm repo

```
helm list -n helm-demo

```

# Helm install

```
helm install helm-manage-name ./chat-path/ --namespace helm-demo
```

# Helm upgrade

```
helm upgrade helm-manage-name ./chat-path --set redis.slaveEnabled=false,service.type=NodePort --namespace helm-demo
```

# History and rollback

```
helm history helm-manage-name -n helm-demo

helm rollback helm-manage-name ${version} -n helm-demo

```

# Verify

```
kubectl get all --namespace helm-demo
```

# Helm repo|hub and search

for chat management

```
helm repo list
helm repo add name url
helm search repo **
helm search hub **
```
