export default [
	{
		category: 'React Fundamentals',
		question: 'What is React and what are its core principles?',
		answer: 'React is a JavaScript library for building user interfaces. Core principles: Component-based (UI as reusable components), Declarative (describe what UI should look like), Unidirectional data flow (props down, events up), Virtual DOM (efficient updates). Benefits: reusability, maintainability, performance, large ecosystem.'
	},
	{
		category: 'React Fundamentals',
		question: 'What is JSX?',
		answer: 'JSX: JavaScript XML, syntax extension for JavaScript. Allows writing HTML-like code in JavaScript. Not required but idiomatic. Transpiled to React.createElement() calls. Rules: single root element (or Fragment), className instead of class, camelCase attributes, expressions in {}. Benefits: declarative, type-safe, familiar HTML syntax.'
	},
	{
		category: 'React Fundamentals',
		question: 'What is the Virtual DOM and how does it work?',
		answer: 'Virtual DOM: lightweight JavaScript representation of actual DOM. React creates virtual tree, compares with previous (diffing), calculates minimal changes (reconciliation), updates real DOM efficiently. Benefits: performance (batch updates), cross-platform (React Native), declarative API. Process: render → diff → patch → commit.'
	},
	{
		category: 'React Fundamentals',
		question: 'What is the difference between props and state?',
		answer: 'Props: passed from parent, immutable, for component configuration. State: internal to component, mutable via setState/useState, triggers re-render when changed. Props flow down (one-way), state is local. Props make components reusable, state makes them dynamic. Use props for external data, state for internal component data.'
	},
	{
		category: 'Hooks',
		question: 'What are React Hooks and why were they introduced?',
		answer: 'Hooks: functions that let you use state and lifecycle in function components. Introduced React 16.8 (2019). Advantages over classes: simpler code, better code reuse (custom hooks), no this binding, easier testing. Common hooks: useState, useEffect, useContext, useRef, useMemo, useCallback. Rules: only at top level, only in function components/hooks.'
	},
	{
		category: 'Hooks',
		question: 'Explain useState hook.',
		answer: 'useState: adds state to function components. Returns [value, setter]. Syntax: const [count, setCount] = useState(0). Setter triggers re-render. Can pass function to setter for updates based on previous state. Initial value computed once. Multiple useState calls allowed. Preserves state between renders. Replaces this.state in class components.'
	},
	{
		category: 'Hooks',
		question: 'Explain useEffect hook.',
		answer: 'useEffect: performs side effects in function components. Runs after render (by default after every render). Syntax: useEffect(() => { /* effect */ }, [deps]). Dependencies array controls when to run. Empty array = run once. Return cleanup function. Common uses: fetching data, subscriptions, timers, DOM updates. Replaces componentDidMount, componentDidUpdate, componentWillUnmount.'
	},
	{
		category: 'Hooks',
		question: 'What is useCallback and when should you use it?',
		answer: 'useCallback: memoizes function between renders. Returns memoized callback that only changes if dependencies change. Use when: passing callbacks to optimized child components (React.memo), dependencies in useEffect, expensive function creation. Syntax: useCallback(() => {}, [deps]). Prevents unnecessary child re-renders. Don\'t overuse: premature optimization.'
	},
	{
		category: 'Hooks',
		question: 'What is useMemo and how is it different from useCallback?',
		answer: 'useMemo: memoizes computed value between renders. Returns memoized value. useCallback memoizes function, useMemo memoizes value. Use for: expensive calculations, referential equality. Syntax: useMemo(() => computeValue(), [deps]). Both for optimization. useMemo(() => fn) equals useCallback(fn). Don\'t overuse: measure first, optimize when needed.'
	},
	{
		category: 'Hooks',
		question: 'What is useRef and what are its use cases?',
		answer: 'useRef: creates mutable ref object, persists across renders. .current property holds value. Doesn\'t trigger re-render when changed. Use cases: accessing DOM elements, storing mutable values, previous values, timers/intervals. Syntax: const ref = useRef(initialValue). Common: ref={inputRef} for DOM access. Alternative to instance variables in classes.'
	},
	{
		category: 'Hooks',
		question: 'What is useContext and how does it work?',
		answer: 'useContext: accesses React Context without Consumer. Syntax: const value = useContext(MyContext). Must have Provider above in tree. Triggers re-render when context value changes. Cleaner than Context.Consumer. Use for: theme, auth, language, global state. Alternative to prop drilling. Combine with useReducer for state management.'
	},
	{
		category: 'Hooks',
		question: 'What is useReducer and when would you use it over useState?',
		answer: 'useReducer: state management via reducer pattern. Syntax: const [state, dispatch] = useReducer(reducer, initialState). Reducer: (state, action) => newState. Use when: complex state logic, multiple sub-values, next state depends on previous, shared logic. Like Redux but local. Better than useState for: complex state transitions, predictable updates, easier testing.'
	},
	{
		category: 'React 19 Features',
		question: 'What are React Server Components?',
		answer: 'Server Components: components that render only on server, send minimal JavaScript to client. Benefits: zero bundle size for server logic, direct backend access, better performance, streaming. File convention: .server.js. Client Components: .client.js or use "use client". Data fetching at component level. Part of React 18+, production-ready in frameworks like Next.js.'
	},
	{
		category: 'React 19 Features',
		question: 'What is the use hook in React 19?',
		answer: 'use hook: reads resource value during render (promises, context). Unwraps promises, Suspense integration. Syntax: const data = use(promise). Can be used conditionally (unlike other hooks). Simplifies data fetching, replaces complex useEffect patterns. Works with Server Components. Streaming SSR support. Part of React 19 experimental features.'
	},
	{
		category: 'React 19 Features',
		question: 'What are React Actions and useOptimistic?',
		answer: 'Actions: async functions for mutations with pending states. useOptimistic: optimistic UI updates before async completion. Syntax: const [optimistic, addOptimistic] = useOptimistic(state). Show instant feedback, revert on error. Use with: form submissions, mutations, async actions. Improves UX with immediate feedback. Part of React 19 features.'
	},
	{
		category: 'React 19 Features',
		question: 'What is useFormStatus and how does it work?',
		answer: 'useFormStatus: hook for form submission state in React 19. Returns {pending, data, method, action}. Must be used inside form component. Enables: loading states, disable buttons during submit, better UX. Works with Server Actions. Syntax: const {pending} = useFormStatus(). Replaces manual loading state management.'
	},
	{
		category: 'Performance',
		question: 'What is React.memo and when should you use it?',
		answer: 'React.memo: HOC that memoizes component, prevents re-render if props unchanged. Shallow comparison by default. Custom comparison: React.memo(Component, areEqual). Use when: expensive renders, same props = same output, component re-renders often. Don\'t overuse: adds overhead, measure first. Works with useCallback/useMemo for full optimization.'
	},
	{
		category: 'Performance',
		question: 'What are the rules of hooks?',
		answer: 'Rules: 1) Only call at top level (not in loops/conditions/nested functions). 2) Only call from React function components or custom hooks. Why: React relies on call order to preserve state. Enforced by: eslint-plugin-react-hooks. Violation causes bugs. Exception: use hook (React 19) can be conditional. Use linter to catch violations.'
	},
	{
		category: 'Performance',
		question: 'What is React Suspense and how does it work?',
		answer: 'Suspense: declarative loading states for async components. Wraps components, shows fallback during load. Works with: lazy loading, data fetching (with libraries), Server Components. Syntax: <Suspense fallback={<Loading />}>. Benefits: better UX, streaming SSR, parallel loading. React 18: concurrent features, useTransition. Replaces loading state boilerplate.'
	},
	{
		category: 'Performance',
		question: 'What is code splitting and lazy loading in React?',
		answer: 'Code splitting: split bundle into chunks, load on demand. React.lazy: lazy load components. Syntax: const Component = lazy(() => import(\'./Component\')). Use with Suspense. Benefits: smaller initial bundle, faster load, better performance. Route-based splitting common. Dynamic imports (import()). Build tools: Webpack, Vite handle splitting.'
	},
	{
		category: 'State Management',
		question: 'What is prop drilling and how can you avoid it?',
		answer: 'Prop drilling: passing props through many component levels to reach deep child. Problems: verbose, hard to maintain, couples components. Solutions: Context API (theme, auth), state management (Redux, Zustand), composition (children prop), custom hooks. Choose based on: scope (global vs local), complexity, performance needs.'
	},
	{
		category: 'State Management',
		question: 'When should you use Context vs external state management?',
		answer: 'Context: good for: low-frequency updates (theme, auth, language), small-medium apps, simple state. External (Redux, Zustand): good for: high-frequency updates, complex state logic, time-travel debugging, middleware. Context limitations: all consumers re-render, no middleware, basic API. Start simple (Context), migrate if needed. Modern: Zustand, Jotai lighter than Redux.'
	},
	{
		category: 'State Management',
		question: 'What is Redux and when should you use it?',
		answer: 'Redux: predictable state container, single store, unidirectional flow. Concepts: actions (what), reducers (how), store (state tree). Principles: single source of truth, state read-only, pure reducers. Use when: complex state logic, shared state, time-travel debugging. Modern: Redux Toolkit (RTK) simplifies. Alternatives: Zustand, Jotai, Recoil lighter. May not need Redux (Context often enough).'
	},
	{
		category: 'Advanced Patterns',
		question: 'What are Higher-Order Components (HOCs)?',
		answer: 'HOC: function that takes component, returns enhanced component. Pattern for reusing logic. Examples: withAuth, withTheme. Syntax: const Enhanced = withHOC(Component). Benefits: code reuse, props manipulation, abstraction. Drawbacks: wrapper hell, ref forwarding needed, props naming conflicts. Modern alternative: hooks (cleaner, more composable). Still useful for: cross-cutting concerns, legacy code.'
	},
	{
		category: 'Advanced Patterns',
		question: 'What are Render Props?',
		answer: 'Render Props: technique for sharing code using prop whose value is function. Component takes function that returns React element. Example: <DataProvider render={data => <Component data={data} />} />. Benefits: flexible, explicit, composition. Drawbacks: callback hell, verbose. Use cases: shared behavior, controlled components. Modern alternative: hooks (cleaner). Children as function variant common.'
	},
	{
		category: 'Advanced Patterns',
		question: 'What is the Compound Component pattern?',
		answer: 'Compound Components: components that work together, share implicit state. Example: <Select><Option /><Option /></Select>. Benefits: flexible API, separation of concerns, implicit state sharing. Implementation: Context API, React.Children. Use cases: forms, menus, tabs. Examples: HTML select/option, React libraries (Radix, Headless UI). Creates intuitive APIs.'
	},
	{
		category: 'Advanced Patterns',
		question: 'What are Controlled vs Uncontrolled components?',
		answer: 'Controlled: React state is source of truth, value from props, onChange updates state. Full control, validation easy. Uncontrolled: DOM is source of truth, use ref to get value. Less code, integrates with non-React code. Controlled: use for forms with validation, dynamic updates. Uncontrolled: simple forms, file inputs (always uncontrolled), quick prototypes. Prefer controlled for consistency.'
	},
	{
		category: 'Forms',
		question: 'How do you handle forms in React?',
		answer: 'Approaches: 1) Controlled components (state + onChange, full control, verbose). 2) Libraries (React Hook Form, Formik, simpler, validation, performance). 3) Uncontrolled (refs, less React-way). Best practice: controlled for simple forms, libraries for complex. React Hook Form: performant (uncontrolled internally), good DX. Handle: validation, submission, errors, async validation.'
	},
	{
		category: 'Forms',
		question: 'What is React Hook Form and why use it?',
		answer: 'React Hook Form: performant form library with minimal re-renders. Uses uncontrolled components internally, refs for values. Features: validation (built-in + Yup/Zod), less code, better performance, DevTools. Syntax: const {register, handleSubmit} = useForm(). Benefits over controlled: fewer re-renders, less boilerplate. Integrates with: UI libraries, validation schemas. Best for: complex forms.'
	},
	{
		category: 'Routing',
		question: 'What is React Router and how does it work?',
		answer: 'React Router: declarative routing for React. Components: BrowserRouter, Routes, Route, Link. Latest (v6): simplified API, nested routes, relative links. Features: dynamic routes, params, query strings, redirects, lazy loading. Syntax: <Route path="/about" element={<About />} />. Use: single-page apps (SPA), client-side routing. Alternative: TanStack Router (type-safe).'
	},
	{
		category: 'Routing',
		question: 'What are nested routes in React Router?',
		answer: 'Nested Routes: routes within routes, mirrors component hierarchy. Parent route has <Outlet /> for child rendering. Benefits: shared layouts, URL hierarchy, code organization. Example: /dashboard (layout) → /dashboard/profile. Syntax: <Route path="dashboard"> <Route path="profile" />. Clean URLs, composable layouts. React Router v6 feature.'
	},
	{
		category: 'TypeScript',
		question: 'How do you type React components with TypeScript?',
		answer: 'Function component: React.FC<Props> or (props: Props) => JSX.Element. Props interface: interface Props { name: string }. Children: {children: React.ReactNode}. Events: React.ChangeEvent<HTMLInputElement>. Ref: React.RefObject<HTMLDivElement>. State: useState<Type>(). Modern: prefer function signature over React.FC. Benefits: type safety, autocomplete, refactoring. Generic components: <T,>.'
	},
	{
		category: 'TypeScript',
		question: 'How do you type hooks in TypeScript?',
		answer: 'useState: const [count, setCount] = useState<number>(0). Inferred if initial value provided. useRef: const ref = useRef<HTMLDivElement>(null). useContext: const value = useContext<ContextType>(Context). useReducer: useReducer<Reducer<State, Action>>. Custom hooks: function useCustom<T>(): [T, Dispatch<T>]. Generic hooks powerful. Type guard for discriminated unions.'
	},
	{
		category: 'Testing',
		question: 'How do you test React components?',
		answer: 'Tools: React Testing Library (recommended), Jest (test runner), Vitest (faster). RTL philosophy: test user behavior, not implementation. Methods: render, screen, fireEvent, waitFor. Example: render(<Component />); expect(screen.getByText(\'text\')).toBeInTheDocument(). Test: user interactions, accessibility, integration. Avoid: testing implementation details, snapshot overuse. Mock: API calls, modules.'
	},
	{
		category: 'Testing',
		question: 'What is React Testing Library and why use it?',
		answer: 'React Testing Library: testing library encouraging good practices. Philosophy: test like users interact. Queries: getByRole, getByText (accessible). Benefits: maintainable tests, confidence, accessibility focus. Avoid: getByTestId (implementation detail). Fire events: userEvent (realistic), fireEvent (low-level). waitFor for async. Better than Enzyme (implementation-focused). Works with Jest/Vitest.'
	},
	{
		category: 'Best Practices',
		question: 'What are React best practices for component structure?',
		answer: 'Structure: single responsibility, small components, extract reusable logic (hooks), composition over inheritance. File organization: feature folders or atomic design. Naming: PascalCase components, camelCase functions/variables. Props: destructure, default values, TypeScript. Keep components pure, avoid side effects in render. Separate: presentation (UI) from container (logic) components. Use fragments, avoid div soup.'
	},
	{
		category: 'Best Practices',
		question: 'What are React key principles for performance?',
		answer: 'Performance: 1) Measure first (React DevTools Profiler). 2) Optimize rendering: React.memo, useMemo, useCallback. 3) Code splitting: lazy, Suspense. 4) Virtualization: react-window for long lists. 5) Avoid: inline functions/objects in render, large component trees. 6) Use: production build, CDN. 7) Keys: stable, unique IDs. Don\'t premature optimize. Profile, identify bottlenecks, fix.'
	},
	{
		category: 'Best Practices',
		question: 'What are common React anti-patterns to avoid?',
		answer: 'Anti-patterns: 1) Index as key (causes bugs). 2) Mutating state directly. 3) props in initial state (stale). 4) useEffect dependencies (missing deps). 5) Prop drilling (use Context). 6) Inline styles everywhere (use CSS). 7) Too many props (composition). 8) God components (split). 9) Premature optimization. 10) Ignoring warnings. Use linter, follow rules.'
	},
	{
		category: 'Ecosystem',
		question: 'What are popular React UI libraries?',
		answer: 'Component libraries: Material-UI (comprehensive), Ant Design (enterprise), Chakra UI (accessible), Shadcn/ui (customizable), Radix UI (headless), Mantine (modern). Styling: Tailwind CSS, styled-components, CSS Modules, Emotion. Choose based on: design system needs, customization, bundle size, accessibility. Headless UI: full control, bring your own styles. Pre-styled: faster development.'
	},
	{
		category: 'Ecosystem',
		question: 'What are popular React data fetching libraries?',
		answer: 'TanStack Query (React Query): declarative data fetching, caching, background updates. SWR: Vercel library, stale-while-revalidate strategy. Apollo Client: GraphQL. RTK Query: Redux integration. Features: caching, deduplication, refetching, optimistic updates, pagination. Benefits: less boilerplate, better UX, automatic revalidation. Choose: Query/SWR for REST, Apollo for GraphQL. Server Components: built-in fetching.'
	},
	{
		category: 'Concurrency',
		question: 'What is Concurrent React and useTransition?',
		answer: 'Concurrent React: React 18 feature, interruptible rendering. useTransition: mark state updates as non-urgent. Syntax: const [isPending, startTransition] = useTransition(). Keeps UI responsive during expensive updates. Use: search, filtering, navigation. Benefits: smooth UX, no blocking. useDeferredValue: defer expensive renders. Automatic batching. Suspense integration. Opt-in feature.'
	},
	{
		category: 'Concurrency',
		question: 'What is automatic batching in React 18?',
		answer: 'Automatic Batching: React 18 groups multiple state updates into single re-render. Previous: only in event handlers. Now: everywhere (timeouts, promises, native events). Benefits: fewer re-renders, better performance. Opt-out: flushSync (rare). No code changes needed. Improves performance automatically. Part of concurrent features. Works with all React 18 updates.'
	},
	{
		category: 'SSR & Frameworks',
		question: 'What is Server-Side Rendering (SSR) in React?',
		answer: 'SSR: render React on server, send HTML to client, hydrate to interactive. Benefits: faster FCP, SEO, better perceived performance. Drawbacks: complexity, server cost, TTFB. Methods: renderToString (legacy), renderToPipeableStream (streaming). Frameworks: Next.js, Remix. Streaming SSR: send HTML chunks progressively. Use for: content sites, SEO needs. SPA: client-only rendering.'
	},
	{
		category: 'SSR & Frameworks',
		question: 'What is Next.js and when should you use it?',
		answer: 'Next.js: React framework by Vercel. Features: SSR, SSG, ISR, file-based routing, API routes, Image optimization, middleware. App Router (latest): Server Components, streaming, layouts. Use when: need SEO, static sites, hybrid rendering, full-stack. Benefits: performance, DX, deployment. Alternatives: Remix (web standards), Gatsby (static). Best for: production apps, content sites.'
	}
]
