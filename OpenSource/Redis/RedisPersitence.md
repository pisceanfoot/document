Redis Persitence
======================

Redis 持久化有两种形式： `RDB` 和 `AOF`。
- RDB 将数据库快照已二进制的方式保存到磁盘中
- AOF 则是协议文本的方式，将数据库以命令的方式(包括参数)保存到 AOF 文件中。
- RDB 和 AOF 可以同时存在
- 如果使用了 AOF 形式，Redis 重启后会优先加载 AOF 文件

## RDB
RDB 的主要原理是定时在一定条件下将内存所有数据的快照以二进制的方式保存到磁盘上。

配置：
```
#save seconds changs
save 60 1000
save 300 500
save 900 1
```
当达成 save 条件时，Redis Fork一个子进程将父进程中的内存数据保存到临时文件夹中，然后重命名到目标 RDB 文件。

RDB 文件可配置是否压缩, 默认情况下是 yes
```
rdbcompression yes
```

由于是子进程进行保存操作，整个过程中不会阻塞其他操作。

## AOF
AOF 的格式是纯文本的 Redis 命令，打开 AOF 文件可以清楚的看到 Redis 的操作。
- Redis 首先对命令进行写操作
- 写操作成功后将命令同步到系统缓冲区
- 通过配置 fdatasync 将 缓冲区的文件刷到磁盘上
- 当 AOF 文件过大时，和 RDB 保存快照类型 Redis Fork一个子进程扫描所有的内存数据，对 AOF 文件进行 rewrite。 重写将去除多余的命令。比如做两次 Incre，最终的结果等价于一次 set。通过这种方式减少 AOF 文件的大小。
- 由于 AOF 是顺序添加，因此避免的寻址带来的性能损耗

详细流程请见[解密Redis持久化](http://blog.nosqlfan.com/html/3813.html)

