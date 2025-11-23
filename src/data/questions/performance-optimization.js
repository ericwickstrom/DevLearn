export default [
	{
		category: 'Performance',
		question: 'What is the difference between synchronous and asynchronous I/O?',
		answer: 'Sync I/O: thread blocks waiting for operation. Async I/O: thread released, continues when operation completes. Async drastically improves scalability for I/O-bound work (DB, HTTP, files). Use async/await for all I/O operations. CPU-bound work benefits less.'
	},
	{
		category: 'Performance',
		question: 'How do you profile a .NET application?',
		answer: 'Tools: dotnet-trace (CPU sampling), dotnet-counters (metrics), dotnet-dump (memory), PerfView, JetBrains dotMemory/dotTrace. Look for: hot paths, allocations, GC pauses, lock contention. Visual Studio Diagnostic Tools. Always profile production-like data/load.'
	},
	{
		category: 'Performance',
		question: 'What are the benefits of using struct over class?',
		answer: 'Struct: value type, stack-allocated (or inline in parent), no GC pressure, copied by value. Class: reference type, heap-allocated, GC. Use struct for: small (<16 bytes), immutable, short-lived data. Overuse causes performance issues (large copies). Examples: Point, DateTime.'
	},
	{
		category: 'Performance',
		question: 'Explain string concatenation performance issues.',
		answer: 'Strings are immutable - each concatenation creates new string. Loop concatenation = O(n²). Solutions: StringBuilder (mutable buffer), string.Join, string.Concat, string interpolation (compile-time optimization), Span<char>. Use StringBuilder for loops, interpolation for simple cases.'
	},
	{
		category: 'Performance',
		question: 'What is lazy loading and when should you use it?',
		answer: 'Lazy<T> defers initialization until first access. Thread-safe by default. Use for: expensive objects, rarely used features, circular dependencies. In EF Core, lazy loading loads related entities on access (avoid N+1). Alternative: explicit loading, eager loading (.Include).'
	},
	{
		category: 'Caching',
		question: 'What is the difference between IMemoryCache and IDistributedCache?',
		answer: 'IMemoryCache: in-process, fast, lost on restart/scale out. IDistributedCache: external (Redis, SQL), shared across servers, survives restarts. Use IMemoryCache for single server. Use IDistributedCache for: multiple servers, session state, persistent cache.'
	},
	{
		category: 'Caching',
		question: 'Explain cache eviction policies.',
		answer: 'LRU (Least Recently Used): removes least recently accessed. LFU (Least Frequently Used): removes least frequently accessed. TTL (Time To Live): expires after time. Size-based: removes when size limit hit. IMemoryCache uses size + sliding/absolute expiration. Choose based on access patterns.'
	},
	{
		category: 'Caching',
		question: 'What is the cache-aside pattern?',
		answer: 'Cache-aside: application manages cache. Read: check cache, if miss load from DB and cache. Write: update DB, invalidate cache. Simple, most common. Alternatives: write-through (write to cache+DB), write-behind (write cache, async to DB), read-through (cache loads on miss).'
	},
	{
		category: 'Database',
		question: 'What are database indexes and how do they impact performance?',
		answer: 'Index: data structure for fast lookups. Types: clustered (table order), non-clustered (separate structure), unique, composite. Speed reads, slow writes. Over-indexing wastes space, slows inserts/updates. Index WHERE/JOIN/ORDER BY columns. Analyze query plans to identify missing indexes.'
	},
	{
		category: 'Database',
		question: 'Explain the difference between optimistic and pessimistic locking.',
		answer: 'Optimistic: no lock, check version on update, retry if changed (RowVersion/Timestamp). Low contention, better performance. Pessimistic: lock row during transaction, prevents other updates, can cause deadlocks. High contention. Use optimistic for web apps, pessimistic for critical updates.'
	},
	{
		category: 'Database',
		question: 'What is a database deadlock and how do you prevent it?',
		answer: 'Deadlock: two transactions wait for each other\'s locks. DB kills one transaction. Prevent: access resources in same order, keep transactions short, use appropriate isolation level, use row versioning (READ_COMMITTED_SNAPSHOT). Retry with exponential backoff on deadlock detection.'
	},
	{
		category: 'HTTP',
		question: 'What is HTTP/2 and how does it improve performance?',
		answer: 'HTTP/2: binary protocol (vs text), multiplexing (multiple requests over one connection), server push, header compression. Benefits: faster load times, fewer connections, reduced latency. Enabled by default in .NET Core 3.0+. Use HTTPS (required for HTTP/2).'
	},
	{
		category: 'HTTP',
		question: 'Explain connection pooling in HttpClient.',
		answer: 'HttpClient reuses TCP connections via pooling. Don\'t dispose per-request (socket exhaustion). Use IHttpClientFactory (manages lifetime, pooling, handles DNS changes). Named/typed clients. Polly integration for retries. Default pool timeout 2 minutes (handles DNS rotation).'
	},
	{
		category: 'Serialization',
		question: 'What is the difference between JSON.NET and System.Text.Json?',
		answer: 'System.Text.Json: default in .NET Core 3.0+, faster, less memory, async support. JSON.NET (Newtonsoft.Json): more features, slower. STJ missing: DateOnly (until .NET 6), some complex scenarios. Use STJ unless need specific Newtonsoft features.'
	},
	{
		category: 'Serialization',
		question: 'How do you optimize JSON serialization performance?',
		answer: 'Use System.Text.Json, source generators (compile-time reflection), JsonSerializerOptions (reuse, don\'t create per call), streaming APIs for large JSON, ignore null values, use camelCase naming (smaller payloads), consider protobuf/MessagePack for internal APIs.'
	},
	{
		category: 'Monitoring',
		question: 'What metrics should you monitor in production?',
		answer: 'Application: request rate, response time, error rate, exception count. System: CPU, memory, disk I/O, GC metrics. Database: query time, connection pool, deadlocks. Custom: business metrics (orders/sec). Use Application Insights, Prometheus, or ELK stack. Set up alerts for anomalies.'
	},
	{
		category: 'Monitoring',
		question: 'What is distributed tracing?',
		answer: 'Distributed tracing: tracks request across multiple services. Correlates logs/spans via trace ID. Shows bottlenecks, failures. Tools: Application Insights, Jaeger, Zipkin. Use Activity API in .NET. Essential for microservices debugging. W3C TraceContext standard for interoperability.'
	},
	{
		category: 'Memory',
		question: 'What is the difference between ArrayPool and stackalloc?',
		answer: 'ArrayPool: rents/returns arrays from pool, heap-allocated, any size, no size limit. stackalloc: stack-allocated, ultra-fast, limited size (~1KB safe), can\'t escape method. Use stackalloc for small buffers in hot paths, ArrayPool for larger reusable buffers.'
	},
	{
		category: 'Threading',
		question: 'What is ThreadPool and how does it work?',
		answer: 'ThreadPool: reusable threads for work items. Avoids thread creation overhead. Used by Task.Run, async/await. Self-tuning: adjusts thread count based on load. Don\'t block ThreadPool threads (use Task.Run for CPU work, async for I/O). Minimum threads per core, maximum thousands.'
	},
	{
		category: 'Best Practices',
		question: 'What is the difference between IDisposable and finalizer?',
		answer: 'IDisposable: deterministic cleanup, call Dispose() or use "using". Finalizer (~Class): non-deterministic, called by GC, promotes object to Gen 2 (expensive). Implement both: Dispose for managed+unmanaged, finalizer as backup for unmanaged only. GC.SuppressFinalize in Dispose.'
	}
]
