export default [
	{
		category: 'Advanced C#',
		question: 'Explain the difference between IEnumerable and IQueryable.',
		answer: 'IEnumerable: for in-memory collections, executes on client, uses LINQ-to-Objects. IQueryable: for remote data sources (databases), builds expression trees, executes on server (SQL), allows filtering before loading. Use IQueryable for database queries to avoid loading entire dataset.'
	},
	{
		category: 'Advanced C#',
		question: 'What are expression trees and when would you use them?',
		answer: 'Expression trees represent code as data structures. Used by LINQ providers (EF Core) to translate C# to SQL. Can build/analyze/modify code at runtime. Create with Expression.Lambda<>. Use for dynamic query building, custom LINQ providers, ORM implementations.'
	},
	{
		category: 'Advanced C#',
		question: 'What is reflection and what are its performance implications?',
		answer: 'Reflection inspects metadata at runtime (types, methods, properties). Use for: serialization, DI containers, attribute-based programming. Performance: slow due to dynamic lookups, avoid in hot paths. Cache Type/MethodInfo objects. Consider source generators (C# 9+) as alternative.'
	},
	{
		category: 'Advanced C#',
		question: 'Explain the dispose pattern and IDisposable.',
		answer: 'IDisposable releases unmanaged resources (files, DB connections, sockets). Implement Dispose() method, use "using" statement for automatic disposal. Dispose pattern: public Dispose() calls protected Dispose(bool), GC.SuppressFinalize, finalizer as backup. Async: use IAsyncDisposable with DisposeAsync().'
	},
	{
		category: 'Advanced C#',
		question: 'What is the difference between Span<T> and Memory<T>?',
		answer: 'Span<T>: stack-only ref struct, zero-allocation array slicing, ultra-fast, can\'t be stored in heap/async. Memory<T>: heap-allocated, works with async, wraps arrays/strings. Use Span for sync hot paths, Memory for async. Both avoid allocations for subranges.'
	},
	{
		category: 'Concurrency',
		question: 'What is the difference between lock, Monitor, and Semaphore?',
		answer: 'lock (syntactic sugar for Monitor): ensures single thread access to critical section. Monitor: explicit Enter/Exit, supports timeouts/TryEnter. Semaphore: limits N concurrent threads (not just one). Use lock for simple exclusion, SemaphoreSlim for limiting concurrent operations.'
	},
	{
		category: 'Concurrency',
		question: 'What is a race condition and how do you prevent it?',
		answer: 'Race condition: outcome depends on thread execution timing. Causes data corruption. Prevent with: locks (mutual exclusion), Interlocked operations (atomic), concurrent collections (ConcurrentDictionary), immutable data, actor model. Always protect shared mutable state.'
	},
	{
		category: 'Concurrency',
		question: 'Explain the difference between Task.Run and Task.Factory.StartNew.',
		answer: 'Task.Run: simple, uses default TaskScheduler, good defaults (DenyChildAttach). Task.Factory.StartNew: more options (TaskScheduler, CreationOptions, state), can return Task<Task<T>> (confusing). Prefer Task.Run unless need advanced scenarios like custom scheduler.'
	},
	{
		category: 'Concurrency',
		question: 'What is async/await state machine and how does it work?',
		answer: 'Compiler transforms async method into state machine. Each await becomes a state. Method returns immediately with Task. On await, captures context, registers continuation. When awaited task completes, continuation resumes. ConfigureAwait(false) avoids capturing context (better performance for libraries).'
	},
	{
		category: 'Memory Management',
		question: 'What are generations in GC and why do they matter?',
		answer: 'Gen 0: new objects, collected frequently. Gen 1: survived one collection, medium frequency. Gen 2: long-lived, rare collection (expensive). LOH (Large Object Heap): >85KB objects, collected with Gen 2. Optimize by: keeping objects short-lived or very long-lived, avoiding mid-life crisis.'
	},
	{
		category: 'Memory Management',
		question: 'What is object pooling and when should you use it?',
		answer: 'Object pooling reuses objects instead of creating new ones. Reduces GC pressure, improves performance. Use ArrayPool<T>, ObjectPool<T>. Good for: frequent allocations of expensive objects (large arrays, network buffers). Trade-off: memory held longer. Must reset state before returning to pool.'
	},
	{
		category: 'Memory Management',
		question: 'Explain memory leaks in .NET and how to detect them.',
		answer: 'Leaks: objects not collected despite being unreachable. Causes: event handlers not unsubscribed, static references, IDisposable not called, circular references with external resources. Detect with: dotMemory, PerfView, diagnostic dumps. Look for growing Gen 2 heap.'
	},
	{
		category: 'Advanced EF Core',
		question: 'What is the N+1 query problem and how do you solve it?',
		answer: 'N+1: loading collection executes 1 query for parent + N queries for children. Example: foreach(user) load user.Orders. Solutions: eager loading (.Include()), explicit loading (.Load()), select new (projection), batch queries. Always check SQL generated with logging.'
	},
	{
		category: 'Advanced EF Core',
		question: 'What are owned entities and when would you use them?',
		answer: 'Owned entities are value objects that don\'t have identity, always accessed through owner. Stored in same table (default) or separate table. Use OwnsOne/OwnsMany. Good for: addresses, money values, complex value objects. Alternative to separate entity with FK.'
	},
	{
		category: 'Advanced EF Core',
		question: 'Explain change tracking in EF Core and how to optimize it.',
		answer: 'EF tracks entity changes for SaveChanges. Methods: snapshot (default), notification proxies. Optimize: use AsNoTracking() for read-only queries (30-40% faster), detach entities not needed, use raw SQL for bulk operations, avoid loading just to delete.'
	},
	{
		category: 'Security',
		question: 'What is SQL injection and how do you prevent it?',
		answer: 'SQL injection: attacker inserts malicious SQL via input. Prevention: parameterized queries (EF, Dapper), stored procedures, input validation, least privilege DB user. Never concatenate user input into SQL. Use FromSqlInterpolated with parameters in EF Core.'
	},
	{
		category: 'Security',
		question: 'Explain the difference between Authentication and Authorization.',
		answer: 'Authentication: verifies identity (who you are) - login, JWT, cookies. Authorization: checks permissions (what you can do) - [Authorize(Roles="Admin")], claims, policies. Auth happens first, then authz. Use claims-based auth for flexible permissions.'
	},
	{
		category: 'Security',
		question: 'What are claims in ASP.NET Core authentication?',
		answer: 'Claims are key-value pairs representing user info (name, email, role, permissions). Part of ClaimsIdentity/ClaimsPrincipal. Stored in JWT or cookie. Use for: role-based authz, policy-based authz, custom permissions. Access via User.Claims in controllers.'
	},
	{
		category: 'Microservices',
		question: 'What is eventual consistency in microservices?',
		answer: 'Eventual consistency: data across services becomes consistent over time, not immediately. Use when strong consistency too expensive/impossible. Implement with: message queues, saga pattern, event sourcing. Trade-off: complexity, stale reads. Good for: order processing, inventory updates.'
	},
	{
		category: 'Microservices',
		question: 'What is the Saga pattern?',
		answer: 'Saga manages distributed transactions as series of local transactions. Two types: Choreography (events, decentralized), Orchestration (coordinator service). Each step has compensating action for rollback. Use when can\'t use 2PC. Good for: order fulfillment, booking systems.'
	}
]
