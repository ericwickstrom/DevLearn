export default [
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
]
