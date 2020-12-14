# Rancher Install

## Rancher in docker

```
docker run -d --restart=unless-stopped -p 18080:80 --privileged rancher/rancher --no-cacerts
```

```
 docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged -v /data/rancher:/var/lib/rancher rancher/rancher:latest --acme-domain your.domain.url

```

add `-v /data/rancher:/var/lib/rancher` if you want to persistant data

## Rancher Setting

- Access control
  Setting uesrname and password
- Add Host or add new cluster

## Import Docker image from tar

```
docker save
docker load


docker save ** > **.tar
docker save ** | gzip > **.tar.gz

docker load --input **.tar
```

## Reference

[single rancher install node in docker](https://rancher.com/docs/rancher/v2.x/en/installation/other-installation-methods/single-node-docker/)
