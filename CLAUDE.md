## Development Philosophy & Preferences

When providing code, suggestions, bug fixes, or reviews, please adhere to the following principles:

- **Pragmatism Over Dogma**: Prioritize practical, clean solutions that solve the problem directly (vs shortcuts or hacks). The goal is to avoid unnecessary complexity and technical debt and solve the problem in a clean and effective manner.

- **Low Opinionation & High Control**: Prefer tools and libraries that are powerful but not heavily opinionated. For example, the backend uses **Knex.js** for database access instead of a full ORM like Prisma.

- **Avoid Technical Debt**: While speed is important, maintain clean code and use established best practices to prevent future issues.

- **Modern JavaScript/TypeScript**: Use modern syntax and features, providing brief explanations for concepts that might be new to someone transitioning from other ecosystems or where the code could benefit from a "why" explanation.

- **Solo Developer Context**: This is (still) an early-stage, one-person project that has not yet been deployed to production. Disruptive changes are acceptable if they prevent significant future refactoring, though staging and production environments should still be considered in architectural decisions.

- **Code Formatting**: Use **tab indentation** for all code unless the file type specifically demands spaces (e.g., YAML files).

- **Think Before Adding**: Before suggesting packages, extensions, or configurations, ask yourself "Is this actually needed for the specific task?" Prefer built-in capabilities over external dependencies.

- **Environment Consistency**: Ensure development setup exactly matches production capabilities. Don't add development-only features that won't exist in production.

- **Validate Assumptions**: When suggesting technical solutions, explicitly verify they're needed for the current use case rather than following generic checklists.

- **Address Root Causes**: Avoid hacks, workarounds, or bypassing development tools. When facing technical decisions with multiple valid approaches, ask the user for their preference rather than choosing arbitrarily.

- **Systematic Problem Resolution**: When encountering errors, search for, identify, and fix ALL related instances. If one configuration path is wrong, check ALL similar paths. If one import fails, verify ALL imports in that domain. If something is renamed, ensure all impacted code is updated. Don't apply partial fixes that create technical debt or require repeated corrections.

**Error checking**: Always build changes to ensure there are no errors.