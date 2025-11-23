export default [
	{
		category: 'Runtime Internals',
		question: 'Explain how the JIT compiler works and its optimization strategies.',
		answer: 'JIT compiles IL to native code at runtime. Tiered compilation: Tier 0 (quick, unoptimized startup), Tier 1 (optimized after profiling hot paths). Optimizations: inlining, dead code elimination, loop unrolling, register allocation. ReadyToRun for ahead-of-time compilation. Profile-guided optimization (PGO) in .NET 6+.'
	},
	{
		category: 'Runtime Internals',
		question: 'What are ValueTask and ValueTask<T> and when should you use them?',
		answer: 'ValueTask is struct-based async return type. Avoids Task allocation when result is synchronously available or uses pooling. Use for: hot paths with common sync completion, reducing allocations. Don\'t: await multiple times, use with Task.WhenAll, store for later. Prefer Task unless profiling shows benefit.'
	},
	{
		category: 'Runtime Internals',
		question: 'Explain the difference between Server GC and Workstation GC.',
		answer: 'Workstation GC: single thread, optimized for low latency, UI apps. Server GC: multiple threads (one per logical CPU), higher throughput, parallelized collections, more memory. Configure in .csproj: <ServerGarbageCollection>true</ServerGarbageCollection>. Use Server GC for web apps/services.'
	},
	{
		category: 'Runtime Internals',
		question: 'What is the Large Object Heap and how does it differ from regular heap?',
		answer: 'LOH stores objects ≥85KB. Not compacted by default (fragmentation), collected only in Gen 2 (expensive). .NET 4.5.1+ can enable compaction with GCSettings.LargeObjectHeapCompactionMode. Avoid: allocate smaller objects, use ArrayPool, stream large data. Monitor LOH fragmentation in production.'
	},
	{
		category: 'Advanced Concurrency',
		question: 'Explain channels in System.Threading.Channels and their use cases.',
		answer: 'Channels provide producer/consumer patterns with backpressure. Types: Bounded (limit capacity, blocks producer), Unbounded. Better than BlockingCollection: async, better performance. Use for: async pipelines, actor pattern, work queues. Alternative to ConcurrentQueue + SemaphoreSlim.'
	},
	{
		category: 'Advanced Concurrency',
		question: 'What is the SemaphoreSlim difference from Semaphore and when to use each?',
		answer: 'SemaphoreSlim: lightweight, async support (WaitAsync), no cross-process. Semaphore: heavyweight kernel object, cross-process sync. Use SemaphoreSlim for: limiting concurrent operations, async/await scenarios, same process. Use Semaphore only when need cross-process synchronization.'
	},
	{
		category: 'Advanced Concurrency',
		question: 'Explain async/await and SynchronizationContext.',
		answer: 'SynchronizationContext captures execution context for resuming after await. UI apps: resumes on UI thread. ASP.NET Core: no context (performance). ConfigureAwait(false) prevents context capture. Library code should always use ConfigureAwait(false) to avoid deadlocks and improve performance.'
	},
	{
		category: 'Advanced Concurrency',
		question: 'What are the risks of async void and when is it acceptable?',
		answer: 'async void: can\'t await, unhandled exceptions crash app, no completion signal. Only acceptable for: event handlers (required by signature). Always use async Task otherwise. For fire-and-forget: use Task.Run, background service, or explicitly handle exceptions.'
	},
	{
		category: 'Performance Tuning',
		question: 'Explain zero-allocation techniques in .NET.',
		answer: 'Techniques: Span<T>/Memory<T> (slice without allocating), ArrayPool (reuse arrays), ValueTask (avoid Task allocation), stackalloc (stack arrays), string.Create (avoid intermediate strings), struct over class, ref returns/locals. Measure with BenchmarkDotNet. Trade-off: complexity vs performance.'
	},
	{
		category: 'Performance Tuning',
		question: 'What is BenchmarkDotNet and how do you use it effectively?',
		answer: 'BenchmarkDotNet provides reliable microbenchmarks. Features: warmup, multiple iterations, statistical analysis, memory diagnostics. Best practices: [MemoryDiagnoser], Release mode, no debugger, test on prod-like hardware, compare alternatives. Avoid: premature optimization, optimizing without measuring.'
	},
	{
		category: 'Performance Tuning',
		question: 'Explain ref returns, ref locals, and ref structs.',
		answer: 'ref return: return reference to value, not copy. ref local: variable that references another variable. ref struct: stack-only type (like Span<T>), can\'t be on heap/boxed. Use for: zero-copy operations, high-performance scenarios. Example: Span<T>, Memory<T> use ref structs.'
	},
	{
		category: 'Advanced EF Core',
		question: 'Explain compiled queries and when to use them.',
		answer: 'Compiled queries cache LINQ expression tree translation, avoiding repeated parsing. Use Expression.Compile or EF.CompileAsyncQuery. Best for: frequently-executed queries with parameters. Gains less significant in EF Core 7+ (automatic compilation cache). Still useful for very hot paths with high query volume.'
	},
	{
		category: 'Advanced EF Core',
		question: 'What is split queries in EF Core and when should you use it?',
		answer: 'Split queries execute separate SQL queries for each Include. Avoids Cartesian explosion with multiple collections. Use AsSplitQuery() or configure globally. Trade-off: more round-trips vs less data duplication. Use for: multiple collections, large datasets. Default single query for: one-to-one, simple queries.'
	},
	{
		category: 'Advanced EF Core',
		question: 'Explain interceptors in EF Core.',
		answer: 'Interceptors hook into EF lifecycle: command execution, connection, transaction. Implement IDbCommandInterceptor, IDbConnectionInterceptor. Use for: logging, query modification, multi-tenancy, encryption. Register in DbContextOptionsBuilder. Powerful but complex - use sparingly. Alternative: global query filters.'
	},
	{
		category: 'Microservices Architecture',
		question: 'Explain the difference between orchestration and choreography in microservices.',
		answer: 'Orchestration: central coordinator directs interactions (workflow engine, saga orchestrator). Pro: centralized logic, easier debugging. Con: single point of failure, coupling. Choreography: services react to events independently. Pro: loose coupling, scalable. Con: harder to understand flow, no central view. Choose based on complexity.'
	},
	{
		category: 'Microservices Architecture',
		question: 'What is the Strangler Fig pattern?',
		answer: 'Strangler Fig incrementally replaces monolith with microservices. Create facade, route requests to new or old system, gradually migrate features. Benefits: lower risk, continuous delivery, no big-bang rewrite. Use anti-corruption layer for translation. Named after fig that grows around and replaces host tree.'
	},
	{
		category: 'Microservices Architecture',
		question: 'Explain the Outbox pattern.',
		answer: 'Outbox pattern ensures reliable message publishing. Write business data + message to database in same transaction, background process publishes from outbox table. Guarantees at-least-once delivery. Alternative: transaction log tailing (CDC). Solves dual-write problem. Implement with: polling, Change Data Capture, or dedicated libraries.'
	},
	{
		category: 'Security',
		question: 'Explain defense in depth for web applications.',
		answer: 'Defense in depth: multiple security layers. Layers: HTTPS, authentication, authorization, input validation, output encoding, rate limiting, CORS, CSP headers, secrets management, least privilege, WAF, monitoring. Each layer compensates for others. No single point of failure. Security is cumulative.'
	},
	{
		category: 'Security',
		question: 'What is OWASP Top 10 and how do you mitigate them in .NET?',
		answer: 'OWASP Top 10: A01 Broken Access Control (use [Authorize], principle of least privilege), A02 Crypto Failures (use Data Protection API), A03 Injection (parameterized queries), A04 Insecure Design (threat modeling), A05 Security Misconfiguration (disable debug, update), A06 Vulnerable Components (audit NuGet), A07 Auth Failures (MFA), A08 Data Integrity Failures (validate inputs), A09 Logging Failures (monitor), A10 SSRF (validate URLs).'
	},
	{
		category: 'Distributed Systems',
		question: 'Explain the Two-Phase Commit protocol and its limitations.',
		answer: '2PC: prepare phase (can you commit?), commit phase (commit now). Coordinator tracks participants. Problems: blocking (coordinator fails), availability trade-off (CAP), performance. Avoided in microservices. Alternatives: Saga pattern, eventual consistency, event sourcing. Use only when ACID required across distributed resources.'
	}
]
