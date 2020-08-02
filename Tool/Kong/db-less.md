# run kong in db less mode

When run kong in db less mode, the admin api is readonly.

## run in docker

[https://docs.konghq.com/install/docker/](https://docs.konghq.com/install/docker/)

```
 docker network create kong-net
 docker volume create kong-vol
 docker run -d --name kong \
     --network=kong-net \
     -e "KONG_DATABASE=off" \
     -e "KONG_DECLARATIVE_CONFIG=/usr/local/kong/declarative/kong.yml" \
     -e "KONG_PROXY_ACCESS_LOG=/dev/stdout" \
     -e "KONG_ADMIN_ACCESS_LOG=/dev/stdout" \
     -e "KONG_PROXY_ERROR_LOG=/dev/stderr" \
     -e "KONG_ADMIN_ERROR_LOG=/dev/stderr" \
     -e "KONG_ADMIN_LISTEN=0.0.0.0:8001, 0.0.0.0:8444 ssl" \
     -p 8000:8000 \
     -p 8443:8443 \
     -p 127.0.0.1:8001:8001 \
     -p 127.0.0.1:8444:8444 \
     kong:latest

```

remove `KONG_DECLARATIVE_CONFIG` for we dont have declarative configuration file yeat, just see next how to create one.

## create a emtpy declarative configuration file

[https://docs.konghq.com/2.1.x/db-less-and-declarative-config/](https://docs.konghq.com/2.1.x/db-less-and-declarative-config/)

```
kong config -c kong.conf init
```

### configuration file format

```
# ------------------------------------------------------------------------------
# This is an example file to get you started with using
# declarative configuration in Kong.
# ------------------------------------------------------------------------------

# Metadata fields start with an underscore (_)
# Fields that do not start with an underscore represent Kong entities and attributes

# _format_version is mandatory,
# it specifies the minimum version of Kong that supports the format

_format_version: "2.1"

# _transform is optional, defaulting to true.
# It specifies whether schema transformations should be applied when importing this file
# as a rule of thumb, leave this setting to true if you are importing credentials
# with plain passwords, which need to be encrypted/hashed before storing on the database.
# On the other hand, if you are reimporting a database with passwords already encrypted/hashed,
# set it to false.

_transform: true

# Each Kong entity (core entity or custom entity introduced by a plugin)
# can be listed in the top-level as an array of objects:

# services:
# - name: example-service
#   url: http://example.com
#   # Entities can store tags as metadata
#   tags:
#   - example
#   # Entities that have a foreign-key relationship can be nested:
#   routes:
#   - name: example-route
#     paths:
#     - /
#   plugins:
#   - name: key-auth
# - name: another-service
#   url: https://example.org

# routes:
# - name: another-route
#   # Relationships can also be specified between top-level entities,
#   # either by name or by id
#   service: example-service
#   hosts: ["hello.com"]

# consumers:
# - username: example-user
#   # Custom entities from plugin can also be specified
#   # If they specify a foreign-key relationshp, they can also be nested
#   keyauth_credentials:
#   - key: my-key
#   plugins:
#   - name: rate-limiting
#     _comment: "these are default rate-limits for user example-user"
#     config:
#       policy: local
#       second: 5
#       hour: 10000

# When an entity has multiple foreign-key relationships
# (e.g. a plugin matching on both consumer and service)
# it must be specified as a top-level entity, and not through
# nesting.

# plugins:
# - name: rate-limiting
#   consumer: example-user
#   service: another-service
#   _comment: "example-user is extra limited when using another-service"
#   config:
#     hour: 2
#   # tags are for your organization only and have no meaning for Kong:
#   tags:
#   - extra_limits
#   - my_tag
```
