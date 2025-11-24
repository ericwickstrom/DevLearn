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

export const questionSets = {
	'General Interview Prep': general,
	'Software Engineering Fundamentals': softwareEngineeringFundamentals,
	'Python Essentials': python,
	'System Design Deep Dive': systemDesign,
	'C# Essentials': csharp,
	'.NET Fundamentals': dotnetFundamentals,
	'ASP.NET Core': aspnetCore,
	'.NET Advanced (Mid-Level)': dotnetAdvanced,
	'Architecture & Patterns (Mid-Level)': architecturePatterns,
	'Performance & Optimization (Mid-Level)': performanceOptimization,
	'.NET Expert (Senior-Level)': dotnetExpert,
	'System Design & Architecture (Senior-Level)': systemDesignSenior,
	'Leadership & Best Practices (Senior-Level)': leadership
}

// Backward compatibility
export const questions = questionSets['General Interview Prep']
