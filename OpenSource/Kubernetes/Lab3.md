# Health Check

```
livenessProbe:
    httpGet:
        path: /healthcheck
        port: 3000
    initialDelaySeconds: 5
    periodSeconds: 5
```
