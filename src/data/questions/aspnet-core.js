export default [
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
