docker run -ti --rm -v `pwd`/config:/fluentd/etc -v `pwd`/log:/log fluentd:v1.11-1-mongo

while true; do echo "[2020-12-25T15:40:41.119+0800] [DEBUG] [default] - qrcode"  >> log/api.log ; sleep 2; done