Redis Client
======================
 
“ServiceStack.Redis” 是 Redis C# 开源客户端。ServiceStack 实现了Cache, Native操作，Lua嵌入式脚本操作等众多接口。

## Download
[ServiceStack.Redis](https://github.com/ServiceStack/ServiceStack.Redis), 当前版本 V3

## Client Interface
ServiceStack.Redis 主要接口如下：

1. `ICacheClient`，实现接口和 Memorycached 类似，Radis 作为 Cache 使用时很容易在 Memorycached 和 Redis 之间切换。
2. `IRedisNativeClient`，使用 byte 直接操作
3. `IRedisClient`, 提供了交友好 string 操作
4. `IRedisTypedClient`，使用对象类型操作，最终将对象转变为 JSON 保存到 Redis中 

### 创建 Redis Client

```
RedisClient.New()
new RedisClient(host, port)
```

`RedisClient.New()` 默认创建连接到 localhost，端口 6379。当然也可在程序启动时修改 `RedisClient.NewFactoryFn`修改链接地址或端口。
```
示例：
RedisClient.NewFactoryFn = () => new RedisClient(TestConfig.SINGLE_HOST);
``` 

### ICacheClient 示例
```
    public interface ICacheClient : IDisposable
    {
        bool Add<T>(string key, T value);
        bool Add<T>(string key, T value, DateTime expiresAt);
        bool Add<T>(string key, T value, TimeSpan expiresIn);
        long Decrement(string key, uint amount);
        void FlushAll();
        T Get<T>(string key);
        IDictionary<string, T> GetAll<T>(IEnumerable<string> keys);
        long Increment(string key, uint amount);
        bool Remove(string key);
        void RemoveAll(IEnumerable<string> keys);
        bool Replace<T>(string key, T value);
        bool Replace<T>(string key, T value, DateTime expiresAt);
        bool Replace<T>(string key, T value, TimeSpan expiresIn);
        bool Set<T>(string key, T value);
        bool Set<T>(string key, T value, DateTime expiresAt);
        bool Set<T>(string key, T value, TimeSpan expiresIn);
        void SetAll<T>(IDictionary<string, T> values);
    }
```
ICacheClient 操作 Redis String 类型
```
示例：
ICacheClient client = this.Redis;
client.Set<int>("count", 1);
client.Increment("count", 1); 

client.Add<TestObject>("icache", new TestObject() { ID = 10, Name = "1112" });
client.Set<TestObject>("icache2", new TestObject() { ID = 11, Name = "1112" });
```

对应 redis-cli
```
> set count 1
> incrby count 1
> setnx icache {"ID":10, "Name":"1112"} 
> set icache2 {"ID":11, "Name":"1112"}
```

### IRedisNativeClient 示例
```
部分接口示例
	public interface IRedisNativeClient : IDisposable
	{
		void Set(string key, byte[] value);
		long SetNX(string key, byte[] value);
		long LPush(string listId, byte[] value);
		long RPush(string listId, byte[] value);
		void HMSet(string hashId, byte[][] keys, byte[][] values);
        long HSet(string hashId, byte[] key, byte[] value);
		....
	}

```
`IRedisNativeClient` 提供了和 Redis Command 对应的接口，通过 byte array 直接操作 Redis。如果需要使用自定义的序列化方式，可以可以NativeClient。

```
示例：
IRedisNativeClient client = this.Redis;

string key = "hash";

string key1 = "1";
string value1 = "v1";

List<byte[]> keylist = new List<byte[]>();
List<byte[]> valueList = new List<byte[]>();

keylist.Add(Encoding(key1));
valueList.Add(Encoding(value1));

client.HMSet(key, keylist.ToArray(), valueList.ToArray());

byte[][] all = client.HGetAll(key);
```

对应 redis-cli
```
> hmset hash 1 v1
> hgetall hash 
```


### IRedisClient 示例
```
	public interface IRedisClient : IBasicPersistenceProvider, ICacheClient, IDisposable
	{
		string GetValue(string key);
        string GetValueFromHash(string hashId, string key);
		void SetEntry(string key, string value);
		bool SetEntryIfNotExists(string key, string value);
		void AddItemToList(string listId, string value);
		bool SetEntryInHash(string hashId, string key, string value);
		....
	}
```

```
// IRedisClient 提供 string 操作，简化调用
IRedisClient client = this.Redis;

string key = "hash";
client.SetEntryInHash(key, "2", "v2");

Dictionary<string, string> all = client.GetAllEntriesFromHash(key);
```

对应 redis-cli
```
hset hash 2 v2
hgetall hash
```

### IRedisTypedClient 示例
`IRedisTypedClient` 和其他接口类型，区别在于使用参数为具体对象，并将对象序列化为 JSON 格式。

```
	public interface IRedisTypedClient<T> : IBasicPersistenceProvider<T>, IDisposable
	{
		void SetEntry(string key, T value);
		bool SetEntryInHash<TKey>(IRedisHash<TKey, T> hash, TKey key, T value);
				
		....
	}
```

```
IRedisTypedClient<TestObject> client = this.Redis.As<TestObject>();
IRedisList<TestObject> list = client.Lists["id:0"];
client.AddItemToList(list, new TestObject() { ID = 1, Name = "he" });

IRedisTypedClient<TestObject> client = this.Redis.As<TestObject>();
IRedisHash<int, TestObject> hash = client.GetHash<int>("h:0");
client.SetEntryInHash<int>(hash, 10, new TestObject() { ID = 10, Name = "he" });
```

## ServiceStack.Redis 其他操作
除了上述接口外，ServiceStack.Redis 还提供对了 List,Set,SortedSet,Hash 更方便的操作，支持`linq` 操作。
- IRedisHash
- IRedisList
- IRedisSet
- IRedisSortedSet

```
IRedisList list = this.Redis.Lists["list"];
list.Add("list");
list.Add("list2");

IRedisSet set = this.Redis.Sets["set"];
set.Add("set");
set.Add("set");
set.Add("set2");

IRedisSortedSet sortedSet = this.Redis.SortedSets["sortedSet"];
sortedSet.Add("sortedSet");
sortedSet.Add("sortedSet");
sortedSet.Add("sortedSet2");
sortedSet.IncrementItemScore("score", 10d);
sortedSet.IncrementItemScore("score1", 11d);

IRedisHash hash = this.Redis.Hashes["hash"];
hash.Add("2", "v2");
```

## Client Managers
1. `BasicRedisClientManager`
    实现了简单的负载均衡，每次连接都是新的连接，建议 Redis 在同一台 Server 上时使用。 通过 `GetClient` 获取可读写 Client，`GetReadOnlyClient`获取只读 Client。

2. `PooledRedisClientManager`
    建议在网络环境中使用，采用 `round robin` 算法。 同样使用 `GetClient` 获取可读写 Client，`GetReadOnlyClient`获取只读 Client。

使用示例：
```
var m = new PooledRedisClientManager(
		new string[] { "10.16.50.138:6379" }, 
		new string[] { "10.16.50.138:6380" });
using(var client = m.GetClient())
{
	client.SetEntry("sss", "aaa");
	var result = client.Get<string>("sss");
}

m.Displose();
```
## Pipeline
[Pipeline](http://redis.io/topics/pipelining) 将多个命令合并到一个请求并运行。 需要注意到是 Redis 会将这些命令队列存储在服务器，这需要占用额外的内存，因此需要控制一次性执行命令的数量。

```
var m = new PooledRedisClientManager(
	new string[] { "10.16.50.138:6379" }, 
	new string[] { "10.16.50.138:6380" });
var client = m.GetClient();

using (var pipeline = client.CreatePipeline())
{
    pipeline.QueueCommand(x => x.SetEntry("key", "key"));
    pipeline.QueueCommand(x => x.SetEntry("key1", "key1"));

    pipeline.Flush();
}

string value = client.Get<string>("key");
string value1 = client.Get<string>("key1");

Assert.AreEqual("key", value);
Assert.AreEqual("key1", value1);

client.Dispose();
m.Dispose();
```

## Transaction
[Transaction](http://redis.io/topics/transactions) 的用法和 [Pipeline](http://redis.io/topics/pipelining) 类似

```
IRedisTypedClient<TestObject> client = this.Redis.As<TestObject>();
IRedisTypedTransaction<TestObject> tran = client.CreateTransaction();

using (tran)
{
    tran.QueueCommand(x => x.SetEntry("4", new TestObject() { ID = 101 }));
    tran.QueueCommand(x => x.SetEntry("5", new TestObject() { ID = 102 }));
    tran.QueueCommand(x => x.SetEntry("6", new TestObject() { ID = 103 }));

    tran.Commit();
}
```

## 总结
上述只是对 ServiceStack.Redis 使用方法的大概描述，具体详细的功能和使用方法还是需要 Client Source 中查找。