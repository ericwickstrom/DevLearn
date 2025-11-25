import general from './general.js'
import python from './python.js'
import systemDesign from './system-design.js'
import csharp from './csharp.js'
import dotnetFundamentals from './dotnet-fundamentals.js'
import aspnetCore from './aspnet-core.js'
import dotnetAdvanced from './dotnet-advanced.js'
import architecturePatterns from './architecture-patterns.js'
import performanceOptimization from './performance-optimization.js'
import dotnetExpert from './dotnet-expert.js'
import systemDesignSenior from './system-design-senior.js'
import leadership from './leadership.js'
import softwareEngineeringFundamentals from './software-engineering-fundamentals.js'
import react from './react.js'
import az900CloudConcepts from './az900-cloud-concepts.js'
import az900Architecture from './az900-architecture.js'
import az900CoreServices from './az900-core-services.js'
import az900Security from './az900-security.js'
import az900Pricing from './az900-pricing.js'

export const questionSets = {
	'General Interview Prep': general,
	'Software Engineering Fundamentals': softwareEngineeringFundamentals,
	'Python Essentials': python,
	'React Essentials': react,
	'System Design Deep Dive': systemDesign,
	'C# Essentials': csharp,
	'.NET Fundamentals': dotnetFundamentals,
	'ASP.NET Core': aspnetCore,
	'.NET Advanced (Mid-Level)': dotnetAdvanced,
	'Architecture & Patterns (Mid-Level)': architecturePatterns,
	'Performance & Optimization (Mid-Level)': performanceOptimization,
	'.NET Expert (Senior-Level)': dotnetExpert,
	'System Design & Architecture (Senior-Level)': systemDesignSenior,
	'Leadership & Best Practices (Senior-Level)': leadership,
	'AZ-900 - Cloud Concepts': az900CloudConcepts,
	'AZ-900 - Azure Architecture': az900Architecture,
	'AZ-900 - Core Services': az900CoreServices,
	'AZ-900 - Security & Compliance': az900Security,
	'AZ-900 - Pricing & Support': az900Pricing
}

// Backward compatibility
export const questions = questionSets['General Interview Prep']
