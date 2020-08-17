# docker

[docker hub](https://hub.docker.com/r/tykio/tyk-gateway)

## installation

```
docker pull redis
docker pull tykio/tyk-gateway

```

## run

```
docker run --rm --name tyk_gateway -p 8080:8080 --link tyk_redis:redis -v $(pwd)/tyk.standalone.conf:/opt/tyk-gateway/tyk.conf -v $(pwd)/apps:/opt/tyk-gateway/apps   -v $(pwd)/policies:/opt/tyk-gateway/policies tykio/tyk-gateway
```

## create api

https://tyk.io/docs/tyk-gateway-api/api-definition-objects/

```
curl -v -H "x-tyk-authorization: 352d20ee67be67f6340b4c0605b044b7" \
  -s \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "name": "Test API1",
    "slug": "test-api1",
    "use_keyless": true,
    "api_id": "2",
    "org_id": "1",
    "definition": {
      "location": "header",
      "key": "x-api-version"
    },
    "version_data": {
      "not_versioned": true,
      "versions": {
        "Default": {
          "name": "Default",
          "use_extended_paths": true
        }
      }
    },
    "proxy": {
      "listen_path": "/test-api1/",
      "target_url": "http://www.baidu.com/",
      "strip_listen_path": true
    },
    "active": true
}' http://localhost:28080/tyk/apis/ | python -mjson.tool

```

## create key

```
curl -X POST -H "x-tyk-authorization: 352d20ee67be67f6340b4c0605b044b7" \
  -s \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "allowance": 1000,
    "rate": 1000,
    "per": 1,
    "expires": -1,
    "quota_max": -1,
    "org_id": "1",
    "quota_renews": 1449051461,
    "quota_remaining": -1,
    "quota_renewal_rate": 60,
    "access_rights": {
      "41433797848f41a558c1573d3e55a410": {
        "api_id": "41433797848f41a558c1573d3e55a410",
        "api_name": "Test API",
        "versions": ["Default"]
      }
    },
    "meta_data": {}
  }' http://localhost:8080/tyk/keys/create | python -mjson.tool
```

## hot reload

```
curl -H "x-tyk-authorization: 352d20ee67be67f6340b4c0605b044b7" -s http://localhost:28080/tyk/reload/group | python -mjson.tool
```
