export default [
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
]
