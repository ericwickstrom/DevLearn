export default [
	{
		category: 'Azure Geography',
		question: 'What is an Azure Region?',
		answer: 'Region: geographical area containing one or more datacenters. 60+ regions worldwide. Benefits: deploy close to users (low latency), compliance (data residency), disaster recovery. Example regions: East US, West Europe, Southeast Asia. Choose based on: proximity, features, pricing.'
	},
	{
		category: 'Azure Geography',
		question: 'What are Availability Zones?',
		answer: 'Availability Zones: physically separate datacenters within an Azure region (minimum 3 per region). Independent power, cooling, networking. Protect from datacenter-level failures. Benefits: 99.99% SLA for VMs, high availability. Use for: mission-critical apps, production workloads. Replicate across zones for redundancy.'
	},
	{
		category: 'Azure Geography',
		question: 'What are Region Pairs?',
		answer: 'Region Pairs: two regions within same geography paired for disaster recovery (300+ miles apart). Benefits: planned updates (one region at a time), data residency, platform recovery prioritization. Examples: East US ↔ West US, North Europe ↔ West Europe. Azure replicates services across pairs.'
	},
	{
		category: 'Azure Geography',
		question: 'What are Azure Geographies?',
		answer: 'Geography: discrete market containing 2+ regions, preserving data residency/compliance boundaries. Examples: Americas, Europe, Asia Pacific, Middle East/Africa. Benefits: meet compliance requirements, data sovereignty. Choose geography based on: regulations, compliance needs, customer location.'
	},
	{
		category: 'Azure Resources',
		question: 'What is an Azure Resource?',
		answer: 'Resource: manageable item in Azure (VM, storage account, web app, database, virtual network). Basic building block. Has properties: name, type, location, tags. Created, managed, deleted. Everything you create is a resource. Organized using resource groups.'
	},
	{
		category: 'Azure Resources',
		question: 'What is a Resource Group?',
		answer: 'Resource Group: logical container for Azure resources. Organizes related resources. All resources must belong to one group (only one at a time). Benefits: manage lifecycle together, apply permissions, organize by project/environment. Can contain resources from different regions. Delete group deletes all resources.'
	},
	{
		category: 'Azure Resources',
		question: 'What is an Azure Subscription?',
		answer: 'Subscription: logical container for resource groups, billing boundary. Provides authenticated/authorized access to Azure. Can have multiple subscriptions (dev/test/prod, departments, billing separation). Limits: API calls, resources per subscription. Linked to Azure account. All charges roll up to subscription.'
	},
	{
		category: 'Azure Resources',
		question: 'What are Management Groups?',
		answer: 'Management Groups: containers for organizing subscriptions. Hierarchical structure (up to 6 levels deep). Apply governance: policies, RBAC at scale across subscriptions. Benefits: enterprise-scale management, inheritance (child inherits from parent). Root management group contains all subscriptions. Organize by business units, environments, regions.'
	},
	{
		category: 'Azure Resources',
		question: 'What is the Azure Resource Manager (ARM)?',
		answer: 'ARM: deployment and management service for Azure. Provides unified layer for all operations (create, update, delete resources). Features: templates (JSON), tagging, RBAC, policies, locks. All requests go through ARM - consistency across tools (Portal, CLI, PowerShell, SDKs). Enables infrastructure as code.'
	},
	{
		category: 'Azure Resources',
		question: 'What are ARM Templates?',
		answer: 'ARM Templates: JSON files defining infrastructure/configuration (Infrastructure as Code). Declarative syntax (what you want, not how). Benefits: consistent deployment, version control, reusability, modular design. Parameters for customization. Idempotent (same result if run multiple times). Alternative: Bicep (simplified syntax).'
	},
	{
		category: 'Compute',
		question: 'What are Azure Virtual Machines?',
		answer: 'Virtual Machines: IaaS offering, full control over OS, software, configuration. Use cases: lift-and-shift, custom software, complete control. You manage: OS patches, software, security. Azure manages: hardware, host. Pricing: pay for VM + storage. Choose: size, OS (Windows/Linux), region.'
	},
	{
		category: 'Compute',
		question: 'What are Virtual Machine Scale Sets?',
		answer: 'VM Scale Sets: deploy and manage set of identical VMs. Auto-scaling: increase/decrease based on demand or schedule. Benefits: high availability (spread across zones), large-scale (up to 1000 VMs), load balancing. Use for: scalable workloads, microservices, compute clusters. Centralized management.'
	},
	{
		category: 'Compute',
		question: 'What is Azure App Service?',
		answer: 'App Service: PaaS for hosting web apps, REST APIs, mobile backends. Supports: .NET, Java, Node.js, Python, PHP. Features: auto-scaling, DevOps integration, custom domains, SSL. Azure manages: infrastructure, patching, scaling. You manage: application code. Pricing tiers: Free, Shared, Basic, Standard, Premium.'
	},
	{
		category: 'Compute',
		question: 'What are Azure Container Instances (ACI)?',
		answer: 'ACI: fastest way to run containers in Azure without managing VMs. Serverless containers. Benefits: fast startup, per-second billing, flexible sizing. Use for: simple containers, batch jobs, event-driven apps. No orchestration (use AKS for that). Good for: dev/test, simple scenarios.'
	},
	{
		category: 'Compute',
		question: 'What is Azure Kubernetes Service (AKS)?',
		answer: 'AKS: managed Kubernetes service for orchestrating containerized applications. Microsoft manages: control plane, patching, upgrades. You manage: nodes, apps. Benefits: simplified deployment, auto-scaling, monitoring integration. Use for: microservices, complex containerized apps. Kubernetes expertise recommended.'
	},
	{
		category: 'Compute',
		question: 'What is Azure Functions?',
		answer: 'Azure Functions: serverless compute service, event-driven. Write code that runs in response to events (HTTP requests, timers, queue messages). Pay only when code runs (consumption plan). Benefits: no infrastructure management, auto-scale, multiple languages. Use for: APIs, data processing, scheduled tasks, webhooks.'
	},
	{
		category: 'Networking',
		question: 'What is Azure Virtual Network (VNet)?',
		answer: 'VNet: isolated network in Azure. Building block for private network. Resources in VNet can communicate. Features: subnets, IP addressing, network security groups, route tables. Use for: secure communication, hybrid connectivity. Default: resources in VNet can reach internet, isolated from other VNets.'
	},
	{
		category: 'Networking',
		question: 'What is a Network Security Group (NSG)?',
		answer: 'NSG: firewall for Azure resources. Contains security rules (allow/deny traffic). Rules define: source/destination, port, protocol, priority. Apply to: subnet or network interface. Default rules exist. Use for: control traffic flow, segment network, implement zero trust. Stateful firewall.'
	},
	{
		category: 'Networking',
		question: 'What is Azure VPN Gateway?',
		answer: 'VPN Gateway: send encrypted traffic between Azure and on-premises over public internet. Site-to-Site: connect on-premises network to Azure. Point-to-Site: connect individual device. VNet-to-VNet: connect Azure VNets. Use for: hybrid connectivity, secure access. SKUs determine throughput.'
	},
	{
		category: 'Networking',
		question: 'What is Azure ExpressRoute?',
		answer: 'ExpressRoute: private connection between on-premises and Azure (not over internet). Benefits: faster, more reliable, lower latency, higher security than VPN. Connectivity through: provider, direct connection. Use for: large data migrations, disaster recovery, hybrid cloud. More expensive than VPN but better performance.'
	}
]
