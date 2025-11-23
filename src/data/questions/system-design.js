export default [
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
