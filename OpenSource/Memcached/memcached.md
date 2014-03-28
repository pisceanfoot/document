Memcached
================
[Memcached](https://code.google.com/p/memcached/)

#Install
1. 安装 libevent
2. 安装 memcached

### libevent
```
tar zvxf libevent-2.0.13-stable.tar.gz  
cd libevent-2.0.13-stable 
./configure --prefix=/usr  
make && make install
```

检查是否安装成功
```
ls -al /usr/lib | grep libevent
```

### memcached
```
tar zxvf memcached-1.4.0.tar.gz  
cd memcached-1.4.0
./configure --with-libevent=/usr --prefix=/usr/local/memcached
make && make install
```

##Init Script
作为服务启动
```
#!/bin/sh
# memcached    Startup script for memcached processes
# chkconfig: 2345 90 10
# description: Memcache provides fast memory based storage.
# processname: memcached
# These mappings correspond one-to-one with Drupal's settings.php file.

. /etc/rc.d/init.d/functions

PORT=11211
USER=root
CACHESIZE=1024
OPTIONS=''
pidfile=${PIDFILE-/var/run/memcached.pid}

echo $pidfile

prog="memcached"

start() {
    if [ -f $pidfile ] && checkpid `cat $pidfile`; then
        echo "memcached is already running."
        exit 0
    fi

    echo -n $"Starting $prog "
    
    daemon --pidfile ${pidfile} memcached -d -p $PORT -u $USER -m $CACHESIZE -P ${pidfile} $OPTIONS
    RETVAL=$?

    if [ "$RETVAL" = "0" ]; then
        echo_success
    else
        echo_failure
    fi

    echo
    return $RETVAL
}

stop() {
    if [ ! -f $pidfile ]; then
        echo "memcached is already stopped."
        exit 0
    fi

    echo -n "Stopping $prog:"
    
    killproc -p ${pidfile} memcached
    RETVAL=$?
    
    if [ $RETVAL -eq 0 ] ; then
        rm -f ${pidfile}
	echo_success
    else
	echo_failure
    fi

    echo
    return $RETVAL
}

case "$1" in
        start)
            start
            ;;

        stop)
            stop
            ;;

        restart)
            stop
            start
            ;;
        *)
            echo $"Usage: $0 {start|stop|restart}"
            exit 1

esac

exit $RETVAL
```