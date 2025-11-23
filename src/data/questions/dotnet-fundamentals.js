export default [
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
]
