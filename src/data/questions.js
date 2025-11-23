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
	]
}

// Backward compatibility
export const questions = questionSets['General Interview Prep']
