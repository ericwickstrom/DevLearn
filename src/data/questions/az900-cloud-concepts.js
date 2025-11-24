export default [
	{
		category: 'Cloud Computing Basics',
		question: 'What is cloud computing?',
		answer: 'Cloud computing is the delivery of computing services (servers, storage, databases, networking, software, analytics) over the internet ("the cloud"). Benefits: lower costs, faster innovation, flexible resources, economies of scale. Pay-as-you-go pricing. Access resources on-demand without managing physical infrastructure.'
	},
	{
		category: 'Cloud Computing Basics',
		question: 'What are the main benefits of cloud computing?',
		answer: 'High availability (uptime guarantees), Scalability (handle growth), Elasticity (auto-scale), Agility (deploy quickly), Geo-distribution (data centers worldwide), Disaster recovery, Pay-as-you-go (cost optimization), Global reach, Security (Microsoft invests heavily).'
	},
	{
		category: 'Cloud Computing Basics',
		question: 'What is the difference between Capital Expenditure (CapEx) and Operational Expenditure (OpEx)?',
		answer: 'CapEx: upfront cost on physical infrastructure (servers, buildings), depreciate over time, predict expenses upfront. OpEx: pay-as-you-go, no upfront cost, pay for services as used, scale up/down dynamically. Cloud computing shifts from CapEx to OpEx model.'
	},
	{
		category: 'Cloud Models',
		question: 'What is Public Cloud?',
		answer: 'Public Cloud: resources owned and operated by third-party provider (Azure, AWS, GCP), delivered over internet, shared by multiple customers (multi-tenant). Benefits: no CapEx, high availability, agility, pay-as-you-go. Examples: Azure, Microsoft 365, Dynamics 365.'
	},
	{
		category: 'Cloud Models',
		question: 'What is Private Cloud?',
		answer: 'Private Cloud: resources used exclusively by one organization, can be on-premises or hosted by third party. Benefits: complete control, customization, legacy app support. Challenges: higher cost, maintenance responsibility, scalability limitations. Use for: compliance, security requirements.'
	},
	{
		category: 'Cloud Models',
		question: 'What is Hybrid Cloud?',
		answer: 'Hybrid Cloud: combines public and private clouds, allows data/apps to move between them. Benefits: flexibility, gradual migration, compliance options, burst to cloud. Use cases: keep sensitive data on-premises, extend capacity to public cloud, disaster recovery.'
	},
	{
		category: 'Cloud Service Types',
		question: 'What is Infrastructure as a Service (IaaS)?',
		answer: 'IaaS: rent IT infrastructure (servers, VMs, storage, networks). Most flexible, you manage: OS, middleware, runtime, data, apps. Provider manages: hardware, network, physical security. Examples: Azure Virtual Machines, Storage, Networking. Use for: lift-and-shift migrations, test/dev environments.'
	},
	{
		category: 'Cloud Service Types',
		question: 'What is Platform as a Service (PaaS)?',
		answer: 'PaaS: complete development/deployment environment in cloud. Provider manages: infrastructure, OS, middleware, runtime. You manage: applications, data. Benefits: faster development, reduced management. Examples: Azure App Service, Azure SQL Database, Azure Functions. Use for: web apps, APIs, business analytics.'
	},
	{
		category: 'Cloud Service Types',
		question: 'What is Software as a Service (SaaS)?',
		answer: 'SaaS: complete software solution, access via browser. Provider manages everything. You use the software. Benefits: no installation, automatic updates, anywhere access. Examples: Microsoft 365, Dynamics 365, Outlook, OneDrive. Pay per-user subscription model.'
	},
	{
		category: 'Cloud Service Types',
		question: 'What is the Shared Responsibility Model?',
		answer: 'Shared Responsibility: security/management divided between cloud provider and customer. Provider always responsible: physical datacenter, network, hosts. Customer always: data, endpoints, accounts. Varies by service: IaaS (customer manages more), PaaS (balanced), SaaS (provider manages most). Know your responsibilities!'
	},
	{
		category: 'Cloud Concepts',
		question: 'What is High Availability?',
		answer: 'High Availability: system remains operational for maximum uptime. Azure SLA guarantees (99.9%, 99.95%, 99.99% depending on service). Achieved through: redundancy, load balancing, failover. Measured in "nines" - 99.99% = 52 minutes downtime/year. Different tiers for different needs.'
	},
	{
		category: 'Cloud Concepts',
		question: 'What is Scalability?',
		answer: 'Scalability: ability to handle increased load. Vertical scaling (scale up): add more CPU/RAM to existing machine. Horizontal scaling (scale out): add more machines. Azure supports both. Benefits: handle growth, pay only for what you need. Auto-scaling adjusts automatically based on demand.'
	},
	{
		category: 'Cloud Concepts',
		question: 'What is Elasticity?',
		answer: 'Elasticity: automatically add/remove resources based on demand. Related to scalability but focuses on automatic adjustment. Scale out when demand increases, scale in when demand decreases. Benefits: cost optimization, handle unexpected traffic spikes. Example: Black Friday sales, tax season.'
	},
	{
		category: 'Cloud Concepts',
		question: 'What is Agility in cloud computing?',
		answer: 'Agility: ability to rapidly develop, test, and deploy applications. Benefits: faster time to market, experiment quickly, respond to changes. Cloud provides: instant infrastructure, automated deployment, dev/test environments. Enables DevOps practices, continuous integration/deployment.'
	},
	{
		category: 'Cloud Concepts',
		question: 'What is Fault Tolerance?',
		answer: 'Fault Tolerance: system continues operating when component fails. Achieved through: redundancy, backup systems, failover mechanisms. Azure provides: availability zones, region pairs, backup services. Different from high availability (minimizes downtime) - fault tolerance means no downtime during failure.'
	},
	{
		category: 'Cloud Concepts',
		question: 'What is Disaster Recovery?',
		answer: 'Disaster Recovery: ability to recover from catastrophic failure. RTO (Recovery Time Objective): how quickly to restore. RPO (Recovery Point Objective): acceptable data loss. Azure provides: site recovery, backup, geo-redundant storage. DR plan includes: backup strategy, failover procedures, testing.'
	},
	{
		category: 'Cloud Economics',
		question: 'What are the advantages of cloud economics?',
		answer: 'Economies of scale: Microsoft bulk buying reduces costs. No upfront costs: pay-as-you-go. Right-sizing: pay only for what you use. Predictable costs: budgeting tools, spending limits. Cost optimization: resize/shutdown unused resources. Global scale without global investment.'
	},
	{
		category: 'Cloud Economics',
		question: 'What is Consumption-based pricing?',
		answer: 'Consumption-based: pay only for resources consumed (no upfront cost). Examples: pay per hour VM runs, per GB storage used, per transaction. Benefits: cost efficiency, no wasted capacity, scale costs with usage. Opposite of fixed pricing. Common in serverless (Azure Functions).'
	},
	{
		category: 'Service Level Agreements',
		question: 'What is an SLA (Service Level Agreement)?',
		answer: 'SLA: formal commitment of service availability from Microsoft. Specifies: uptime percentage (99.9%, 99.95%), service credits if not met. Varies by service. Composite SLA: multiply individual SLAs (VM 99.9% × Database 99.99% = 99.89%). Application SLA: your availability commitment to customers.'
	},
	{
		category: 'Service Level Agreements',
		question: 'How do you improve application SLA?',
		answer: 'Use redundancy: multiple VMs, regions, availability zones. Implement backup/failover: Azure Site Recovery. Monitor and respond: Azure Monitor, alerts. Use PaaS when possible: higher SLAs than IaaS. Design for failure: circuit breakers, retry logic. Test disaster recovery. Balance cost vs availability requirements.'
	}
]
