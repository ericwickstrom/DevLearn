export default [
	{
		category: 'Cost Management',
		question: 'What factors affect Azure costs?',
		answer: 'Factors: resource type (VM, storage, network), usage (hours, data transferred), region (prices vary), tier/size (Basic vs Premium), support plan, licensing (BYOL vs pay-as-you-go), reservations/spot instances, bandwidth (inbound free, outbound charged). Understand: what you use, how you use it, where you use it.'
	},
	{
		category: 'Cost Management',
		question: 'What is the Azure Pricing Calculator?',
		answer: 'Pricing Calculator: estimate costs before deploying. Configure: services, regions, tiers, usage. Provides: monthly cost estimate, export/share estimates. Use for: planning, budgeting, comparing configurations. Web-based tool (no account needed). Doesn\'t show actual usage, only estimates based on input.'
	},
	{
		category: 'Cost Management',
		question: 'What is the Total Cost of Ownership (TCO) Calculator?',
		answer: 'TCO Calculator: compare on-premises vs Azure costs over time. Input: current infrastructure, assumptions, costs. Output: cost savings, report. Factors: hardware, software, electricity, maintenance, labor. Use for: migration justification, executive presentations, long-term planning. Shows complete picture beyond just infrastructure costs.'
	},
	{
		category: 'Cost Management',
		question: 'What is Azure Cost Management?',
		answer: 'Cost Management: monitor, allocate, optimize Azure spending. Features: cost analysis, budgets, alerts, recommendations, exports. View costs by: resource group, tag, service, time period. Advisor recommendations for savings. Use for: track actual spending, forecast, identify waste. Available in Azure Portal. Free service.'
	},
	{
		category: 'Cost Management',
		question: 'What are Resource Tags?',
		answer: 'Tags: name/value pairs for organizing resources. Examples: Environment=Production, Department=IT, CostCenter=123. Use for: cost tracking, automation, organization, compliance. Apply to: subscription, resource group, resource. Tag inheritance not automatic. Policies can enforce tagging. Appears in cost reports. Up to 50 tags per resource.'
	},
	{
		category: 'Cost Optimization',
		question: 'What are Azure Reservations?',
		answer: 'Reservations: commit to 1 or 3 years for discounts (up to 72% vs pay-as-you-go). Apply to: VMs, SQL Database, Cosmos DB, Synapse, Storage, others. Benefits: significant savings, budget predictability. Trade-off: commitment. Scope: shared, single subscription, resource group. Can exchange/cancel (fees may apply). Best for: predictable workloads.'
	},
	{
		category: 'Cost Optimization',
		question: 'What is Azure Hybrid Benefit?',
		answer: 'Hybrid Benefit: use existing on-premises licenses in Azure. Applies to: Windows Server, SQL Server. Requirements: Software Assurance, eligible licenses. Benefits: significant savings (up to 85% combined with reservations). No additional license cost. Use for: migrations, hybrid scenarios. Calculate savings with pricing calculator.'
	},
	{
		category: 'Cost Optimization',
		question: 'What are Azure Spot Virtual Machines?',
		answer: 'Spot VMs: access unused Azure capacity at deep discounts (up to 90%). Trade-off: can be evicted when Azure needs capacity. Use for: interruptible workloads (batch processing, dev/test, rendering, analytics). Eviction policy: deallocate or delete. Pricing varies with capacity. Not suitable for production apps needing high availability.'
	},
	{
		category: 'Cost Optimization',
		question: 'How can you reduce Azure costs?',
		answer: 'Strategies: right-size resources (match workload needs), use reservations (1-3 year commit), shut down unused resources (dev/test), use auto-scale (scale down when idle), choose right region (pricing varies), use Spot VMs (non-critical), Azure Hybrid Benefit (existing licenses), monitoring/alerts (prevent surprises), PaaS over IaaS (less management overhead).'
	},
	{
		category: 'Support Plans',
		question: 'What Azure support plans are available?',
		answer: 'Plans: Basic (free, billing support, online resources), Developer ($29/month, business hours email), Standard ($100/month, 24/7 phone/email, 1hr response for critical), Professional Direct ($1000/month, faster response, architecture support), Premier (custom pricing, TAM, proactive guidance). Choose based on: business criticality, budget, response time needs.'
	},
	{
		category: 'Support Plans',
		question: 'What is included in Basic support?',
		answer: 'Basic Support (free, included for all): 24/7 self-help resources, Azure documentation, community forums, billing and subscription support, Azure Advisor recommendations, Service Health notifications. Does NOT include: technical support tickets, phone support, SLA guarantees for support response. Enough for: learning, non-production, small projects.'
	},
	{
		category: 'Support Plans',
		question: 'What is the Azure Service Level Agreement (SLA)?',
		answer: 'SLA: commitment of availability and performance for Azure services. Most services: 99.9% or higher uptime. Varies by: service, configuration (single VM vs availability set). Composite SLA: multiple services multiplied. Service credits if SLA not met. SLA defines: uptime percentage, measurement method, exclusions. Review before deploying production workloads.'
	},
	{
		category: 'Azure Marketplace',
		question: 'What is Azure Marketplace?',
		answer: 'Marketplace: online store for Azure-compatible solutions. Categories: VMs, apps, services, consulting. Providers: Microsoft, partners, ISVs. Benefits: certified solutions, integrated billing, quick deployment. Licensing: BYOL, pay-as-you-go, free trials. Use for: pre-built solutions, avoid building from scratch, tested integrations.'
	},
	{
		category: 'Service Lifecycle',
		question: 'What is Azure Preview?',
		answer: 'Preview: early access to new Azure features. Types: Private Preview (invited customers), Public Preview (all customers). Preview features: no SLA, not for production, may change, feedback requested. Use for: test new capabilities, influence development. Generally Available (GA) comes after preview with full support and SLA.'
	},
	{
		category: 'Service Lifecycle',
		question: 'What happens when an Azure service is deprecated?',
		answer: 'Deprecation: Azure announces service end-of-life. Process: announcement (typically 12+ months notice), migration path provided, customer notifications, support period, eventual shutdown. Customers must: migrate to replacement service or alternative. Azure helps with: migration tools, documentation, support. Plan ahead: review service lifecycle, stay informed.'
	},
	{
		category: 'Documentation',
		question: 'Where can you find Azure documentation?',
		answer: 'Resources: docs.microsoft.com/azure (official docs), Azure Portal (help icons), Microsoft Learn (free training), Azure Architecture Center (best practices), Azure Blog (announcements), Azure updates (new features), Azure YouTube channel, community forums, Stack Overflow, GitHub samples. Stay current: follow blogs, attend events, certifications.'
	},
	{
		category: 'Tools',
		question: 'What is the Azure Portal?',
		answer: 'Azure Portal: web-based unified console. Features: create resources, monitor, manage, dashboards, Cloud Shell. Accessible: from any browser, worldwide. Customizable dashboards. Role-based access. Mobile app available. Use for: day-to-day management, visual interface. Alternative: CLI, PowerShell, ARM templates for automation.'
	},
	{
		category: 'Tools',
		question: 'What is Azure Cloud Shell?',
		answer: 'Cloud Shell: browser-based shell (Bash or PowerShell). Pre-authenticated: uses Azure account. Pre-installed: Azure CLI, PowerShell, common tools. Persistent storage: home directory preserved. Access: from Portal, mobile app, shell.azure.com. Use for: quick scripts, management tasks, no local setup. 5GB storage included.'
	},
	{
		category: 'Tools',
		question: 'What is Azure CLI?',
		answer: 'Azure CLI: command-line tool for managing Azure (cross-platform). Commands start with "az". Install: Windows, macOS, Linux, Docker, Cloud Shell. Supports: scripting, automation, all Azure services. Output: JSON, table, TSV. Use for: automation, DevOps pipelines, infrastructure as code. Alternative to: PowerShell, Portal.'
	},
	{
		category: 'Tools',
		question: 'What is Azure PowerShell?',
		answer: 'Azure PowerShell: PowerShell modules for Azure management. Commands: cmdlets starting with verb-AzNoun (Get-AzVM). Install: Windows, macOS, Linux, Cloud Shell. Object-oriented. Works with: Windows PowerShell 5.1+, PowerShell 7+. Use for: automation, scripting, Windows-centric environments. Many admins prefer for: familiarity with PowerShell.'
	},
	{
		category: 'Tools',
		question: 'What is Azure Mobile App?',
		answer: 'Azure Mobile App: manage Azure resources from phone/tablet. Features: monitor health, respond to alerts, run commands (Cloud Shell), check status, restart resources. Platforms: iOS, Android. Use for: on-the-go management, incident response, check service health. Not full-featured as Portal but covers common tasks. Notifications for alerts.'
	}
]
