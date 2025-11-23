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
	]
}

// Backward compatibility
export const questions = questionSets['General Interview Prep']
