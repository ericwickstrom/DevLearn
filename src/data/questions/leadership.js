export default [
	{
		category: 'Code Review',
		question: 'What should senior engineers focus on during code reviews?',
		answer: 'Focus: architecture/design (not just syntax), security vulnerabilities, performance implications, maintainability, testability, error handling, logging. Provide: context for suggestions, alternatives, learning opportunities. Avoid: nitpicking, personal preferences. Automate: formatting, linting. Goal: knowledge sharing, consistent quality, catching critical issues.'
	},
	{
		category: 'Code Review',
		question: 'How do you handle disagreements in code reviews?',
		answer: 'Approach: assume good intent, explain reasoning (not just opinion), provide evidence (metrics, docs), discuss trade-offs, escalate if needed (tech lead). Acceptable: multiple valid solutions, style preferences (defer to team standards). Not acceptable: security issues, breaking changes, architectural violations. When in doubt, discuss synchronously.'
	},
	{
		category: 'Technical Debt',
		question: 'How do you quantify and prioritize technical debt?',
		answer: 'Quantify: time to add features (velocity impact), bug frequency (quality impact), incident correlation, developer satisfaction. Prioritize: ROI (impact vs effort), business criticality, learning opportunities. Track: debt register, assign ownership, include in sprint planning. Balance: new features vs debt. Rule: boy scout principle (leave better than found).'
	},
	{
		category: 'Technical Debt',
		question: 'When is it acceptable to take on technical debt?',
		answer: 'Acceptable: validated learning (MVP), time-sensitive opportunity, prototype, known and documented. Not acceptable: lack of knowledge, convenience, always "temporary". Requirements: explicit decision, documented, plan to address, not security/critical. Technical debt is not sloppiness - it\'s strategic trade-off.'
	},
	{
		category: 'System Evolution',
		question: 'How do you plan for system evolution and avoid premature optimization?',
		answer: 'Principles: YAGNI (you aren\'t gonna need it), solve current problems, measure before optimizing, make it work/right/fast. Plan: extensibility points (interfaces, plugins), observability (find bottlenecks), feedback loops. Avoid: speculative features, complex abstractions, performance optimization without data. Refactor when needed, not "might need".'
	},
	{
		category: 'System Evolution',
		question: 'How do you approach legacy system modernization?',
		answer: 'Strategy: Strangler Fig (incremental), anti-corruption layer, characterization tests (safety net), feature freeze old system, metrics-driven (prove improvement). Risks: big-bang rewrite (avoid), unknown dependencies, business disruption. Success factors: business alignment, incremental delivery, rollback plan, knowledge transfer. Budget: 20% modernization, 80% features.'
	},
	{
		category: 'Incident Management',
		question: 'What is your approach to incident response and post-mortems?',
		answer: 'Incident: triage (severity), communicate (stakeholders), mitigate (quick fix), resolve (root cause). Post-mortem: blameless culture, timeline, root cause (5 whys), action items (owner, deadline). Share: learnings, improvements. Avoid: blame, surface-level fixes. Track: MTTR (mean time to recovery), incident frequency. Practice: chaos engineering, game days.'
	},
	{
		category: 'Incident Management',
		question: 'How do you balance moving fast with preventing outages?',
		answer: 'Practices: automated testing, CI/CD, feature flags (kill switch), gradual rollout, observability, error budgets, SLOs, blameless culture. Accept: some failures inevitable, learn from them. Prevent: critical path redundancy, circuit breakers, graceful degradation. Culture: safe to fail, psychological safety, incident reviews. Balance: error budget (reliability vs velocity).'
	},
	{
		category: 'Mentorship',
		question: 'How do you effectively mentor junior engineers?',
		answer: 'Approach: pair programming, code reviews (teaching moments), documentation, encourage questions, provide context (why not just what), assign challenging but achievable tasks. Techniques: Socratic method, explain trade-offs, share experiences. Avoid: doing work for them, perfectionism, assuming knowledge. Track: progress, feedback loops, career goals. Time investment: pays dividends.'
	},
	{
		category: 'Mentorship',
		question: 'How do you scale yourself as a senior engineer?',
		answer: 'Scale through: documentation (knowledge sharing), automation (reduce toil), mentoring (multiply impact), architecture (enable others), code reviews (improve quality), pair programming. Delegate: not just tasks, decision-making. Empower: trust, context, autonomy. Avoid: bottleneck, hero culture, hoarding knowledge. Measure: team growth, not individual output.'
	},
	{
		category: 'Architecture Decisions',
		question: 'How do you document and communicate architecture decisions?',
		answer: 'Use ADRs (Architecture Decision Records): context, decision, consequences, status (accepted/superseded). Include: alternatives considered, trade-offs, rationale. Store: version control, accessible. Present: diagrams (C4 model), tech talks, documentation. Review: regularly, revise when needed. Avoid: ivory tower, decision without context. Goal: transparency, knowledge sharing, future context.'
	},
	{
		category: 'Architecture Decisions',
		question: 'How do you evaluate new technologies for adoption?',
		answer: 'Evaluate: production-ready (maturity), community/support, learning curve, licensing, integration, performance, security, longevity. Process: spike/POC, team feedback, architecture review, pilot project. Avoid: resume-driven development, shiny object syndrome, major rewrites. Consider: maintenance burden, team skills, existing ecosystem. Default: boring technology (proven).'
	},
	{
		category: 'Cross-Functional',
		question: 'How do you collaborate with product and business teams?',
		answer: 'Communication: translate technical to business value, explain trade-offs, provide options (not just no), data-driven arguments. Understand: business goals, constraints, priorities. Contribute: feasibility, alternatives, technical opportunities. Avoid: jargon, gate-keeping, "not possible". Build: trust, credibility, partnership. Learn: domain knowledge, customer needs.'
	},
	{
		category: 'Cross-Functional',
		question: 'How do you handle pressure to cut corners for deadlines?',
		answer: 'Approach: explain risks (outages, security, future cost), provide options (MVP scope, phased delivery), negotiate trade-offs (what can wait), document decisions. Push back: when risks unacceptable (security, data loss). Compromise: acceptable debt with plan. Track: promised fixes, resurface later. Build: trust through delivering, credibility. Sometimes: need to say no firmly.'
	},
	{
		category: 'Team Dynamics',
		question: 'How do you foster a culture of engineering excellence?',
		answer: 'Culture: code reviews (learning), testing (quality), refactoring (maintainability), documentation (knowledge), automation (efficiency). Practices: tech talks, lunch & learns, innovation time, blameless post-mortems. Recognition: acknowledge good work, celebrate wins, learn from failures. Lead: by example, set standards, continuous improvement. Measure: code quality, cycle time, satisfaction.'
	},
	{
		category: 'Team Dynamics',
		question: 'How do you handle technical disagreements within the team?',
		answer: 'Process: listen (understand perspectives), evidence-based (data, benchmarks), discuss trade-offs, consider context, seek consensus. Escalation: architect, tech lead, spike/POC. Decision: document rationale, time-box discussion, revisit if new information. Avoid: ego, authority override without reasoning, endless debate. Goal: best solution, team alignment, learning.'
	},
	{
		category: 'Standards',
		question: 'How do you establish and maintain coding standards?',
		answer: 'Establish: team consensus, documented (wiki/repo), examples, automated linting/formatting. Cover: style, architecture patterns, error handling, logging, testing. Enforce: CI/CD checks, code reviews, pair programming. Evolve: regular review, retrospectives, industry best practices. Avoid: overly rigid, personal preferences. Goal: consistency, quality, onboarding.'
	},
	{
		category: 'Standards',
		question: 'What makes code "production-ready"?',
		answer: 'Criteria: functionality (requirements met), testing (unit, integration, E2E), error handling (graceful degradation), logging (actionable), monitoring (alerts, dashboards), security (auth, validation, secrets), performance (meets SLOs), documentation (README, runbooks), reviewed (code review), deployable (CI/CD), observable (metrics, traces). Not: 100% coverage, perfect code. Balance: done vs over-engineered.'
	},
	{
		category: 'Career Growth',
		question: 'What distinguishes senior engineers from mid-level engineers?',
		answer: 'Senior: system thinking (not just code), anticipate problems, influence without authority, mentor effectively, communicate technical to non-technical, make pragmatic trade-offs, reduce complexity, ship impact (not just tasks), handle ambiguity, improve team velocity. Mid-level: executes well, needs some guidance, growing system view. Technical skill is baseline, impact multiplier is difference.'
	},
	{
		category: 'Career Growth',
		question: 'How do you stay current with technology as a senior engineer?',
		answer: 'Learn: blogs (weekly), conferences (yearly), open source (contribute), side projects, new features (C#/.NET releases), podcasts, books, courses. Filter: signal vs noise, focus on fundamentals (transferable), depth over breadth. Share: tech talks, blog posts, mentoring. Time: dedicated learning time, 20% rule. Balance: depth in core, breadth in adjacent. Avoid: chasing trends without purpose.'
	}
]
