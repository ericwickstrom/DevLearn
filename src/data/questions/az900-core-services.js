export default [
	{
		category: 'Storage',
		question: 'What is Azure Blob Storage?',
		answer: 'Blob Storage: object storage for unstructured data (text, binary). Three types: Block blobs (files, media), Append blobs (logs), Page blobs (VHD files). Tiers: Hot (frequent access), Cool (infrequent, 30+ days), Archive (rare, 180+ days). Use for: backups, media, documents, static websites.'
	},
	{
		category: 'Storage',
		question: 'What is Azure Disk Storage?',
		answer: 'Disk Storage: block-level storage for VMs. Types: Standard HDD (low cost), Standard SSD (consistent performance), Premium SSD (high performance), Ultra Disk (highest performance). Managed disks: Azure manages, encryption, snapshots. Use for: VM disks, databases. Choose based on: performance needs, cost.'
	},
	{
		category: 'Storage',
		question: 'What is Azure File Storage?',
		answer: 'File Storage: fully managed file shares in cloud (SMB/NFS protocol). Access from: cloud/on-premises, Windows/Linux/macOS. Benefits: lift-and-shift file shares, replace/supplement on-premises file servers. Use for: shared access, legacy apps, diagnostic data. Can mount as network drive.'
	},
	{
		category: 'Storage',
		question: 'What are Azure Storage redundancy options?',
		answer: 'LRS (Locally Redundant): 3 copies in one datacenter (cheapest). ZRS (Zone Redundant): 3 copies across availability zones in one region. GRS (Geo-Redundant): 6 copies (3 primary region + 3 secondary). GZRS (Geo-Zone-Redundant): combines ZRS + GRS. RA-GRS/RA-GZRS: read access to secondary. Choose based on: availability needs, budget.'
	},
	{
		category: 'Storage',
		question: 'What is an Azure Storage Account?',
		answer: 'Storage Account: unique namespace for Azure Storage (blobs, files, queues, tables). Provides: URL endpoint, access control, encryption. Account types: Standard (general purpose), Premium (high performance). Settings: region, redundancy, performance tier. Name must be globally unique.'
	},
	{
		category: 'Database',
		question: 'What is Azure Cosmos DB?',
		answer: 'Cosmos DB: globally distributed NoSQL database. Multi-model: document, key-value, graph, column-family. Features: turnkey global distribution, single-digit millisecond latency, 99.999% availability SLA. Multiple consistency levels. Use for: web, mobile, gaming, IoT. APIs: SQL, MongoDB, Cassandra, Gremlin, Table.'
	},
	{
		category: 'Database',
		question: 'What is Azure SQL Database?',
		answer: 'SQL Database: fully managed relational database (PaaS). Based on SQL Server. Azure manages: patching, backups, high availability. Features: auto-scaling, intelligent performance, security. Purchasing models: DTU, vCore. Use for: modern cloud apps, migrate SQL Server. Built-in intelligence for optimization.'
	},
	{
		category: 'Database',
		question: 'What is Azure SQL Managed Instance?',
		answer: 'SQL Managed Instance: PaaS option with near 100% SQL Server compatibility. Best for: lift-and-shift, complex migrations. Features: VNet integration, cross-database queries, SQL Agent. Azure manages infrastructure. More compatible than Azure SQL Database but slightly less managed. Migration path from on-premises.'
	},
	{
		category: 'Database',
		question: 'What is Azure Database for MySQL/PostgreSQL?',
		answer: 'Managed MySQL/PostgreSQL databases in Azure. Azure handles: patching, backups, monitoring, high availability. Built-in security. Pricing tiers: Basic, General Purpose, Memory Optimized. Use for: open-source database workloads. Compatible with community editions. Easy migration from on-premises/other clouds.'
	},
	{
		category: 'Analytics',
		question: 'What is Azure Synapse Analytics?',
		answer: 'Synapse Analytics: unified analytics platform (formerly SQL Data Warehouse). Combines: data warehousing, big data analytics, data integration. Query data: on-demand (serverless) or provisioned. Use for: business intelligence, data science, real-time analytics. Integrates with Power BI, Azure ML. Petabyte scale.'
	},
	{
		category: 'Analytics',
		question: 'What is Azure HDInsight?',
		answer: 'HDInsight: managed Apache Hadoop, Spark, Kafka, HBase, Storm. Open-source analytics. Process large amounts of data. Use for: batch processing, real-time analytics, machine learning. Benefits: fully managed, cost-effective, integrates with Azure services. Choose framework based on workload.'
	},
	{
		category: 'Analytics',
		question: 'What is Azure Databricks?',
		answer: 'Databricks: Apache Spark-based analytics platform optimized for Azure. Collaborative: notebooks, dashboards. Use for: big data analytics, machine learning, data engineering. Integrates with: Azure Storage, SQL Database, Synapse. Fast setup, auto-scaling, collaborative workspace. Popular for data science teams.'
	},
	{
		category: 'IoT',
		question: 'What is Azure IoT Hub?',
		answer: 'IoT Hub: managed service for bi-directional communication with IoT devices. Features: device management, per-device authentication, device-to-cloud telemetry, cloud-to-device commands. Scales to millions of devices. Security built-in. Use for: IoT solutions, device connectivity, telemetry collection. Integrates with Azure services for processing.'
	},
	{
		category: 'IoT',
		question: 'What is Azure IoT Central?',
		answer: 'IoT Central: SaaS solution for IoT (built on IoT Hub). No cloud development expertise required. Pre-built templates. Features: device connection, monitoring, management, rules. Use for: quick IoT solutions, non-developers. Less flexible than IoT Hub but easier. Good for: proof of concepts, simple scenarios.'
	},
	{
		category: 'AI/ML',
		question: 'What is Azure Machine Learning?',
		answer: 'Azure ML: cloud platform for building, training, deploying ML models. Features: drag-and-drop designer, Jupyter notebooks, automated ML, MLOps. Supports: Python, R, popular frameworks (TensorFlow, PyTorch). Use for: data science, predictive analytics. Benefits: collaboration, scaling, model management, deployment.'
	},
	{
		category: 'AI/ML',
		question: 'What is Azure Cognitive Services?',
		answer: 'Cognitive Services: pre-built AI APIs for vision, speech, language, decision. No ML expertise required. Services: Computer Vision, Face, Speech, Language Understanding, Translator. Use for: add AI capabilities quickly. Pay-per-call pricing. Examples: image recognition, sentiment analysis, speech-to-text, chatbots.'
	},
	{
		category: 'Integration',
		question: 'What is Azure Logic Apps?',
		answer: 'Logic Apps: serverless workflow automation (iPaaS). Visual designer for workflows. 200+ connectors (Office 365, Salesforce, Twitter, etc). Triggers and actions. Use for: integrate apps/data/systems, automate business processes. Pay per execution. Example: when email arrives, save attachment to storage.'
	},
	{
		category: 'Integration',
		question: 'What is Azure Event Grid?',
		answer: 'Event Grid: event routing service for event-driven architectures. Publish-subscribe model. Built-in events from Azure services. Custom topics for your events. Benefits: real-time delivery, filtering, fan-out to multiple handlers. Use for: serverless apps, app integration, monitoring automation. Pay per operation.'
	},
	{
		category: 'Management',
		question: 'What is Azure Monitor?',
		answer: 'Azure Monitor: full-stack monitoring service. Collects: metrics, logs, traces. Features: dashboards, alerts, autoscale, Application Insights (APM). Query data with KQL. Use for: performance monitoring, troubleshooting, proactive alerts. Integrates with all Azure services. Log Analytics workspace for log storage.'
	},
	{
		category: 'Management',
		question: 'What is Azure Advisor?',
		answer: 'Azure Advisor: personalized cloud consultant. Analyzes configuration and usage. Recommendations for: High Availability, Security, Performance, Cost, Operational Excellence. Free service. Actionable suggestions with steps. Score shows compliance. Use to: optimize resources, reduce costs, improve security, increase reliability.'
	}
]
