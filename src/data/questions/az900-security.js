export default [
	{
		category: 'Security Fundamentals',
		question: 'What is Defense in Depth?',
		answer: 'Defense in Depth: layered security strategy. Layers: Physical (datacenter), Identity (authentication), Perimeter (DDoS protection), Network (NSGs, firewalls), Compute (secure VMs, patching), Application (secure coding), Data (encryption). Each layer provides protection if another fails. Microsoft responsibility + your responsibility.'
	},
	{
		category: 'Security Fundamentals',
		question: 'What is the Zero Trust security model?',
		answer: 'Zero Trust: "never trust, always verify". Principles: verify explicitly (authentication every time), least privilege access (just enough access), assume breach (minimize blast radius, segment access). Traditional: trust inside network. Zero Trust: verify every request. Use: Conditional Access, MFA, JIT access.'
	},
	{
		category: 'Identity & Access',
		question: 'What is Azure Active Directory (Azure AD)?',
		answer: 'Azure AD: cloud-based identity and access management service. Features: SSO, MFA, Conditional Access, identity protection. Not same as Windows Server AD. Use for: authenticate employees, manage app access, B2B/B2C scenarios. Editions: Free, Office 365, Premium P1, Premium P2. Integrates with thousands of SaaS apps.'
	},
	{
		category: 'Identity & Access',
		question: 'What is Multi-Factor Authentication (MFA)?',
		answer: 'MFA: requires two or more verification methods. Something you know (password), have (phone), are (biometric). Reduces risk of compromised passwords. Azure AD MFA methods: Microsoft Authenticator, SMS, phone call, OATH tokens. Best practice: enable for all users, especially admins. Part of Zero Trust.'
	},
	{
		category: 'Identity & Access',
		question: 'What is Conditional Access?',
		answer: 'Conditional Access: if-then policy engine for access decisions. Conditions: user, location, device, app, risk level. Actions: allow, block, require MFA. Examples: require MFA from outside corporate network, block legacy authentication, require compliant device. Azure AD Premium P1 feature. Implements Zero Trust.'
	},
	{
		category: 'Identity & Access',
		question: 'What is Role-Based Access Control (RBAC)?',
		answer: 'RBAC: authorization system for Azure resources. Grant permissions based on roles. Components: security principal (who), role definition (what), scope (where). Built-in roles: Owner, Contributor, Reader. Custom roles available. Principle of least privilege. Inheritance: permissions flow down from parent scope.'
	},
	{
		category: 'Identity & Access',
		question: 'What is Single Sign-On (SSO)?',
		answer: 'SSO: authenticate once, access multiple applications. Benefits: improved user experience, reduced passwords to remember, increased security, simplified management. Azure AD provides SSO for: cloud apps, on-premises apps (App Proxy), custom apps. Supports: SAML, OAuth, OpenID Connect, password-based.'
	},
	{
		category: 'Security Tools',
		question: 'What is Azure Security Center (Microsoft Defender for Cloud)?',
		answer: 'Microsoft Defender for Cloud (formerly Security Center): unified security management and threat protection. Features: secure score, recommendations, threat protection, compliance dashboard. Free tier: assessments, recommendations. Paid tier: threat protection, advanced features. Use for: improve security posture, prevent/detect/respond to threats.'
	},
	{
		category: 'Security Tools',
		question: 'What is Azure Sentinel?',
		answer: 'Azure Sentinel: cloud-native SIEM (Security Information and Event Management) and SOAR. Features: collect data at scale, detect threats using AI, investigate with KQL, respond to incidents. Connectors for: Microsoft services, security products, industry standards. Use for: security operations center, threat hunting, compliance.'
	},
	{
		category: 'Security Tools',
		question: 'What is Azure Key Vault?',
		answer: 'Key Vault: securely store and access secrets, keys, certificates. Features: hardware security modules (HSMs), access policies, audit logging. Benefits: centralized secrets, reduce risk of leaking secrets, compliance. Use for: connection strings, API keys, passwords, certificates. Integrate with: apps, services, pipelines.'
	},
	{
		category: 'Security Tools',
		question: 'What is Azure DDoS Protection?',
		answer: 'DDoS Protection: safeguard against distributed denial of service attacks. Two tiers: Basic (free, automatic), Standard (paid, advanced features, cost protection). Standard features: always-on monitoring, adaptive tuning, attack analytics, rapid response. Protects: public IPs, Application Gateway, Azure Front Door. SLA: resource availability during attack.'
	},
	{
		category: 'Network Security',
		question: 'What is Azure Firewall?',
		answer: 'Azure Firewall: managed cloud-based network security (stateful firewall as a service). Features: built-in high availability, threat intelligence, application FQDN filtering, NAT. Centrally manage and log connectivity. Use for: protect VNets, hybrid networks. Difference from NSG: Firewall is more advanced, NSG is basic filtering.'
	},
	{
		category: 'Governance',
		question: 'What is Azure Policy?',
		answer: 'Azure Policy: create, assign, manage policies to enforce rules. Policies ensure: compliance, consistency, governance. Examples: allowed VM sizes, required tags, allowed regions, naming conventions. Built-in + custom policies. Compliance dashboard. Remediation tasks. Apply at: subscription, resource group, management group levels.'
	},
	{
		category: 'Governance',
		question: 'What are Azure Blueprints?',
		answer: 'Azure Blueprints: define repeatable set of Azure resources. Package: ARM templates, policies, RBAC, resource groups. Use for: environment setup, compliance, standardization. Versioning supported. Difference from ARM templates: Blueprints track deployment, maintain relationship. Good for: governance, multiple environments, auditing requirements.'
	},
	{
		category: 'Governance',
		question: 'What are Resource Locks?',
		answer: 'Resource Locks: prevent accidental deletion or modification. Types: CanNotDelete (can read/modify, not delete), ReadOnly (can only read). Applied to: subscription, resource group, resource. Locks inherit to child resources. Override requires removing lock first. Use for: protect critical resources. Admins can still remove locks.'
	},
	{
		category: 'Privacy & Compliance',
		question: 'What is the Microsoft Privacy Statement?',
		answer: 'Privacy Statement: explains what personal data Microsoft collects, how it\'s used, and for what purposes. Covers: Microsoft products, services, websites. Transparency about data processing. User rights explained. Updated regularly. Important for: understanding data handling, compliance, trust.'
	},
	{
		category: 'Privacy & Compliance',
		question: 'What is the Trust Center?',
		answer: 'Trust Center: central resource about security, privacy, compliance. Contains: compliance offerings, certifications, reports, whitepapers, best practices. Covers: GDPR, ISO, SOC, HIPAA, FedRAMP, many more. Use to: understand compliance, demonstrate to auditors, inform decisions. Public website: https://www.microsoft.com/trust-center'
	},
	{
		category: 'Privacy & Compliance',
		question: 'What is the Service Trust Portal?',
		answer: 'Service Trust Portal: access audit reports and compliance materials. Requires: Azure AD account, NDA acceptance. Contains: independent audit reports, compliance guides, trust documents, regional compliance. Use for: compliance audits, due diligence, regulatory requirements. More detailed than Trust Center.'
	},
	{
		category: 'Privacy & Compliance',
		question: 'What is Azure Government?',
		answer: 'Azure Government: separate instance for US government. Features: isolated datacenters, screened personnel, compliance certifications (FedRAMP, DoD). Use for: government agencies, contractors, regulated industries. Same Azure services but physically/logically separated. Higher compliance requirements than commercial Azure.'
	},
	{
		category: 'Privacy & Compliance',
		question: 'What is Azure China?',
		answer: 'Azure China (21Vianet): physically separated instance operated by 21Vianet. Complies with Chinese regulations. Independent: separate accounts, subscriptions, services. Some services differ from global Azure. Use for: operate in China, data residency requirements. Meets Chinese compliance needs.'
	}
]
