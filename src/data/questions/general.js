export default [
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
]
