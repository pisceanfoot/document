
Download nginx
------------------------------
[download website](http://nginx.org/en/download.html)

Install dependency
------------------------------

### Install nginx dependency
apt-get install build-essential libc6 libpcre3 libpcre3-dev libpcrecpp0 libssl0.9.8 libssl-dev zlib1g zlib1g-dev lsb-base openssl

### redis client
download [hiredis](https://github.com/redis/hiredis), unzip and then
```
make && make install
```

### cJson
download [cJSON](https://github.com/kbranigan/cJSON), unzip and then
```
make && make install
```

### error hand
if some dependencies not found with error message like 'share libiary not found', use command below

ln -s /usr/local/lib/libcjson.so /lib/libcjson.so
ln -s /usr/local/lib/libhiredis.so.0.13 /lib/libhiredis.so.0.13

Compile nginx with sso module
------------------------------
./configure --add-module=../nginx-auth-token-module

make && sudo  make install

Start && stop nginx
------------------------------
sudo /usr/local/nginx/sbin/nginx
sudo /usr/local/nginx/sbin/nginx -s stop
