# Lab1: deploy use inline kubectl command

## Deploy application in k8s

```
kubectl create deployment guestbook --image=guestbook:v1
```

## Create and view service

```
kubectl expose deployment guestbook --type="NodePort" --port=3000
kubectl get service guestbook
```

## Scale and view rollout status

```
kubectl scale --replicas=10 deployment guestbook
kubectl rollout status deployment guestbook
```

## Upgrade new image

```
kubectl set image deployment guestbook guestbook=guestbook:v2
kubectl rollout status deployment guestbook

```

## Rollback

```
kubectl rollout undo deployment guestbook
```

## View history status of replicasets

```
 kubectl get replicasets -l app=guestbook
```

## Delete application and service

```
kubectl delete deployment guestbook
kubectl delete service guestbook
```

# Referece

[kubectl cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
[kubectl command overview](https://kubernetes.io/docs/reference/kubectl/overview/)
[kubectl command detail](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#-strong-getting-started-strong-)
[kubectl sheet](https://github.com/eon01/kubectl-SheetCheat)
