export default [
	{
		category: 'Principles',
		question: 'What is the DRY principle?',
		answer: 'DRY (Don\'t Repeat Yourself): every piece of knowledge should have a single, unambiguous representation. Avoid code duplication. Benefits: easier maintenance, single source of truth, reduce bugs. Apply through: functions, classes, modules. Balance: don\'t over-abstract for trivial duplication.'
	},
	{
		category: 'Principles',
		question: 'What is KISS?',
		answer: 'KISS (Keep It Simple, Stupid): simplicity should be a key goal, avoid unnecessary complexity. Write straightforward code. Benefits: easier to understand, maintain, debug, test. Avoid: over-engineering, premature optimization, complex abstractions. Simple ≠ simplistic.'
	},
	{
		category: 'Principles',
		question: 'What is YAGNI?',
		answer: 'YAGNI (You Aren\'t Gonna Need It): don\'t add functionality until needed. Avoid speculative features. Benefits: less code, faster delivery, avoid wasted effort. Balance: consider obvious extensibility points. Part of Agile principles.'
	},
	{
		category: 'Principles',
		question: 'Explain Separation of Concerns.',
		answer: 'Separation of Concerns: divide system into distinct sections, each addressing a separate concern. Example: MVC separates UI, logic, data. Benefits: modularity, maintainability, parallel development, reusability. Related to: Single Responsibility Principle, loose coupling.'
	},
	{
		category: 'SOLID',
		question: 'Explain the Single Responsibility Principle.',
		answer: 'SRP: A class should have only one reason to change. Each class does one thing well. Benefits: easier to understand, test, maintain. Example: separate UserRepository (data access) from UserValidator (business rules). Avoid: God objects, classes doing too much.'
	},
	{
		category: 'SOLID',
		question: 'Explain the Open/Closed Principle.',
		answer: 'OCP: Software entities should be open for extension, closed for modification. Add new functionality without changing existing code. Achieve through: inheritance, interfaces, composition, plugins. Benefits: stability, avoid breaking changes. Example: Strategy pattern, Plugin architecture.'
	},
	{
		category: 'SOLID',
		question: 'Explain the Liskov Substitution Principle.',
		answer: 'LSP: Subtypes must be substitutable for their base types without affecting correctness. Derived classes should extend, not break, base class behavior. Example: Square shouldn\'t inherit Rectangle if it violates assumptions. Benefits: polymorphism, predictable behavior, inheritance correctness.'
	},
	{
		category: 'SOLID',
		question: 'Explain the Interface Segregation Principle.',
		answer: 'ISP: Clients shouldn\'t depend on interfaces they don\'t use. Many specific interfaces better than one general interface. Avoid: fat interfaces forcing empty implementations. Benefits: loose coupling, focused contracts, easier testing. Example: IReadable, IWritable vs IReadWrite.'
	},
	{
		category: 'SOLID',
		question: 'Explain the Dependency Inversion Principle.',
		answer: 'DIP: High-level modules shouldn\'t depend on low-level modules; both should depend on abstractions. Abstractions shouldn\'t depend on details. Use: interfaces, dependency injection. Benefits: loose coupling, testability, flexibility. Example: Controller depends on IRepository, not concrete class.'
	},
	{
		category: 'OOP Fundamentals',
		question: 'What are the four pillars of Object-Oriented Programming?',
		answer: 'Encapsulation: bundle data and methods, hide internals. Abstraction: hide complexity, show only essential features. Inheritance: reuse code through parent-child relationships. Polymorphism: objects take multiple forms, same interface different implementations. Together enable: modularity, reusability, maintainability.'
	},
	{
		category: 'OOP Fundamentals',
		question: 'What is Encapsulation and why is it important?',
		answer: 'Encapsulation: bundling data with methods, controlling access via public/private. Hide implementation details. Benefits: data protection, change internal implementation without affecting clients, validation control. Example: private fields with public getters/setters. Enables information hiding.'
	},
	{
		category: 'OOP Fundamentals',
		question: 'What is Polymorphism?',
		answer: 'Polymorphism: objects of different types respond to same interface. Types: compile-time (overloading), runtime (overriding, interfaces). Benefits: flexibility, extensibility, code reuse. Example: Shape.Draw() works for Circle, Rectangle, Triangle. Enables Open/Closed principle.'
	},
	{
		category: 'Testing',
		question: 'What is Test-Driven Development (TDD)?',
		answer: 'TDD: write test first (red), write code to pass (green), refactor (clean). Benefits: better design, test coverage, confidence, documentation. Cycle: Red-Green-Refactor. Three laws: 1) write failing test, 2) write minimum code to pass, 3) refactor. Forces testable design.'
	},
	{
		category: 'Testing',
		question: 'What is Behavior-Driven Development (BDD)?',
		answer: 'BDD: extension of TDD focusing on behavior from user perspective. Use Given-When-Then format. Tools: Cucumber, SpecFlow. Benefits: shared understanding, living documentation, focuses on business value. Example: "Given user logged in, When clicks logout, Then redirected to login". Bridges technical and business.'
	},
	{
		category: 'Testing',
		question: 'What is the difference between unit, integration, and E2E tests?',
		answer: 'Unit: test single component in isolation, fast, no dependencies. Integration: test components working together, slower, some dependencies. E2E: test entire system as user would, slowest, all dependencies. Test pyramid: many unit, some integration, few E2E. Each serves different purpose.'
	},
	{
		category: 'Testing',
		question: 'What makes a good unit test?',
		answer: 'FIRST principles: Fast (milliseconds), Independent (no order dependency), Repeatable (same result every time), Self-validating (pass/fail, no manual checks), Timely (written with code). Also: test one thing, clear arrange-act-assert, descriptive names, no logic in tests.'
	},
	{
		category: 'Architecture',
		question: 'What is Service-Oriented Architecture (SOA)?',
		answer: 'SOA: architecture pattern where services provide business functionality via well-defined interfaces. Services are: loosely coupled, reusable, discoverable, composable. Communication: often SOAP, XML. Benefits: reusability, interoperability, scalability. Modern evolution: microservices (smaller, independent, REST/HTTP).'
	},
	{
		category: 'Architecture',
		question: 'What is Microservices Architecture?',
		answer: 'Microservices: architectural style where app is collection of small, independent services. Each service: owns data, deployable independently, communicates via APIs. Benefits: scalability, technology diversity, fault isolation. Challenges: complexity, distributed systems, data consistency. Evolution of SOA.'
	},
	{
		category: 'Architecture',
		question: 'What is Monolithic Architecture?',
		answer: 'Monolithic: traditional unified architecture where all components in single codebase/deployment. Pros: simpler development/deployment/debugging, better performance (no network calls). Cons: scaling challenges, deployment risk, technology lock-in. Good for: small teams, simple apps, early stages. Can evolve to microservices later.'
	},
	{
		category: 'Architecture',
		question: 'What is the difference between coupling and cohesion?',
		answer: 'Coupling: degree of interdependence between modules. Low coupling = good (modules independent). Cohesion: degree to which elements within module belong together. High cohesion = good (focused purpose). Goal: low coupling, high cohesion. Benefits: maintainability, reusability, testability.'
	},
	{
		category: 'Design Patterns',
		question: 'What are the three types of design patterns?',
		answer: 'Creational: object creation (Singleton, Factory, Builder). Structural: object composition (Adapter, Decorator, Facade). Behavioral: object interaction (Strategy, Observer, Command). Gang of Four documented 23 patterns. Purpose: proven solutions to common problems, shared vocabulary.'
	},
	{
		category: 'Design Patterns',
		question: 'What is the Singleton pattern and when should you use it?',
		answer: 'Singleton: ensures class has only one instance, provides global access point. Use for: configuration, logging, connection pools, caches. Implementation: private constructor, static instance. Challenges: global state, testing difficulties, threading issues. Modern alternative: dependency injection with Singleton lifetime.'
	},
	{
		category: 'Design Patterns',
		question: 'What is the Factory pattern?',
		answer: 'Factory: creates objects without specifying exact class. Types: Factory Method (subclass decides), Abstract Factory (families of objects). Benefits: decouples creation from usage, Open/Closed principle, centralized creation logic. Use when: creation is complex, need flexibility, multiple implementations of interface.'
	},
	{
		category: 'Design Patterns',
		question: 'What is the Observer pattern?',
		answer: 'Observer: one-to-many dependency where observers are notified when subject changes. Subject maintains list of observers, notifies on state change. Benefits: loose coupling, dynamic subscriptions. Use for: event systems, MVC (View observes Model), pub-sub. Example: .NET events, reactive programming.'
	},
	{
		category: 'Code Quality',
		question: 'What is Technical Debt?',
		answer: 'Technical Debt: implied cost of future rework caused by choosing easy solution now instead of better approach. Types: deliberate (strategic), accidental (lack of knowledge). Like financial debt: can be strategic but accrues "interest" (maintenance cost). Manage: track, prioritize, allocate time to address.'
	},
	{
		category: 'Code Quality',
		question: 'What is Code Smell?',
		answer: 'Code Smell: surface indication of deeper problem in code. Examples: long methods, large classes, duplicate code, too many parameters, feature envy. Not bugs but design issues. Suggests refactoring needed. Common smells: God object, shotgun surgery, primitive obsession. Refactor to clean architecture.'
	},
	{
		category: 'Code Quality',
		question: 'What is Refactoring?',
		answer: 'Refactoring: restructuring code without changing external behavior. Improve: readability, maintainability, performance. When: code smells, before adding features, during code review. Techniques: extract method, rename, move, inline. Safety: tests ensure behavior unchanged. Boy Scout Rule: leave code better than you found it.'
	},
	{
		category: 'Code Quality',
		question: 'What is Clean Code?',
		answer: 'Clean Code: code that is easy to read, understand, and maintain. Characteristics: meaningful names, small functions, single responsibility, minimal comments (code self-documents), proper formatting, no duplication. Benefits: fewer bugs, faster development, easier onboarding. Book by Robert C. Martin. Goal: code for humans, not machines.'
	},
	{
		category: 'Version Control',
		question: 'What is the difference between Git merge and rebase?',
		answer: 'Merge: combines branches, creates merge commit, preserves history. Rebase: moves commits to new base, linear history, rewrites history. Merge: safe, shows branch context. Rebase: cleaner history, dangerous for shared branches. Golden rule: never rebase public branches. Use: rebase locally, merge for integration.'
	},
	{
		category: 'Agile',
		question: 'What are the key principles of Agile development?',
		answer: 'Agile values: individuals over processes, working software over documentation, customer collaboration over contracts, responding to change over following plan. Principles: iterative delivery, continuous feedback, embrace change, sustainable pace, technical excellence. Frameworks: Scrum, Kanban, XP. Goal: deliver value quickly, adapt to change.'
	}
]
