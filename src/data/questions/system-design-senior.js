export default [
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
]
