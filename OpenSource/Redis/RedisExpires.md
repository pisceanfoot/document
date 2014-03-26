Redis 过期策略
=======================
Redis 有以下4个设置过期命令，可以设置生存时间或到期时间：
- EXPIRE 以秒为单位，设置键的生存时间。如 N 秒后过期。
- PEXPIRE 以为秒为单位，设置键的生存时间。如 N 为秒后过期。
- EXPIREAT 设置过期时间，以秒为单位设置键的 UNIX 时间戳。
- PEXPIREAT 设置过期时间，以微秒为单位设置键的 UNIX 时间戳。

虽然设置的方法不同，但检查方法都是一致的。即检查 KEY 设置的时间是否超过了当前 UNIX 时间。 如果过期则不可时间。

## 示例
```
> set key 1
> expire key 60
> ttl key
(integer) 58

> set key 2
> expireat 1395824520
(integer) 1
> ttl key
(integer) 10470
```

##KEY 过期清除策略
Redis 采用的过期策略是“惰性删除” + “定期删除”。
- 惰性删除，即当 KEY 过期后并不会直接删除，而是每次访问的时间判断 KEY 是否过期，过期则删除否则返回键值。
- 定期删除，Redis 每隔一段时间通过一定的策略删除过期的 KEY。

## RDB 影响
在创建 RDB 文件时，Redis 会检查 KEY 是否过期。过期的 KEY 不会写到 RDB 文件中。
所以 KEY 过期对 RDB 没有影响。

## AOF 影响
KEY 过期后 Redis 不会删除 KEY，也不会将 KEY 过期的命令保存到 AOF 文件中。除非 KEY 被删除策略删除，若访问删除、定期删除。
在 KEY 删除后 Redis 将添加一条 DEL 记录。

AOF 重写时和 RDB 策略类似，过期的 KEY 不会保存到 AOF 文件中。
应此，过期的 KEY 对 AOF 重写没有影响。

## Replication 影响
当 Redis 为主从结构时，KEY 的过期策略统一为主节点控制。
- 如果是主节点上删除一个过期的 KEY，会显示的发送 DEL 命令到所有的从节点上。
- 如果是在从节点上，所有的过期的 KEY 均不会被删除直到主节点发送 DEL 命令或 SYNC 从主节点同步后。

从节点不会自动删除过期 KEY 的原因是为了和主节点保持一致。 
