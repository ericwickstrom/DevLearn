export const questionSets = {
	'General Interview Prep': [
		{
			category: 'Data Structures',
			question: 'What is the time complexity of accessing an element in an array by index?',
			answer: 'O(1) - constant time. Arrays provide direct access to elements via their index since elements are stored contiguously in memory.'
		},
		{
			category: 'Data Structures',
			question: 'What is the difference between a Stack and a Queue?',
			answer: 'Stack follows LIFO (Last In First Out) - like a stack of plates. Queue follows FIFO (First In First Out) - like a line at a store. Stack uses push/pop, Queue uses enqueue/dequeue.'
		},
		{
			category: 'Data Structures',
			question: 'When would you use a Hash Map over an Array?',
			answer: 'Use a Hash Map when you need fast lookups by key (O(1) average), when data doesn\'t have a natural numeric index, or when you need to check for existence of elements frequently.'
		},
		{
			category: 'Algorithms',
			question: 'What is Binary Search and what is its time complexity?',
			answer: 'Binary Search divides a sorted array in half repeatedly to find a target value. Time complexity is O(log n). It requires the array to be sorted first.'
		},
		{
			category: 'Algorithms',
			question: 'Explain the difference between BFS and DFS.',
			answer: 'BFS (Breadth-First Search) explores neighbors level by level using a queue. DFS (Depth-First Search) explores as far as possible down each branch using a stack or recursion. BFS finds shortest path, DFS uses less memory.'
		},
		{
			category: 'Algorithms',
			question: 'What is the time complexity of Merge Sort?',
			answer: 'O(n log n) in all cases (best, average, worst). It divides the array recursively (log n) and merges subarrays (n) at each level. Space complexity is O(n).'
		},
		{
			category: 'Big O',
			question: 'What does O(n²) time complexity mean?',
			answer: 'O(n²) means the runtime grows quadratically with input size. Common in nested loops where each element is compared with every other element (e.g., bubble sort, naive duplicate detection).'
		},
		{
			category: 'Big O',
			question: 'How do you calculate time complexity for nested loops?',
			answer: 'Multiply the complexities. Two independent nested loops over n elements = O(n) × O(n) = O(n²). If inner loop depends on outer loop index, analyze the actual iterations.'
		},
		{
			category: 'System Design',
			question: 'What is the difference between horizontal and vertical scaling?',
			answer: 'Vertical scaling (scale up) adds more resources to existing servers (CPU, RAM). Horizontal scaling (scale out) adds more servers. Horizontal is more flexible and fault-tolerant but requires load balancing.'
		},
		{
			category: 'System Design',
			question: 'What is a Load Balancer and why is it important?',
			answer: 'A Load Balancer distributes incoming traffic across multiple servers to prevent overload, increase availability, and improve response times. Common algorithms: round-robin, least connections, IP hash.'
		},
		{
			category: 'JavaScript',
			question: 'What is the difference between let, const, and var?',
			answer: 'var is function-scoped and hoisted. let is block-scoped and not hoisted. const is block-scoped, not hoisted, and cannot be reassigned (but objects/arrays can be mutated).'
		},
		{
			category: 'JavaScript',
			question: 'What is a closure?',
			answer: 'A closure is when a function retains access to variables from its outer scope even after the outer function has returned. Useful for data privacy and creating function factories.'
		},
		{
			category: 'React',
			question: 'What is the Virtual DOM and why does React use it?',
			answer: 'Virtual DOM is a lightweight copy of the actual DOM. React compares the Virtual DOM with the real DOM (diffing) and only updates changed elements (reconciliation). This is faster than updating the entire DOM.'
		},
		{
			category: 'React',
			question: 'What is the purpose of useEffect?',
			answer: 'useEffect handles side effects in functional components (API calls, subscriptions, DOM updates). It runs after render. The dependency array controls when it re-runs. Return a cleanup function to prevent memory leaks.'
		},
		{
			category: 'Database',
			question: 'What is the difference between SQL and NoSQL databases?',
			answer: 'SQL databases are relational, use structured schemas, and support ACID transactions (PostgreSQL, MySQL). NoSQL databases are non-relational, schema-flexible, and scale horizontally (MongoDB, Redis, Cassandra).'
		},
		{
			category: 'Database',
			question: 'What is database indexing and why is it important?',
			answer: 'An index is a data structure that improves query speed by creating pointers to data. Like a book index - you can find information quickly without reading everything. Trade-off: faster reads, slower writes.'
		},
		{
			category: 'Web Fundamentals',
			question: 'What is the difference between HTTP and HTTPS?',
			answer: 'HTTPS is HTTP with encryption via SSL/TLS. It protects data in transit from eavesdropping and tampering. Requires certificates. Modern browsers mark HTTP sites as "Not Secure".'
		},
		{
			category: 'Web Fundamentals',
			question: 'What are HTTP status codes? Give examples.',
			answer: '2xx = Success (200 OK, 201 Created). 3xx = Redirect (301 Moved, 304 Not Modified). 4xx = Client Error (400 Bad Request, 404 Not Found, 401 Unauthorized). 5xx = Server Error (500 Internal Error, 503 Unavailable).'
		},
		{
			category: 'Coding Patterns',
			question: 'What is the Two Pointer technique?',
			answer: 'A pattern using two pointers that move through data to solve problems efficiently. Common in array/string problems: one from start, one from end (palindrome check), or both moving forward at different speeds (slow/fast pointers).'
		},
		{
			category: 'Coding Patterns',
			question: 'What is the Sliding Window technique?',
			answer: 'A pattern for problems involving contiguous subarrays/substrings. Maintain a "window" that slides through data, adding/removing elements. Useful for finding max/min sum, longest substring, etc. Often achieves O(n) instead of O(n²).'
		}
	],
	'Python Essentials': [
		{
			category: 'Python Basics',
			question: 'What is the difference between a list and a tuple in Python?',
			answer: 'Lists are mutable (can be changed after creation) and use square brackets []. Tuples are immutable (cannot be changed) and use parentheses (). Tuples are faster and can be used as dictionary keys.'
		},
		{
			category: 'Python Basics',
			question: 'Explain Python\'s list comprehension.',
			answer: 'List comprehension provides a concise way to create lists. Syntax: [expression for item in iterable if condition]. Example: [x*2 for x in range(10) if x % 2 == 0] creates a list of even numbers doubled.'
		},
		{
			category: 'Python Basics',
			question: 'What is the difference between == and is in Python?',
			answer: '== checks if values are equal. "is" checks if two variables reference the same object in memory (identity). Example: a = [1,2] and b = [1,2] → a == b is True, but a is b is False.'
		},
		{
			category: 'Python Data Structures',
			question: 'When would you use a set vs a list in Python?',
			answer: 'Use a set when you need unique elements, don\'t care about order, and need fast membership testing (O(1)). Use a list when you need ordering, duplicates are allowed, and you access by index.'
		},
		{
			category: 'Python Data Structures',
			question: 'What is a dictionary comprehension?',
			answer: 'Similar to list comprehension but creates dictionaries. Syntax: {key_expr: value_expr for item in iterable}. Example: {x: x**2 for x in range(5)} creates {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}.'
		},
		{
			category: 'Python Functions',
			question: 'What are *args and **kwargs?',
			answer: '*args allows a function to accept any number of positional arguments as a tuple. **kwargs allows any number of keyword arguments as a dictionary. Useful for flexible function signatures.'
		},
		{
			category: 'Python Functions',
			question: 'What is a lambda function?',
			answer: 'A lambda is an anonymous function defined with lambda keyword. Syntax: lambda arguments: expression. Example: square = lambda x: x**2. Useful for short functions passed as arguments.'
		},
		{
			category: 'Python Functions',
			question: 'Explain Python decorators.',
			answer: 'Decorators modify or enhance functions without changing their code. They wrap a function with additional functionality. Syntax: @decorator above function definition. Common uses: logging, timing, access control.'
		},
		{
			category: 'Python OOP',
			question: 'What is the difference between @staticmethod and @classmethod?',
			answer: '@staticmethod doesn\'t receive implicit first argument (no self or cls). @classmethod receives the class as first argument (cls). Use @classmethod when you need to access/modify class state.'
		},
		{
			category: 'Python OOP',
			question: 'What is inheritance in Python?',
			answer: 'Inheritance allows a class to inherit attributes and methods from parent class(es). Syntax: class Child(Parent). Python supports multiple inheritance. Use super() to call parent methods.'
		},
		{
			category: 'Python Advanced',
			question: 'What is a generator in Python?',
			answer: 'A generator is a function that uses yield instead of return to produce a sequence of values lazily (on-demand). More memory efficient than lists for large datasets. Can only iterate once.'
		},
		{
			category: 'Python Advanced',
			question: 'Explain the Global Interpreter Lock (GIL).',
			answer: 'The GIL is a mutex that protects Python objects, preventing multiple threads from executing Python bytecode simultaneously. This means CPU-bound multi-threaded programs don\'t run in parallel. Use multiprocessing for true parallelism.'
		},
		{
			category: 'Python Advanced',
			question: 'What is the difference between shallow copy and deep copy?',
			answer: 'Shallow copy (copy.copy()) creates a new object but references nested objects. Deep copy (copy.deepcopy()) creates a new object and recursively copies all nested objects. Deep copy fully independent.'
		},
		{
			category: 'Python Best Practices',
			question: 'What is PEP 8?',
			answer: 'PEP 8 is Python\'s style guide. Key rules: 4 spaces for indentation, max line length 79 chars, snake_case for functions/variables, PascalCase for classes, 2 blank lines between functions.'
		},
		{
			category: 'Python Best Practices',
			question: 'What is a context manager and when would you use it?',
			answer: 'Context managers handle resource setup/cleanup using "with" statement. They implement __enter__ and __exit__ methods. Common use: file handling (with open(\'file\') as f:) ensures file is closed even if error occurs.'
		},
		{
			category: 'Python Standard Library',
			question: 'What is the collections module?',
			answer: 'Collections module provides specialized container types: Counter (counts elements), defaultdict (default values for missing keys), OrderedDict (remembers insertion order), deque (efficient appends/pops from both ends), namedtuple (tuple with named fields).'
		},
		{
			category: 'Python Standard Library',
			question: 'What is the difference between range() and xrange()?',
			answer: 'In Python 2, range() returns a list, xrange() returns an iterator (memory efficient). In Python 3, range() behaves like xrange() (returns an iterator), and xrange() no longer exists.'
		},
		{
			category: 'Python Testing',
			question: 'What testing frameworks are common in Python?',
			answer: 'unittest (built-in, Java-inspired), pytest (most popular, simple syntax, fixtures), nose/nose2 (extends unittest), doctest (tests in docstrings). pytest is community favorite for its simplicity and powerful features.'
		},
		{
			category: 'Python Performance',
			question: 'How can you improve Python performance?',
			answer: 'Use built-in functions (faster than custom), list comprehensions vs loops, generators for large data, NumPy for numerical operations, Cython for C-speed, multiprocessing for CPU-bound tasks, async/await for I/O-bound tasks.'
		},
		{
			category: 'Python Memory',
			question: 'How does Python manage memory?',
			answer: 'Python uses automatic memory management with reference counting (tracks object references) and garbage collection (detects circular references). When reference count reaches 0, memory is freed. Garbage collector handles cycles periodically.'
		}
	],
	'System Design Deep Dive': [
		{
			category: 'Scalability',
			question: 'What is database sharding?',
			answer: 'Sharding splits data across multiple databases based on a shard key (e.g., user ID). Each shard holds a subset of data. Improves performance and enables horizontal scaling. Challenges: complex queries, rebalancing, choosing good shard key.'
		},
		{
			category: 'Scalability',
			question: 'What is a CDN and how does it work?',
			answer: 'Content Delivery Network distributes static content (images, CSS, JS) to edge servers geographically close to users. Reduces latency, decreases origin server load, improves availability. Popular: Cloudflare, AWS CloudFront, Akamai.'
		},
		{
			category: 'Scalability',
			question: 'Explain database replication.',
			answer: 'Replication copies data across multiple database servers. Master-slave: master handles writes, slaves handle reads (improves read performance). Master-master: both can write (better availability but complex conflict resolution). Increases redundancy and availability.'
		},
		{
			category: 'Caching',
			question: 'What are common caching strategies?',
			answer: 'Cache-aside: app checks cache first, fetches from DB on miss. Write-through: write to cache and DB simultaneously. Write-back: write to cache, async write to DB. Read-through: cache fetches from DB on miss. Each has trade-offs between consistency and performance.'
		},
		{
			category: 'Caching',
			question: 'What is cache invalidation and why is it difficult?',
			answer: 'Cache invalidation removes stale data from cache. Difficult because: determining when data is stale, handling distributed caches, balancing freshness vs performance. Famous quote: "There are only two hard things in Computer Science: cache invalidation and naming things."'
		},
		{
			category: 'Caching',
			question: 'What is Redis and when would you use it?',
			answer: 'Redis is an in-memory data store used as cache, message broker, or database. Extremely fast (microsecond latency). Supports data structures (strings, lists, sets, sorted sets). Use cases: session storage, leaderboards, pub/sub, rate limiting.'
		},
		{
			category: 'Databases',
			question: 'What is CAP theorem?',
			answer: 'CAP theorem states distributed systems can only guarantee 2 of 3: Consistency (all nodes see same data), Availability (every request gets response), Partition tolerance (system works despite network failures). Must choose between CP or AP during partitions.'
		},
		{
			category: 'Databases',
			question: 'What is eventual consistency?',
			answer: 'Eventual consistency means if no new updates are made, all replicas will eventually converge to the same value. Provides higher availability and performance but can serve stale data temporarily. Used in distributed systems like DynamoDB, Cassandra.'
		},
		{
			category: 'Databases',
			question: 'Explain ACID properties.',
			answer: 'Atomicity: transactions all-or-nothing. Consistency: database remains valid after transaction. Isolation: concurrent transactions don\'t interfere. Durability: committed data persists after crashes. SQL databases prioritize ACID, NoSQL often trade some properties for performance/scale.'
		},
		{
			category: 'Message Queues',
			question: 'What is a message queue and when would you use it?',
			answer: 'Message queue decouples services by async message passing. Producer sends messages, consumer processes them. Benefits: handles traffic spikes, improves reliability, enables async processing. Examples: RabbitMQ, AWS SQS, Kafka. Use for: background jobs, event processing, microservices.'
		},
		{
			category: 'Message Queues',
			question: 'What is Apache Kafka?',
			answer: 'Kafka is a distributed streaming platform for high-throughput, fault-tolerant message processing. Uses publish-subscribe model with topics and partitions. Retains messages for replay. Use cases: event streaming, log aggregation, real-time analytics, CDC.'
		},
		{
			category: 'API Design',
			question: 'What is REST and what are its principles?',
			answer: 'REST (Representational State Transfer) is an architectural style for APIs. Principles: stateless communication, client-server separation, cacheable responses, uniform interface (HTTP methods), layered system. Uses standard HTTP methods: GET, POST, PUT, DELETE, PATCH.'
		},
		{
			category: 'API Design',
			question: 'What is the difference between REST and GraphQL?',
			answer: 'REST: multiple endpoints, fixed response structures, over/under-fetching issues, simpler. GraphQL: single endpoint, client specifies exact data needed, no over/under-fetching, more complex to implement, built-in schema/type system.'
		},
		{
			category: 'API Design',
			question: 'What is API rate limiting and how do you implement it?',
			answer: 'Rate limiting restricts number of API requests per time window to prevent abuse. Algorithms: Fixed window (simple, bursty), Sliding window (smooth), Token bucket (flexible bursts), Leaky bucket (constant rate). Implement with Redis counters or API gateway.'
		},
		{
			category: 'Microservices',
			question: 'What are microservices and their benefits?',
			answer: 'Microservices split apps into small, independent services communicating via APIs. Benefits: independent deployment, technology diversity, fault isolation, easier scaling. Challenges: distributed system complexity, network latency, data consistency, debugging.'
		},
		{
			category: 'Microservices',
			question: 'What is service discovery?',
			answer: 'Service discovery automatically detects network locations of service instances. Client-side: client queries registry (e.g., Consul, Eureka) and load balances. Server-side: load balancer queries registry. Enables dynamic scaling and instance replacement.'
		},
		{
			category: 'Performance',
			question: 'What is connection pooling?',
			answer: 'Connection pooling reuses database connections instead of creating new ones per request. Dramatically improves performance by avoiding connection overhead. Pool manages fixed number of connections, queues requests when full. Configure: min/max size, timeout, idle timeout.'
		},
		{
			category: 'Performance',
			question: 'What is database denormalization and when would you use it?',
			answer: 'Denormalization intentionally adds redundancy to reduce joins and improve read performance. Trade-off: faster reads, slower writes, more storage, data consistency challenges. Use when: read-heavy workload, complex joins hurt performance, specific queries are critical.'
		},
		{
			category: 'Security',
			question: 'What is OAuth 2.0?',
			answer: 'OAuth 2.0 is an authorization framework for delegated access. User grants third-party app limited access without sharing credentials. Flow: user redirects to provider, approves, app receives access token. Roles: Resource Owner, Client, Authorization Server, Resource Server.'
		},
		{
			category: 'Security',
			question: 'What is JWT and how does it work?',
			answer: 'JWT (JSON Web Token) is a compact, self-contained token for authentication. Structure: header.payload.signature (Base64 encoded). Server signs token with secret, client includes in requests. Stateless (no server-side session storage). Vulnerable if secret compromised or token not validated properly.'
		}
	],
	'C# Essentials': [
		{
			category: 'C# Basics',
			question: 'What is the difference between value types and reference types in C#?',
			answer: 'Value types (int, bool, struct) store data directly in memory (stack). Reference types (class, string, array) store a reference to data on the heap. Value types are copied when assigned, reference types copy the reference.'
		},
		{
			category: 'C# Basics',
			question: 'What is the difference between const and readonly?',
			answer: 'const is compile-time constant, must be initialized at declaration, only works with primitive types. readonly can be assigned at runtime (in constructor), works with any type, value can differ per instance.'
		},
		{
			category: 'C# Basics',
			question: 'Explain the difference between == and Equals().',
			answer: '== compares references for reference types (unless overloaded). Equals() compares values (can be overridden). For strings, both compare values because string overrides ==. Always use Equals() for value comparison.'
		},
		{
			category: 'C# Basics',
			question: 'What is boxing and unboxing?',
			answer: 'Boxing converts a value type to object (allocates heap memory). Unboxing extracts value type from object. Example: int i = 5; object o = i; (boxing), int j = (int)o; (unboxing). Avoid for performance - use generics instead.'
		},
		{
			category: 'C# OOP',
			question: 'What are the four pillars of OOP?',
			answer: 'Encapsulation (hide implementation details), Abstraction (simplify complexity), Inheritance (reuse code from base classes), Polymorphism (objects can take many forms via interfaces/overriding).'
		},
		{
			category: 'C# OOP',
			question: 'What is the difference between abstract class and interface?',
			answer: 'Abstract class: can have implementation, constructors, fields, single inheritance. Interface: only signatures (C# 8+ allows default implementation), no state, multiple inheritance. Use interface for contracts, abstract for shared base functionality.'
		},
		{
			category: 'C# OOP',
			question: 'What is the difference between override and overload?',
			answer: 'Override: redefines base class method with same signature (virtual/abstract required). Overload: multiple methods with same name but different parameters in same class. Override is runtime polymorphism, overload is compile-time.'
		},
		{
			category: 'C# Collections',
			question: 'What is the difference between Array, List, and ArrayList?',
			answer: 'Array: fixed size, strongly typed, fastest. List<T>: dynamic size, strongly typed (generic), most common. ArrayList: dynamic size, stores objects (boxing), legacy - avoid in new code, use List<T> instead.'
		},
		{
			category: 'C# Collections',
			question: 'When would you use Dictionary vs List?',
			answer: 'Use Dictionary<K,V> for key-value lookups (O(1) average), fast contains check, unique keys. Use List<T> for ordered sequences, index access, duplicates allowed, need to iterate in order.'
		},
		{
			category: 'C# LINQ',
			question: 'What is LINQ and why use it?',
			answer: 'LINQ (Language Integrated Query) provides unified syntax to query collections, databases, XML. Benefits: readable code, compile-time checking, IntelliSense support. Two syntax: query (SQL-like) and method (lambda). Example: list.Where(x => x > 5).Select(x => x * 2)'
		},
		{
			category: 'C# LINQ',
			question: 'What is the difference between First() and FirstOrDefault()?',
			answer: 'First() throws exception if no elements found. FirstOrDefault() returns default value (null for reference types, 0 for int, etc). Use FirstOrDefault() when element might not exist to avoid exceptions.'
		},
		{
			category: 'C# Async',
			question: 'What is async/await and when should you use it?',
			answer: 'async/await enables asynchronous programming without blocking threads. Use for I/O operations (database, file, HTTP). async marks method, await suspends execution until task completes. Improves scalability by freeing threads while waiting.'
		},
		{
			category: 'C# Async',
			question: 'What is the difference between Task and Thread?',
			answer: 'Thread is OS-level, heavyweight, manual management. Task is higher-level abstraction, uses thread pool, supports async/await, lightweight. Tasks are composable and return values. Always prefer Task over Thread for async work.'
		},
		{
			category: 'C# Memory',
			question: 'What is the difference between Stack and Heap?',
			answer: 'Stack: stores value types and references, automatic cleanup, fast, LIFO, limited size. Heap: stores reference type objects, garbage collected, slower, larger. Local variables go on stack, objects created with "new" go on heap.'
		},
		{
			category: 'C# Memory',
			question: 'What is garbage collection in C#?',
			answer: 'GC automatically frees memory of objects no longer referenced. Uses generations (0, 1, 2) - newer objects collected more frequently. Gen 0: short-lived, Gen 2: long-lived. Can force with GC.Collect() but usually not recommended.'
		},
		{
			category: 'C# Features',
			question: 'What are nullable types?',
			answer: 'Nullable types allow value types to be null. Syntax: int? or Nullable<int>. Check with HasValue property or == null. C# 8+ added nullable reference types to catch null reference bugs at compile time.'
		},
		{
			category: 'C# Features',
			question: 'What is the var keyword?',
			answer: 'var uses implicit typing - compiler infers type from assigned value. Still strongly typed (not dynamic). Must initialize at declaration. Use for readability with complex types like Dictionary<string, List<int>>. Avoid when type isn\'t obvious.'
		},
		{
			category: 'C# Features',
			question: 'What are extension methods?',
			answer: 'Extension methods add methods to existing types without modifying them. Must be static method in static class, first parameter uses "this" keyword. Example: public static bool IsEven(this int num) => num % 2 == 0; Usage: 5.IsEven()'
		},
		{
			category: 'C# Delegates',
			question: 'What is a delegate?',
			answer: 'Delegate is a type-safe function pointer that references methods. Enables callbacks and event handling. Example: delegate int MathOp(int x, int y). Can be multicast (invoke multiple methods). Built-in: Action (no return), Func (returns value).'
		},
		{
			category: 'C# Delegates',
			question: 'What is the difference between Action, Func, and Predicate?',
			answer: 'Action: delegate with no return value (void), up to 16 parameters. Func: delegate that returns a value, last type parameter is return type. Predicate: Func<T, bool> - specifically returns bool, used for filtering.'
		}
	],
	'.NET Fundamentals': [
		{
			category: '.NET Basics',
			question: 'What is .NET and what are its components?',
			answer: '.NET is a development platform. Components: CLR (Common Language Runtime - executes code), BCL (Base Class Library - built-in types/utilities), compilers (C#, F#, VB), runtime (manages memory, security). Modern: .NET Core/.NET 5+ (cross-platform).'
		},
		{
			category: '.NET Basics',
			question: 'What is the CLR?',
			answer: 'Common Language Runtime executes .NET code. Manages memory (GC), type safety, exception handling, thread management. Compiles IL (Intermediate Language) to native code via JIT (Just-In-Time) compilation. Provides cross-language interoperability.'
		},
		{
			category: '.NET Basics',
			question: 'What is the difference between .NET Framework and .NET Core/.NET 5+?',
			answer: '.NET Framework: Windows-only, legacy, full-featured but heavy. .NET Core/.NET 5+: cross-platform (Windows, Linux, Mac), open-source, modular, better performance, actively developed. Use .NET 5+ for new projects.'
		},
		{
			category: '.NET Basics',
			question: 'What is NuGet?',
			answer: 'NuGet is .NET\'s package manager for sharing and consuming libraries. Like npm for Node.js. Hosts packages on nuget.org. Use in Visual Studio or dotnet CLI. Packages defined in .csproj file. Essential for dependency management.'
		},
		{
			category: 'Dependency Injection',
			question: 'What is Dependency Injection and why use it?',
			answer: 'DI provides dependencies from outside rather than creating them internally. Benefits: loose coupling, easier testing (mock dependencies), better maintainability. .NET has built-in DI container. Register services in Startup/Program, inject via constructor.'
		},
		{
			category: 'Dependency Injection',
			question: 'What are the DI service lifetimes in .NET?',
			answer: 'Transient: new instance every request. Scoped: one instance per HTTP request/scope. Singleton: one instance for app lifetime. Choose based on state: Transient for stateless, Scoped for per-request data (like DbContext), Singleton for shared state/caches.'
		},
		{
			category: 'Configuration',
			question: 'How does configuration work in .NET?',
			answer: 'Uses appsettings.json for settings, can have environment-specific files (appsettings.Development.json). Access via IConfiguration injection. Supports environment variables, command-line args. Use Options pattern (IOptions<T>) for strongly-typed configuration.'
		},
		{
			category: 'Logging',
			question: 'How do you implement logging in .NET?',
			answer: 'Use ILogger<T> interface (built-in). Inject via DI. Log levels: Trace, Debug, Info, Warning, Error, Critical. Configure providers in appsettings.json (Console, File, Application Insights). Example: _logger.LogInformation("User {UserId} logged in", userId)'
		},
		{
			category: 'Error Handling',
			question: 'What is middleware in .NET?',
			answer: 'Middleware are components in the request pipeline that handle requests/responses. Order matters - executes in sequence. Each can process request, call next middleware, or short-circuit. Examples: authentication, error handling, logging, routing. Configure in Program.cs.'
		},
		{
			category: 'Error Handling',
			question: 'How do you handle exceptions in .NET APIs?',
			answer: 'Use exception middleware (app.UseExceptionHandler) for global handling. Return appropriate HTTP status codes (400 for validation, 404 for not found, 500 for server error). Create custom exception types. Log exceptions. Use ProblemDetails for consistent error responses.'
		},
		{
			category: 'Testing',
			question: 'What testing frameworks are used in .NET?',
			answer: 'xUnit (most popular for new projects), NUnit, MSTest (Microsoft\'s). Use Moq or NSubstitute for mocking. FluentAssertions for readable assertions. Arrange-Act-Assert pattern. TestServer for integration testing APIs.'
		},
		{
			category: 'Testing',
			question: 'What is the difference between unit tests and integration tests?',
			answer: 'Unit tests: test single method/class in isolation, mock dependencies, fast, no external resources. Integration tests: test multiple components together, use real dependencies (database, HTTP), slower, verify end-to-end behavior. Both important.'
		},
		{
			category: 'Entity Framework',
			question: 'What is Entity Framework Core?',
			answer: 'EF Core is an ORM (Object-Relational Mapper) for .NET. Maps C# classes to database tables. Supports LINQ queries, change tracking, migrations. Code-first or database-first approach. Supports SQL Server, PostgreSQL, SQLite, etc.'
		},
		{
			category: 'Entity Framework',
			question: 'What is DbContext in Entity Framework?',
			answer: 'DbContext represents a session with database. Manages entity objects, tracks changes, executes queries. Contains DbSet<T> properties for each entity. Register as Scoped service (one per request). Dispose properly or use "using" statement.'
		},
		{
			category: 'Performance',
			question: 'How do you improve .NET application performance?',
			answer: 'Use async/await for I/O, cache frequently-used data, use IMemoryCache or distributed cache, optimize database queries (indexing, avoid N+1), use projection (select only needed fields), implement pagination, use compiled queries, profile with tools like dotnet-trace.'
		},
		{
			category: 'Security',
			question: 'What is CORS and how do you configure it in .NET?',
			answer: 'CORS (Cross-Origin Resource Sharing) allows web pages to request resources from different domains. Configure in Program.cs: add CORS policy with allowed origins, methods, headers. Use app.UseCors(). Required for APIs consumed by frontend on different domain.'
		},
		{
			category: 'API Design',
			question: 'What are the HTTP verbs and when to use them?',
			answer: 'GET: retrieve data (idempotent). POST: create new resource. PUT: update entire resource (idempotent). PATCH: partial update. DELETE: remove resource (idempotent). GET/PUT/DELETE should be idempotent - multiple identical requests have same effect.'
		},
		{
			category: 'API Design',
			question: 'What is model validation in .NET?',
			answer: 'Use Data Annotations ([Required], [StringLength], [Range]) on model properties. ASP.NET automatically validates. Check ModelState.IsValid in controller. Return 400 BadRequest with validation errors. Can create custom validation attributes for complex rules.'
		},
		{
			category: 'Authentication',
			question: 'What is JWT authentication in .NET?',
			answer: 'JWT is token-based authentication. User logs in, server generates JWT with claims, client includes token in Authorization header. Configure in Program.cs with AddAuthentication/AddJwtBearer. Use [Authorize] attribute to protect endpoints. Token contains user info (claims).'
		},
		{
			category: 'Best Practices',
			question: 'What is the Repository Pattern?',
			answer: 'Repository Pattern abstracts data access logic from business logic. Create interface (IRepository) with CRUD methods, implement with concrete class. Benefits: easier testing (mock repo), swap data sources, centralize data access logic. Often used with Unit of Work pattern.'
		}
	],
	'ASP.NET Core': [
		{
			category: 'ASP.NET Basics',
			question: 'What is ASP.NET Core?',
			answer: 'ASP.NET Core is a cross-platform, high-performance framework for building web apps and APIs. Open-source, modular, supports dependency injection, middleware pipeline. Used for MVC apps, Web APIs, Blazor (SPA), Razor Pages.'
		},
		{
			category: 'ASP.NET Basics',
			question: 'What is the difference between MVC and Web API?',
			answer: 'MVC: returns views (HTML), uses Razor, for server-rendered web apps. Web API: returns data (JSON/XML), RESTful, for building APIs consumed by clients (mobile, SPA). Both use similar patterns (controllers, routing). API uses [ApiController] attribute.'
		},
		{
			category: 'Controllers',
			question: 'What is a Controller in ASP.NET Core?',
			answer: 'Controller handles HTTP requests, contains action methods that return responses. Inherits from ControllerBase (API) or Controller (MVC). Use route attributes ([Route], [HttpGet]) to define endpoints. Injected with dependencies via constructor.'
		},
		{
			category: 'Controllers',
			question: 'What is the [ApiController] attribute?',
			answer: '[ApiController] enables API-specific behaviors: automatic model validation (returns 400 if invalid), infers parameter binding sources ([FromBody], [FromQuery]), binds responses to ProblemDetails format. Apply to controller class.'
		},
		{
			category: 'Routing',
			question: 'How does routing work in ASP.NET Core?',
			answer: 'Routing maps URLs to controller actions. Two types: Convention-based (defined in Program.cs) and Attribute routing ([Route("api/[controller]")]). Parameters in route: {id}. Supports constraints: {id:int}. Order matters for overlapping routes.'
		},
		{
			category: 'Routing',
			question: 'What is the difference between [FromBody], [FromQuery], and [FromRoute]?',
			answer: '[FromBody]: reads from request body (JSON for POST/PUT). [FromQuery]: reads from URL query string (?name=value). [FromRoute]: reads from URL path ({id}). [FromHeader]: reads from HTTP headers. [ApiController] infers these automatically.'
		},
		{
			category: 'Action Results',
			question: 'What are common action result types?',
			answer: 'Ok(data) - 200, Created(uri, data) - 201, NoContent() - 204, BadRequest() - 400, NotFound() - 404, Unauthorized() - 401, StatusCode(code). Return IActionResult or ActionResult<T> for flexibility. Use specific results for semantic meaning.'
		},
		{
			category: 'Middleware',
			question: 'What is the ASP.NET Core middleware pipeline?',
			answer: 'Request flows through middleware in order, each can process request/response. Common middleware: UseRouting, UseAuthentication, UseAuthorization, UseEndpoints. Add custom with app.Use(). Order matters: auth before endpoints, exception handler first.'
		},
		{
			category: 'Middleware',
			question: 'How do you create custom middleware?',
			answer: 'Create class with InvokeAsync(HttpContext context, RequestDelegate next) method. Process request, call await next(context), process response. Register with app.UseMiddleware<T>() or create extension method. Use for logging, request modification, custom auth.'
		},
		{
			category: 'Filters',
			question: 'What are filters in ASP.NET Core?',
			answer: 'Filters run code before/after action execution. Types: Authorization, Resource, Action, Exception, Result filters. Apply via attributes ([Authorize], [ValidateModel]) or globally. Use for cross-cutting concerns like logging, validation, error handling.'
		},
		{
			category: 'Model Binding',
			question: 'What is model binding?',
			answer: 'Model binding automatically maps HTTP request data to action method parameters. Sources: route data, query string, form data, body. Use [Bind] to control which properties bind. Complex types from body, simple types from query/route.'
		},
		{
			category: 'Model Validation',
			question: 'How do you validate models in ASP.NET Core?',
			answer: 'Use Data Annotations on model properties. [ApiController] automatically validates and returns 400 if invalid. Manually check ModelState.IsValid. Custom validation with ValidationAttribute. Use FluentValidation library for complex scenarios.'
		},
		{
			category: 'Startup',
			question: 'What is the Program.cs file?',
			answer: 'Program.cs (minimal hosting in .NET 6+) configures services and middleware. Replaces old Startup.cs. Register services with builder.Services.Add*, configure pipeline with app.Use*. Entry point of application. Sets up DI, routing, auth, etc.'
		},
		{
			category: 'Startup',
			question: 'What is the difference between ConfigureServices and Configure?',
			answer: 'Legacy (.NET 5-): ConfigureServices registers services for DI. Configure sets up middleware pipeline. .NET 6+ uses Program.cs: builder.Services for services, app.Use for middleware. Services registered before app built, middleware after.'
		},
		{
			category: 'API Versioning',
			question: 'How do you implement API versioning?',
			answer: 'Use Microsoft.AspNetCore.Mvc.Versioning package. Methods: URL path (/api/v1/users), query string (?api-version=1.0), header (api-version: 1.0). Configure in Program.cs with AddApiVersioning. Use [ApiVersion("1.0")] on controllers. Supports deprecated versions.'
		},
		{
			category: 'Content Negotiation',
			question: 'What is content negotiation?',
			answer: 'Client specifies desired format via Accept header (application/json, application/xml). Server returns data in requested format. ASP.NET Core supports JSON by default. Add XML with AddXmlSerializerFormatters(). Can create custom formatters.'
		},
		{
			category: 'Response Caching',
			question: 'How do you implement caching in ASP.NET Core?',
			answer: 'Response caching: [ResponseCache] attribute with duration. In-memory caching: IMemoryCache for server-side. Distributed caching: IDistributedCache with Redis/SQL Server for multi-server. Output caching (.NET 7+): app.UseOutputCache() for whole responses.'
		},
		{
			category: 'Swagger',
			question: 'What is Swagger/OpenAPI in ASP.NET Core?',
			answer: 'Swagger generates interactive API documentation. Use Swashbuckle.AspNetCore package. Configure in Program.cs with AddSwaggerGen/UseSwagger. Accesses via /swagger endpoint. Documents endpoints, parameters, responses. Use XML comments for descriptions.'
		},
		{
			category: 'Background Tasks',
			question: 'How do you run background tasks in ASP.NET Core?',
			answer: 'Use IHostedService or BackgroundService (inherits IHostedService). Register as hosted service in Program.cs. Override ExecuteAsync for long-running work. Use for periodic tasks, queue processing. For complex scenarios, use Hangfire or Quartz.NET.'
		},
		{
			category: 'SignalR',
			question: 'What is SignalR?',
			answer: 'SignalR enables real-time, bi-directional communication between server and clients. Uses WebSockets when available, falls back to long polling. Create Hub class with methods clients can call. Clients subscribe to receive server messages. Use for chat, notifications, live updates.'
		}
	],
	'.NET Advanced (Mid-Level)': [
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
	],
	'Architecture & Patterns (Mid-Level)': [
		{
			category: 'Design Patterns',
			question: 'Explain the SOLID principles.',
			answer: 'S: Single Responsibility - one reason to change. O: Open/Closed - open for extension, closed for modification. L: Liskov Substitution - subclasses replaceable. I: Interface Segregation - many specific interfaces > one general. D: Dependency Inversion - depend on abstractions, not concrete classes.'
		},
		{
			category: 'Design Patterns',
			question: 'What is the Repository pattern and its pros/cons?',
			answer: 'Repo abstracts data access, provides collection-like interface. Pros: testability, swap data sources, centralized queries. Cons: can become bloated, may leak abstractions, might duplicate EF functionality. Use when: multiple data sources, need abstraction layer, DDD.'
		},
		{
			category: 'Design Patterns',
			question: 'Explain the Unit of Work pattern.',
			answer: 'UoW maintains list of changes, commits all at once. In EF Core, DbContext is UoW. Tracks inserts/updates/deletes, writes in single transaction on SaveChanges. Benefits: consistency, transaction management. Often combined with Repository pattern.'
		},
		{
			category: 'Design Patterns',
			question: 'What is the Decorator pattern and when would you use it?',
			answer: 'Decorator adds behavior to objects dynamically without changing class. Wraps object, implements same interface, delegates to wrapped. Use for: logging, caching, retry logic, cross-cutting concerns. Example: ICacheService wrapping IDataService. Better than inheritance for composition.'
		},
		{
			category: 'Design Patterns',
			question: 'Explain the Strategy pattern.',
			answer: 'Strategy defines family of algorithms, makes them interchangeable. Client chooses strategy at runtime. Interface for strategies, concrete implementations. Use for: payment methods, sorting algorithms, validation rules. Avoids switch/if statements, follows Open/Closed.'
		},
		{
			category: 'Architecture',
			question: 'What is Clean Architecture?',
			answer: 'Clean Architecture: Domain (entities) at center, surrounded by Application (use cases), Infrastructure (data access), Presentation (API/UI). Dependencies point inward. Benefits: testability, independence from frameworks/UI/DB. Similar to Onion/Hexagonal architecture.'
		},
		{
			category: 'Architecture',
			question: 'Explain CQRS pattern.',
			answer: 'CQRS (Command Query Responsibility Segregation): separate models for reads/writes. Commands change state (write), Queries return data (read). Benefits: optimize separately, different data stores, complex domain logic. Use with: event sourcing, high-scale systems, DDD.'
		},
		{
			category: 'Architecture',
			question: 'What is Domain-Driven Design (DDD)?',
			answer: 'DDD focuses on business domain complexity. Concepts: Entities (identity), Value Objects (equality by value), Aggregates (consistency boundary), Repositories, Domain Services, Ubiquitous Language. Benefits: models match business, maintainable. Use for complex domains, not CRUD apps.'
		},
		{
			category: 'Architecture',
			question: 'What are bounded contexts in DDD?',
			answer: 'Bounded context: explicit boundary where domain model is valid. Each context has own ubiquitous language, can have different models for same concept. Prevents model pollution. Maps to microservices well. Context mapping defines relationships between contexts.'
		},
		{
			category: 'Architecture',
			question: 'Explain the difference between Monolith and Microservices.',
			answer: 'Monolith: single deployable unit, shared database, simple deployment, easier to develop initially. Microservices: independent services, own databases, complex deployment, scaling flexibility. Trade-offs: complexity vs flexibility. Start monolith, split when needed, not vice versa.'
		},
		{
			category: 'API Design',
			question: 'What is idempotency and why is it important?',
			answer: 'Idempotent: multiple identical requests have same effect as one. GET, PUT, DELETE are idempotent. POST isn\'t. Important for: retry logic, network failures, distributed systems. Implement with: idempotency keys, checking existing records before creating.'
		},
		{
			category: 'API Design',
			question: 'Explain API pagination strategies.',
			answer: 'Offset-based: skip/take, simple but slow for large offsets. Cursor-based: unique key (ID/timestamp), fast, consistent results. Keyset: WHERE id > lastId, efficient. Page-based: page number, user-friendly. Choose based on: data volatility, performance needs, UX requirements.'
		},
		{
			category: 'API Design',
			question: 'What is HATEOAS?',
			answer: 'HATEOAS (Hypermedia As The Engine Of Application State): REST principle where responses include links to related actions. Client discovers actions dynamically. Pros: evolvability, self-documenting. Cons: complex, verbose. Rarely implemented fully due to complexity vs benefit.'
		},
		{
			category: 'Messaging',
			question: 'What is the difference between message queues and event buses?',
			answer: 'Message Queue: point-to-point, one consumer per message, work distribution, guaranteed delivery. Event Bus: pub/sub, multiple subscribers, event notification, fire-and-forget. Use queues for: commands, tasks. Use event bus for: notifications, events. Examples: RabbitMQ (both), MassTransit.'
		},
		{
			category: 'Messaging',
			question: 'What is event sourcing?',
			answer: 'Event sourcing: store state as sequence of events instead of current state. Rebuild state by replaying events. Benefits: audit trail, time travel, event replay. Drawbacks: complexity, eventual consistency. Use with CQRS. Good for: financial systems, audit requirements.'
		},
		{
			category: 'Resilience',
			question: 'What is the Circuit Breaker pattern?',
			answer: 'Circuit Breaker prevents cascading failures. States: Closed (normal), Open (failing, reject calls), Half-Open (test recovery). After N failures, opens circuit. After timeout, tries again. Use Polly library. Protects services from failing dependencies.'
		},
		{
			category: 'Resilience',
			question: 'Explain retry and backoff strategies.',
			answer: 'Retry: attempt operation again after failure. Strategies: fixed delay, exponential backoff (2x each time), jitter (randomness). Use for: transient failures (network, timeout). Don\'t retry: validation errors, 404s. Polly library provides retry policies with backoff.'
		},
		{
			category: 'Testing',
			question: 'What is the Test Pyramid?',
			answer: 'Test Pyramid: many unit tests (fast, isolated), fewer integration tests (slower, test combinations), few E2E tests (slowest, test full system). Ratio roughly 70/20/10. Unit tests give fast feedback, E2E tests verify end-to-end flows.'
		},
		{
			category: 'Testing',
			question: 'What is Test-Driven Development (TDD)?',
			answer: 'TDD: write test first (red), write minimum code to pass (green), refactor. Benefits: better design, test coverage, confidence. Challenges: learning curve, slower initially. Good for: complex logic, stable requirements. Three laws: no code without failing test.'
		},
		{
			category: 'Testing',
			question: 'Explain the difference between mocks, stubs, and fakes.',
			answer: 'Mock: verifies behavior (method calls), throws if unexpected call. Stub: provides canned responses, no verification. Fake: working implementation (in-memory DB). Mock = behavior verification, Stub = state verification. Use Moq/NSubstitute for mocks/stubs.'
		}
	],
	'Performance & Optimization (Mid-Level)': [
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
	],
	'.NET Expert (Senior-Level)': [
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
	],
	'System Design & Architecture (Senior-Level)': [
		{
			category: 'Scalability',
			question: 'Design a highly scalable notification system.',
			answer: 'Components: API gateway, message queue (Kafka/RabbitMQ), worker services, notification providers (email/SMS/push), status tracking, retry logic. Scale: horizontal workers, queue partitioning, rate limiting per provider, bulk processing, circuit breakers. Database: user preferences, delivery status. Monitoring: delivery rate, failures, latency.'
		},
		{
			category: 'Scalability',
			question: 'How would you design a rate limiting system?',
			answer: 'Algorithms: Token bucket (smooth rate), Fixed window (simple), Sliding window (accurate), Leaky bucket (constant rate). Storage: Redis (distributed), in-memory (single server). Consider: per-user, per-IP, per-API. Implementation: middleware, API gateway (rate limit headers). Handle: 429 status, exponential backoff, burst allowance.'
		},
		{
			category: 'Scalability',
			question: 'Explain horizontal vs vertical database scaling strategies.',
			answer: 'Vertical: bigger server (CPU, RAM, storage). Limits: hardware ceiling, single point of failure, downtime. Horizontal: sharding (partition data), read replicas (scale reads), CQRS (separate read/write). Challenges: joins across shards, rebalancing, distributed transactions. Use: vertical first (simple), horizontal when needed (scale, availability).'
		},
		{
			category: 'Data Architecture',
			question: 'Design a multi-tenant SaaS database architecture.',
			answer: 'Approaches: 1) Shared DB, shared schema (discriminator, cheapest, noisy neighbor), 2) Shared DB, separate schemas (isolation, migration complexity), 3) Separate DBs (best isolation, expensive, complex). Choose based on: tenant size, compliance, cost. Include: row-level security, tenant context, backup strategy, data migration path.'
		},
		{
			category: 'Data Architecture',
			question: 'Explain polyglot persistence and when to use it.',
			answer: 'Polyglot persistence: different data stores for different needs. SQL (ACID, relational), NoSQL (scale, flexibility), Redis (cache, session), Elasticsearch (search), Neo4j (graphs). Benefits: optimize per use case. Challenges: complexity, consistency, operations. Use when: different access patterns, not premature optimization.'
		},
		{
			category: 'Data Architecture',
			question: 'How do you handle database schema evolution in microservices?',
			answer: 'Strategies: expand-contract (add new, dual write, remove old), database per service (independent evolution), versioned APIs (backward compatibility), event-sourced (schema-less events). Migrations: automated (EF migrations), blue-green deployment, feature flags. Never: breaking changes, forced downtime. Test migrations on production-like data.'
		},
		{
			category: 'Resilience',
			question: 'Design a system for zero-downtime deployments.',
			answer: 'Techniques: blue-green (two environments, switch traffic), rolling deployment (gradual instance update), canary (test on subset), feature flags (toggle features). Requirements: backward compatibility, stateless services, health checks, graceful shutdown, database migrations (expand-contract). Load balancer manages traffic. Automated rollback on errors.'
		},
		{
			category: 'Resilience',
			question: 'Explain the Bulkhead pattern.',
			answer: 'Bulkhead isolates resources to prevent cascade failures. Like ship compartments - one breach doesn\'t sink ship. Implementation: separate connection pools per dependency, dedicated thread pools, rate limiting per client. Benefits: fault isolation, prevents resource exhaustion. Use: multiple critical dependencies. Polly provides bulkhead isolation.'
		},
		{
			category: 'Resilience',
			question: 'How do you implement graceful degradation?',
			answer: 'Graceful degradation: reduce functionality when dependencies fail. Techniques: cached data (stale but available), default values, disabled features, read-only mode, queue for later. Circuit breaker opens, return cached/default. Example: recommendations service down, show trending instead. Monitor degraded state, alert for manual intervention.'
		},
		{
			category: 'Event-Driven Architecture',
			question: 'Compare event notification, event-carried state transfer, and event sourcing.',
			answer: 'Event notification: minimal data (ID), receiver queries for details. Event-carried state transfer: full state in event, no query needed. Event sourcing: events are source of truth, rebuild state by replay. Choose based on: coupling (notification = loose), autonomy (state transfer = high), auditability (event sourcing = full).'
		},
		{
			category: 'Event-Driven Architecture',
			question: 'Design an event-driven order processing system.',
			answer: 'Events: OrderCreated, PaymentProcessed, InventoryReserved, OrderShipped. Services: Order, Payment, Inventory, Shipping. Event store (Kafka/EventStore). Saga handles failures: compensating transactions. Projections for queries. Idempotency keys for duplicate prevention. Dead letter queue for failed events. Monitoring: event flow, processing time, failures.'
		},
		{
			category: 'Event-Driven Architecture',
			question: 'How do you handle event versioning?',
			answer: 'Strategies: 1) Upcasting (convert old to new), 2) Multiple versions (handlers for each), 3) Weak schema (JSON, optional fields). Best practices: additive changes only, never remove fields, use event type + version, transformation layer, test old events against new code. Consider: event replay, long-term storage.'
		},
		{
			category: 'API Gateway',
			question: 'What are the responsibilities of an API Gateway?',
			answer: 'Responsibilities: routing, authentication/authorization, rate limiting, request/response transformation, protocol translation (REST to gRPC), SSL termination, caching, logging, metrics. Benefits: client simplification, cross-cutting concerns. Challenges: single point of failure, complexity. Options: Azure API Management, Kong, YARP, Ocelot.'
		},
		{
			category: 'API Gateway',
			question: 'Explain the Backend for Frontend (BFF) pattern.',
			answer: 'BFF: separate API gateway per client type (web, mobile, desktop). Benefits: tailored responses, optimized for client, independent evolution, security per client. Trade-offs: duplication, more services. Use when: very different client needs, team autonomy. Alternative: single gateway with versioning/feature flags.'
		},
		{
			category: 'Service Mesh',
			question: 'What is a service mesh and when do you need one?',
			answer: 'Service mesh: infrastructure layer for service-to-service communication. Features: mTLS, observability, traffic management, circuit breaking, retries. Examples: Istio, Linkerd, Consul Connect. Need when: many microservices, polyglot, complex routing, security requirements. Trade-off: operational complexity. Start simple, add when proven need.'
		},
		{
			category: 'Observability',
			question: 'Design an observability strategy for microservices.',
			answer: 'Three pillars: Logs (ELK, structured logging, correlation IDs), Metrics (Prometheus, RED/USE method), Traces (distributed tracing, OpenTelemetry). Dashboards: service health, business KPIs. Alerts: error rate, latency, saturation. SLO/SLI definition. Cost management. Sampling for scale. Unified observability platform (Datadog, New Relic).'
		},
		{
			category: 'Observability',
			question: 'Explain SLO, SLI, and SLA.',
			answer: 'SLI (Service Level Indicator): metric (latency, error rate, throughput). SLO (Service Level Objective): target for SLI (99.9% requests < 200ms). SLA (Service Level Agreement): contract with consequences (refunds). SLO < SLA (error budget). Use for: prioritization (reliability vs features), incident response. Track: burn rate, error budget.'
		},
		{
			category: 'Database Design',
			question: 'Design a sharding strategy for a social media platform.',
			answer: 'Shard key: user_id (consistent, balanced). Technique: consistent hashing (minimize rebalancing). Features: user profile (same shard as user), posts (user shard), followers (fan-out). Challenges: celebrity users (hot shard), cross-shard queries (aggregate service), rebalancing (virtual shards). Monitor: shard size, query patterns. Consistent hashing ring for routing.'
		},
		{
			category: 'CAP Theorem',
			question: 'Explain CAP theorem and practical implications.',
			answer: 'CAP: Consistency, Availability, Partition tolerance - pick 2. Reality: partition tolerance required (networks fail). Choose: CP (consistency over availability, banking) or AP (availability over consistency, social media). Eventual consistency middle ground. Use: tunable consistency (Cassandra), compensation (Saga), conflict resolution (CRDTs).'
		},
		{
			category: 'Trade-offs',
			question: 'Explain architectural trade-offs between consistency and performance.',
			answer: 'Strong consistency: slower (coordination), lower throughput, simpler reasoning. Eventual consistency: faster, higher throughput, complexity (conflicts, stale reads). Techniques: read replicas (AP), CQRS (separate models), caching (stale data), optimistic locking (retry on conflict). Choose based on: business requirements, scale, tolerable staleness.'
		}
	],
	'Leadership & Best Practices (Senior-Level)': [
		{
			category: 'Code Review',
			question: 'What should senior engineers focus on during code reviews?',
			answer: 'Focus: architecture/design (not just syntax), security vulnerabilities, performance implications, maintainability, testability, error handling, logging. Provide: context for suggestions, alternatives, learning opportunities. Avoid: nitpicking, personal preferences. Automate: formatting, linting. Goal: knowledge sharing, consistent quality, catching critical issues.'
		},
		{
			category: 'Code Review',
			question: 'How do you handle disagreements in code reviews?',
			answer: 'Approach: assume good intent, explain reasoning (not just opinion), provide evidence (metrics, docs), discuss trade-offs, escalate if needed (tech lead). Acceptable: multiple valid solutions, style preferences (defer to team standards). Not acceptable: security issues, breaking changes, architectural violations. When in doubt, discuss synchronously.'
		},
		{
			category: 'Technical Debt',
			question: 'How do you quantify and prioritize technical debt?',
			answer: 'Quantify: time to add features (velocity impact), bug frequency (quality impact), incident correlation, developer satisfaction. Prioritize: ROI (impact vs effort), business criticality, learning opportunities. Track: debt register, assign ownership, include in sprint planning. Balance: new features vs debt. Rule: boy scout principle (leave better than found).'
		},
		{
			category: 'Technical Debt',
			question: 'When is it acceptable to take on technical debt?',
			answer: 'Acceptable: validated learning (MVP), time-sensitive opportunity, prototype, known and documented. Not acceptable: lack of knowledge, convenience, always "temporary". Requirements: explicit decision, documented, plan to address, not security/critical. Technical debt is not sloppiness - it\'s strategic trade-off.'
		},
		{
			category: 'System Evolution',
			question: 'How do you plan for system evolution and avoid premature optimization?',
			answer: 'Principles: YAGNI (you aren\'t gonna need it), solve current problems, measure before optimizing, make it work/right/fast. Plan: extensibility points (interfaces, plugins), observability (find bottlenecks), feedback loops. Avoid: speculative features, complex abstractions, performance optimization without data. Refactor when needed, not "might need".'
		},
		{
			category: 'System Evolution',
			question: 'How do you approach legacy system modernization?',
			answer: 'Strategy: Strangler Fig (incremental), anti-corruption layer, characterization tests (safety net), feature freeze old system, metrics-driven (prove improvement). Risks: big-bang rewrite (avoid), unknown dependencies, business disruption. Success factors: business alignment, incremental delivery, rollback plan, knowledge transfer. Budget: 20% modernization, 80% features.'
		},
		{
			category: 'Incident Management',
			question: 'What is your approach to incident response and post-mortems?',
			answer: 'Incident: triage (severity), communicate (stakeholders), mitigate (quick fix), resolve (root cause). Post-mortem: blameless culture, timeline, root cause (5 whys), action items (owner, deadline). Share: learnings, improvements. Avoid: blame, surface-level fixes. Track: MTTR (mean time to recovery), incident frequency. Practice: chaos engineering, game days.'
		},
		{
			category: 'Incident Management',
			question: 'How do you balance moving fast with preventing outages?',
			answer: 'Practices: automated testing, CI/CD, feature flags (kill switch), gradual rollout, observability, error budgets, SLOs, blameless culture. Accept: some failures inevitable, learn from them. Prevent: critical path redundancy, circuit breakers, graceful degradation. Culture: safe to fail, psychological safety, incident reviews. Balance: error budget (reliability vs velocity).'
		},
		{
			category: 'Mentorship',
			question: 'How do you effectively mentor junior engineers?',
			answer: 'Approach: pair programming, code reviews (teaching moments), documentation, encourage questions, provide context (why not just what), assign challenging but achievable tasks. Techniques: Socratic method, explain trade-offs, share experiences. Avoid: doing work for them, perfectionism, assuming knowledge. Track: progress, feedback loops, career goals. Time investment: pays dividends.'
		},
		{
			category: 'Mentorship',
			question: 'How do you scale yourself as a senior engineer?',
			answer: 'Scale through: documentation (knowledge sharing), automation (reduce toil), mentoring (multiply impact), architecture (enable others), code reviews (improve quality), pair programming. Delegate: not just tasks, decision-making. Empower: trust, context, autonomy. Avoid: bottleneck, hero culture, hoarding knowledge. Measure: team growth, not individual output.'
		},
		{
			category: 'Architecture Decisions',
			question: 'How do you document and communicate architecture decisions?',
			answer: 'Use ADRs (Architecture Decision Records): context, decision, consequences, status (accepted/superseded). Include: alternatives considered, trade-offs, rationale. Store: version control, accessible. Present: diagrams (C4 model), tech talks, documentation. Review: regularly, revise when needed. Avoid: ivory tower, decision without context. Goal: transparency, knowledge sharing, future context.'
		},
		{
			category: 'Architecture Decisions',
			question: 'How do you evaluate new technologies for adoption?',
			answer: 'Evaluate: production-ready (maturity), community/support, learning curve, licensing, integration, performance, security, longevity. Process: spike/POC, team feedback, architecture review, pilot project. Avoid: resume-driven development, shiny object syndrome, major rewrites. Consider: maintenance burden, team skills, existing ecosystem. Default: boring technology (proven).'
		},
		{
			category: 'Cross-Functional',
			question: 'How do you collaborate with product and business teams?',
			answer: 'Communication: translate technical to business value, explain trade-offs, provide options (not just no), data-driven arguments. Understand: business goals, constraints, priorities. Contribute: feasibility, alternatives, technical opportunities. Avoid: jargon, gate-keeping, "not possible". Build: trust, credibility, partnership. Learn: domain knowledge, customer needs.'
		},
		{
			category: 'Cross-Functional',
			question: 'How do you handle pressure to cut corners for deadlines?',
			answer: 'Approach: explain risks (outages, security, future cost), provide options (MVP scope, phased delivery), negotiate trade-offs (what can wait), document decisions. Push back: when risks unacceptable (security, data loss). Compromise: acceptable debt with plan. Track: promised fixes, resurface later. Build: trust through delivering, credibility. Sometimes: need to say no firmly.'
		},
		{
			category: 'Team Dynamics',
			question: 'How do you foster a culture of engineering excellence?',
			answer: 'Culture: code reviews (learning), testing (quality), refactoring (maintainability), documentation (knowledge), automation (efficiency). Practices: tech talks, lunch & learns, innovation time, blameless post-mortems. Recognition: acknowledge good work, celebrate wins, learn from failures. Lead: by example, set standards, continuous improvement. Measure: code quality, cycle time, satisfaction.'
		},
		{
			category: 'Team Dynamics',
			question: 'How do you handle technical disagreements within the team?',
			answer: 'Process: listen (understand perspectives), evidence-based (data, benchmarks), discuss trade-offs, consider context, seek consensus. Escalation: architect, tech lead, spike/POC. Decision: document rationale, time-box discussion, revisit if new information. Avoid: ego, authority override without reasoning, endless debate. Goal: best solution, team alignment, learning.'
		},
		{
			category: 'Standards',
			question: 'How do you establish and maintain coding standards?',
			answer: 'Establish: team consensus, documented (wiki/repo), examples, automated linting/formatting. Cover: style, architecture patterns, error handling, logging, testing. Enforce: CI/CD checks, code reviews, pair programming. Evolve: regular review, retrospectives, industry best practices. Avoid: overly rigid, personal preferences. Goal: consistency, quality, onboarding.'
		},
		{
			category: 'Standards',
			question: 'What makes code "production-ready"?',
			answer: 'Criteria: functionality (requirements met), testing (unit, integration, E2E), error handling (graceful degradation), logging (actionable), monitoring (alerts, dashboards), security (auth, validation, secrets), performance (meets SLOs), documentation (README, runbooks), reviewed (code review), deployable (CI/CD), observable (metrics, traces). Not: 100% coverage, perfect code. Balance: done vs over-engineered.'
		},
		{
			category: 'Career Growth',
			question: 'What distinguishes senior engineers from mid-level engineers?',
			answer: 'Senior: system thinking (not just code), anticipate problems, influence without authority, mentor effectively, communicate technical to non-technical, make pragmatic trade-offs, reduce complexity, ship impact (not just tasks), handle ambiguity, improve team velocity. Mid-level: executes well, needs some guidance, growing system view. Technical skill is baseline, impact multiplier is difference.'
		},
		{
			category: 'Career Growth',
			question: 'How do you stay current with technology as a senior engineer?',
			answer: 'Learn: blogs (weekly), conferences (yearly), open source (contribute), side projects, new features (C#/.NET releases), podcasts, books, courses. Filter: signal vs noise, focus on fundamentals (transferable), depth over breadth. Share: tech talks, blog posts, mentoring. Time: dedicated learning time, 20% rule. Balance: depth in core, breadth in adjacent. Avoid: chasing trends without purpose.'
		}
	]
}

// Backward compatibility
export const questions = questionSets['General Interview Prep']
