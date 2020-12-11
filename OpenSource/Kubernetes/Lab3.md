# Health Check

```
livenessProbe:
    httpGet:
        path: /healthcheck
        port: 3000
    initialDelaySeconds: 5
    periodSeconds: 5
```

## Debug

### Pod logs

```
kubectl logs <podname>
kubectl logs <pod-name> <container-name>

kubectl describe pod/container | grep Failed
```

### Busybox pod

```
kubectl run --image busybox -it --rm bash
```

### Service Endpoints

```
kubectl get endpoints <service>
```

### ImagePullPolicy

- IfNotPresent
- Aways
- Never
