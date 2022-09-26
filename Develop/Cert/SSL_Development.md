# Create certificate for development

## tools

```
docker run --rm -it -v `pwd`:/cert  alpine/openssl:latest req -newkey rsa:2048 -new -nodes -keyout /cert/key.pem -config /cert/certificate.conf -out /cert/csr.pem

docker run --rm -it -v `pwd`:/cert  alpine/openssl:latest x509 -req -days 3650 -in /cert/csr.pem -signkey /cert/key.pem -out /cert/server.crt  -extfile /cert/certificate-ext.conf
```

## config

certificate.conf

```
[req]
prompt = no
distinguished_name = req_distinguished_name

[req_distinguished_name]
C = CN
ST = SHANGHAI
L = CHINA
O = ***.com
OU = ****.com
CN = ******
```

certificate-ext.conf

```
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = ******.com
DNS.2 = *.******.com
DNS.3 = localhost

IP.1 = 127.0.0.1
# IP.2 = Another ip address
```
