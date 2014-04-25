Cassandra Install
=======================

## 环境
- Centos 6+ 64bit
- [dsc-cassandra-1.1.0](http://downloads.datastax.com/community/)
- [JAVA 6](http://www.oracle.com/technetwork/java/javaee/downloads/java-ee-sdk-6u3-jdk-6u29-downloads-523388.html)

## 步骤
### 删除 OpenJDK
```
yum remove java-*
```

### 安装 JAVA
```
下载 jdk-6u33-linux-x64-rpm.bin
>chmod +x jdk-6u33-linux-x64-rpm.bin
>./jdk-6u33-linux-x64-rpm.bin
```

待安装完成后 JAVA 执行目录位于 “/usr/java/"

检查 JAVA 版本
```
>java -version
```

### 配置 JAVA_HOME
```
>vi /etc/profile
#添加
JAVA_HOME=/usr/java/jdk1.6.0_33
PATH=$PATH:$JAVA_HOME/bin
#保存后使生效
>source /etc/profile
```
### 安装 CASSANDRA
```
>cd /usr/local
>tar -zxvf dsc-cassandra-1.1.0-bin.tar.gz
>ln -s /usr/local/dsc-cassandra-1.1.0 /usr/local/cassandra
```

### 配置 CASSANDRA
Cassandra 安装目录下执行修改
1. vi conf/cassandra.yaml
	- cluster_name: 集群命名 
	- initial_token：可留空 
	- seeds：seed服务器 
	- listen_address:当前ip，cluster之间通信使用 
	- rpc_address：当前ip，客户端通信使用 
	- endpoint_snitch：PropertyFileSnitch
2.	cassandra-topology.properties，将cluster里面的机器都添加到文件里

启动服务器检查配置
```
>bin/cassandra
>bin/nodetool ring
```

### 自动启动脚本
```
>vi /etc/init.d/cassandra
添加以下脚本

#!/bin/bash
# init script for Cassandra.
# chkconfig: 2345 90 10
# description: Cassandra
# script slightly modified from 
# http://blog.milford.io/2010/06/installing-apache-cassandra-on-centos/
 
. /etc/rc.d/init.d/functions
 
CASS_HOME=/usr/local/cassandra
CASS_BIN=$CASS_HOME/bin/cassandra
CASS_LOG=/var/log/cassandra/system.log
CASS_USER="root"
CASS_PID=/var/run/cassandra.pid
 
if [ ! -f $CASS_BIN ]; then
  echo "File not found: $CASS_BIN"
  exit 1
fi
 
RETVAL=0
 
start() {
  if [ -f $CASS_PID ] && checkpid `cat $CASS_PID`; then
    echo "Cassandra is already running."
    exit 0
  fi
  echo -n $"Starting $prog: "
  daemon --user $CASS_USER $CASS_BIN -p $CASS_PID >> $CASS_LOG 2>&1
  usleep 500000
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
  # check if the process is already stopped by seeing if the pid file exists.
  if [ ! -f $CASS_PID ]; then
    echo "Cassandra is already stopped."
    exit 0
  fi
  echo -n $"Stopping $prog: "
  if kill `cat $CASS_PID`; then
    RETVAL=0
    echo_success
  else
    RETVAL=1
    echo_failure
  fi
  echo
  [ $RETVAL = 0 ]
}
 
status_fn() {
  if [ -f $CASS_PID ] && checkpid `cat $CASS_PID`; then
    echo "Cassandra is running."
    exit 0
  else
    echo "Cassandra is stopped."
    exit 1
  fi
}
 
case "$1" in
  start)
    start
    ;;
  stop)
    stop
    ;;
  status)
    status_fn
    ;;
  restart)
    stop
	usleep 500000
    start
    ;;
  *)
    echo $"Usage: $prog {start|stop|restart|status}"
    RETVAL=3
esac
 
exit $RETVAL

```
保存后添加执行权限
```
chmod a+x /etc/init.d/cassandra
service cassandra start # 启动服务
service cassandra stop # 停止服务
```

### 添加到服务
```
>chkconfig --list cassandra  # 检查存在
>chkconfig --add cassandra # 添加
```
### 检查防火墙
```
>vi /etc/sysconfig/iptables
iptables -A INPUT -p tcp -m tcp --dport 7000 -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 7001 -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 9042 -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 9160 -j ACCEPT
iptables -A INPUT -p tcp -m tcp --dport 7199 -j ACCEPT

# JVM 因为是主动开端口(port>1024)，不在内，建议对特定服务器开放
# 添加完毕后重启服务使生效
```

如果不需要可直接关闭
```
>service iptables stop
>chkconfig --del iptables
```
### 常用　Linux　命令
- cp: copy 复制， cp /home/file ﻿/usr/local
- rm: 删除，rm /home/file, rm –r /home/dir
- tar:压缩解压， tar -zxvf dsc-cassandra-1.1.0-bin.tar.gz
- rpm: 安装卸载rpm包即安装包。rpm –ivf install.rpm安装, rpm –e install 卸载
- vi/vim:很强大的编辑器
- ls/ls –l/ll:查看目录
- mkdir：创建目录
- netstat：查看网络
- ps：查看进程
- free: 查看内存
- top：资源使用最高的进程列表
- df： 硬盘使用状况
- du: 查看具体文件或目录 du –h –max-depth=1 /usr