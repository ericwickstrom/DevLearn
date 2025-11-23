export default [
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
]
